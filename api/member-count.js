export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const { DISCORD_TOKEN, GUILD_ID } = process.env;

    if (!DISCORD_TOKEN || !GUILD_ID) {
        return res.status(500).json({ error: 'Missing Environment Variables' });
    }

    try {
        const response = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/preview`, {
            headers: {
                Authorization: `Bot ${DISCORD_TOKEN}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Discord API Error: ${response.statusText}`);
        }

        const data = await response.json();
        // data.approximate_member_count is usually available in preview endpoint
        res.status(200).json({ count: data.approximate_member_count });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
