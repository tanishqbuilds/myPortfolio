import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Discord Webhook endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not defined in environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const discordPayload = {
      embeds: [
        {
          title: "🚀 New Contact Form Submission",
          color: 0x00FFFF, // Cyan
          fields: [
            { name: "👤 Name", value: name || "Not provided", inline: true },
            { name: "📧 Email", value: email || "Not provided", inline: true },
            { name: "💬 Message", value: message || "No message" }
          ],
          timestamp: new Date().toISOString(),
          footer: { text: "Portfolio Contact Form" }
        }
      ]
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordPayload),
    });

    if (response.ok) {
      res.status(200).json({ message: 'Message sent to Discord successfully' });
    } else {
      const errorText = await response.text();
      console.error('Discord Webhook Error:', errorText);
      res.status(response.status).json({ error: 'Failed to send message to Discord' });
    }
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});