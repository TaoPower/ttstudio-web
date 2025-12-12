require('dotenv').config();
const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Discord Client Setup
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
});

let memberCount = '---';

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    updateMemberCount();
    // Update count every 10 minutes
    setInterval(updateMemberCount, 10 * 60 * 1000);
});

async function updateMemberCount() {
    try {
        if (!process.env.GUILD_ID) return;
        const guild = await client.guilds.fetch(process.env.GUILD_ID);
        // guild.memberCount is available if the guild is in cache/fetched
        memberCount = guild.memberCount;
        console.log(`Updated member count: ${memberCount}`);
    } catch (error) {
        console.error('Error fetching member count:', error);
    }
}

// Only try to login if token is present
if (process.env.DISCORD_TOKEN && process.env.DISCORD_TOKEN !== 'your_bot_token_here') {
    client.login(process.env.DISCORD_TOKEN).catch(err => {
        console.error("Failed to login to Discord:", err.message);
    });
} else {
    console.warn("WARNING: DISCORD_TOKEN is not set in backend/.env");
}

// API Endpoint
app.get('/api/member-count', (req, res) => {
    res.json({ count: memberCount });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
