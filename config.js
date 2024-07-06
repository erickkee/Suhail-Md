const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254746445235";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_39_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDY0LFxuICAgICAgICA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDc3LFxuICAgICAgICA5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE3MixcbiAgICAgICAgOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJKbEgydHBHZTl2a2xTWmdCYmZZcDRRa1lzVE8ydFRrbGpjTmVxSEVVQUxJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzUTNidjBteVIyLUlVMnFuU3VxaDBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5ZWQ3NDQ2LTU4MWUtNGI2NS05M2M5LTNiNDE1MzhhN2JiY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDQyLFxuICAgICAgMjA0LFxuICAgICAgNDEsXG4gICAgICAxNDYsXG4gICAgICAyNDcsXG4gICAgICAxNTksXG4gICAgICAxNCxcbiAgICAgIDEyMixcbiAgICAgIDE5NCxcbiAgICAgIDU0LFxuICAgICAgMjM4LFxuICAgICAgMTI1LFxuICAgICAgMTU2LFxuICAgICAgMTQwLFxuICAgICAgNjUsXG4gICAgICA1OCxcbiAgICAgIDI4LFxuICAgICAgMjgsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAyMixcbiAgICAgIDE4OSxcbiAgICAgIDExMCxcbiAgICAgIDEzOCxcbiAgICAgIDYsXG4gICAgICAyMTQsXG4gICAgICAxNTksXG4gICAgICA4NCxcbiAgICAgIDE4NixcbiAgICAgIDE3OSxcbiAgICAgIDExNyxcbiAgICAgIDE3OSxcbiAgICAgIDYsXG4gICAgICAzMSxcbiAgICAgIDk5LFxuICAgICAgNjUsXG4gICAgICAxOTIsXG4gICAgICA5MixcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZOFhGQ0s0MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ2NDQ1MjM1OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzUwNDE2MTAyNjA1NTk6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlhOdlpJRUVPUzZwclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0NDk5TDlySis3TzB6bDhJSVdZMUc3Wjk0K1B1UldIdlZ5VzN4aTBFV1ZzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkN6L3hRV0J4dUJBcDJCUTd4Y1JuZVRTTXpGSFdPMEdqZExocE9IODFjQnlhcFZERXA2a2VoaXdmMHZnbno4UnkxT0liU2Fkb1Q0dGJLK1Fad0xjcUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1BOWxuUnNUcnVRTTMrTXdDYXh4MUY4T1JFQlAzdzZlNEdGTTlaaXVOZml3d3QrR0o4TnZYMlZZa21JOG1yV3R0ekQ5V0VsTkJBZTVkVDBueHJucURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NjQ0NTIzNTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjk0NzYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzNsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDM2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKcTBuZkt5M2MxM080QkZQWDRFMzJpTytrcEwzaUNlODNkZ0pvUi9OQ0VjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTI0OTk5MjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
