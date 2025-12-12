import mongoose from 'mongoose';

// 1. Define Schema
const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true }, // e.g., "Znex0 - Gang Taso"
    image: { type: String, required: true }, // URL
    category: { type: String, required: true }, // "model", "design", "code"
    tags: { type: [String], default: [] }, // ["Premium", "New"]
    link: { type: String, default: '#' },
    createdAt: { type: Date, default: Date.now }
});

// 2. Prevent Overwriting Model if already compiled
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

// 3. Connect to DB
const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI not defined');
    }
    await mongoose.connect(process.env.MONGODB_URI);
};

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        await connectDB();

        // --- GET: Fetch Projects ---
        if (req.method === 'GET') {
            const projects = await Project.find({}).sort({ createdAt: -1 }); // Newest first
            return res.status(200).json(projects);
        }

        // --- POST: Add Project (Secure) ---
        if (req.method === 'POST') {
            const { secret, data } = req.body;
            
            // Simple Security Check
            if (secret !== process.env.API_SECRET) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            const newProject = new Project(data);
            await newProject.save();
            return res.status(201).json({ success: true, project: newProject });
        }

        return res.status(405).json({ error: 'Method Not Allowed' });

    } catch (error) {
        console.error('Project API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
