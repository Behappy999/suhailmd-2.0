const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2359064818244";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2359064818244";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_19_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICA3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMixcbiAgICAgICAgMjA3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NyxcbiAgICAgICAgNixcbiAgICAgICAgMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzLFxuICAgICAgICAxODEsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJObFlhRk10VEJVeURrQzN3d2pIZkpFREw4bWFVRzRFWWdJSGc4QkxjT3RvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpRHpnN2NrYVRNV2l1TVRTcGptbEVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRiMWUxNzE4LTNjNGUtNGQ5MC05ZmI5LTI3MzhlN2ZmNmY0N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDM1LFxuICAgICAgNzIsXG4gICAgICAzMixcbiAgICAgIDgzLFxuICAgICAgMTgyLFxuICAgICAgMTY2LFxuICAgICAgNCxcbiAgICAgIDEyNyxcbiAgICAgIDgwLFxuICAgICAgMTY5LFxuICAgICAgMTUyLFxuICAgICAgMjAyLFxuICAgICAgNTYsXG4gICAgICAxMzgsXG4gICAgICAyMDYsXG4gICAgICAyMzUsXG4gICAgICAyNDAsXG4gICAgICAyMjgsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICA2NyxcbiAgICAgIDIxNixcbiAgICAgIDExOCxcbiAgICAgIDg5LFxuICAgICAgMTIwLFxuICAgICAgNjEsXG4gICAgICAxNDAsXG4gICAgICAxOTUsXG4gICAgICA0MCxcbiAgICAgIDE5MyxcbiAgICAgIDIsXG4gICAgICAzMSxcbiAgICAgIDEzMyxcbiAgICAgIDYzLFxuICAgICAgMTkwLFxuICAgICAgNDIsXG4gICAgICA4NixcbiAgICAgIDAsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFVlpWVk1TS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NDgxODI0NDozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU1OTQxODczOTU4OTE3OjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09EZzdsc1FzZXZRdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTFZwM2E5ZTZaV3cvazRDUmdBT1hmQnZ6MnJCQTJDRHU2Qk15NUlTeFkxOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOZERlSFdDR3F4ZE0yUnQvOE1mMm1FTHUzVEJWbWw0ZWdiNmtYQi9uSEVuLy9CR211TGNYYlNyMVVYUmFLRmw1cTJjMXFnblpwS1BzNCtHWmRxU29BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxUGp5TlRxNnNpcU85Z3JGWEVkcjdPL3g3T3pOUzRDQUFwOWVvSWMzNlF6SlhqSGQ3UWZkWWNSbzZkcGtBbVRCY0lTaDViQ1lJV2puZzhsKytFVlhCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDY0ODE4MjQ0OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2NjkxNzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKZU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUplTy5qc29uIjogIntcImtleURhdGFcIjpcIi8zaHhyQW5zNTF6UnliVnZPb3N0NW1OTzdWa1c5MEZNTHd4SVhrV3BMNDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkyNjU1NDU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU2NjkxNzc2NzRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
