# 📜 Discord Bot Pack - Setup & User Guide

## **1️⃣ Introduction**
This Discord Bot Pack helps you manage your server efficiently with useful commands like:
- ✅ Check bot activity (`/ping`)
- ✅ Display command list (`/help`)
- ✅ Member management (`/kick`, `/ban`)
- ✅ Automatic role assignment (`/reactionrole`)

---

## **2️⃣ How to Install the Bot**
### **Step 1: Create a Bot & Get a Token**
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application ➝ Navigate to the **Bot** tab
3. Click **Add Bot**, enable **SERVER MEMBERS INTENT**
4. Copy the **Bot Token** (Save it for use in `.env`)

### **Step 2: Invite the Bot to Your Server**
1. Go to the **OAuth2 ➝ URL Generator** tab
2. Select **bot** and **applications.commands**
3. Assign `Administrator` permissions ➝ Copy the link and invite the bot to your server

### **Step 3: Setup Environment & Run the Bot**
1. Install [Node.js](https://nodejs.org/) (latest version)
2. Open a terminal and run:
   ```bash
   git clone https://github.com/yourrepo/discord-bot-pack.git
   cd discord-bot-pack
   npm install
   ```
3. Create a `.env` file and add your Token:
   ```env
   TOKEN=YOUR_DISCORD_BOT_TOKEN
   ```
4. Start the bot:
   ```bash
   node index.js
   ```

---

## **3️⃣ Command List**
| Command        | Function |
|--------------|----------|
| `/ping`      | Check bot response time |
| `/help`      | Display available commands |
| `/kick @user` | Kick a member (Requires `Kick Members` permission) |
| `/ban @user` | Ban a member (Requires `Ban Members` permission) |
| `/reactionrole` | Setup reaction-based role assignment |

---

## **4️⃣ Customizing the Bot**
📌 **Add new commands**: Open `index.js`, add new commands under `/commands/`
📌 **Change prefix**: The bot currently uses Slash Commands, but you can modify the command handler
📌 **Update the bot**: When a new version is available, simply pull the code and restart the bot

---

🎯 **Support**: If you encounter issues, contact us via [Discord Support](https://discord.gg/yourserver)

🚀 **Enjoy your bot!**

