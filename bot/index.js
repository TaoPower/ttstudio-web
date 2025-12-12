const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();
const axios = require('axios');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const PREFIX = '/';

client.once('ready', () => {
    console.log(`Bot is online as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(PREFIX)) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Command: /post
    // Usage: /post | Title | Subtitle | ImageURL | Category (model/design/code) | Tags (comma separated)
    if (command === 'post') {
        const rawContent = message.content.slice(PREFIX.length + 4).trim();
        const parts = rawContent.split('|').map(p => p.trim());

        if (parts.length < 4) {
            return message.reply('❌ **Sai cú pháp!**\nCách dùng: `/post | Tiêu đề | Subtitle | Link Ảnh | Category (model/design/code) | Tags`\nVí dụ: `/post | Áo Cyberpunk | Znex0 | https://... | model | Premium, New`');
        }

        const [title, subtitle, image, category, tagsStr] = parts;
        const tags = tagsStr ? tagsStr.split(',').map(t => t.trim()) : [];

        // Loading message
        const loadingMsg = await message.reply('⏳ Đang gửi dữ liệu lên website...');

        try {
            // Send to Vercel API
            // LOCAL: http://localhost:3000/api/projects
            // PRODUCTION: https://your-vercel-project.vercel.app/api/projects
            // For now, we use process.env.API_URL or default to local for testing
            const API_URL = process.env.API_URL || 'http://localhost:3000/api/projects';
            
            await axios.post(API_URL, {
                secret: process.env.API_SECRET,
                data: {
                    title,
                    subtitle,
                    image,
                    category,
                    tags
                }
            });

            const embed = new EmbedBuilder()
                .setColor(0x00FF00)
                .setTitle('✅ Đăng bài thành công!')
                .setDescription(`**${title}** đã được thêm vào website.`)
                .setThumbnail(image)
                .addFields(
                    { name: 'Category', value: category, inline: true },
                    { name: 'Subtitle', value: subtitle, inline: true }
                )
                .setTimestamp();

            await loadingMsg.edit({ content: null, embeds: [embed] });

        } catch (error) {
            console.error(error);
            await loadingMsg.edit(`❌ **Lỗi:** ${error.response?.data?.error || error.message}`);
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
