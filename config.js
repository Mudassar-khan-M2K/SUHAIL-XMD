const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071639265";




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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_32_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDY4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTkwLFxuICAgICAgICAzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgODcsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICA2NixcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieU81V0VLTHg3QzBpcm1iTnYyd1RoZFNwQ1ZwZUhwaGZudVhqaEFuNEVEWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibXh2RDFGRzdRcWFmWkI3c0FTZUZCUVwiLFxuICBcInBob25lSWRcIjogXCI5OWQxNTQ3Ny01MTA4LTQyZTItOTczYS03MDM1NmE3ODEyMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgNDEsXG4gICAgICAyMjIsXG4gICAgICAyMzEsXG4gICAgICAyMzgsXG4gICAgICAzNCxcbiAgICAgIDE2OCxcbiAgICAgIDEzNSxcbiAgICAgIDEwMixcbiAgICAgIDIzNyxcbiAgICAgIDIwOSxcbiAgICAgIDMzLFxuICAgICAgMjQ5LFxuICAgICAgMjIsXG4gICAgICAxODQsXG4gICAgICAxMjUsXG4gICAgICA0OSxcbiAgICAgIDE3MSxcbiAgICAgIDE2MixcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAyMTIsXG4gICAgICAyNTIsXG4gICAgICAxMzIsXG4gICAgICAxMjIsXG4gICAgICAxMzYsXG4gICAgICAzNixcbiAgICAgIDI5LFxuICAgICAgNDAsXG4gICAgICAxNjQsXG4gICAgICAxNzEsXG4gICAgICAwLFxuICAgICAgMTAxLFxuICAgICAgMTQzLFxuICAgICAgNzgsXG4gICAgICAzNCxcbiAgICAgIDIzMCxcbiAgICAgIDE2LFxuICAgICAgMjQwLFxuICAgICAgMTExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4zSkJTNkNKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzE2MzkyNjU6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY0MDI1NDk2OTQ4Nzg1OjUxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lhdjk5TUhFT0wxdzdzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU2Q5NkZkZllTY3lBRG1ENHE1RXo1Vk9lVEllaURsbmhHSWl1NlQ0VVBTcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvSStYMVdBMS9MZm9BNDRqaVlSeXZGNGFwTks5V2VIMzV6SzB0TE16TDIvTTJjWVhDcDViamtUVmxiTjB2NUJ5WHZaWjlEeGNUNVYzb2V3ZW0xT3FCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOZWE3NHgyOTVwZGZUZC9BeG9BYXYvTFg2WVZYRWhBOE9MTWlOMnhWdkF6Qlh2cG9NSDIyNlA2Q2xSZUcyV2llU3dPa1lMbzM2V1RGRFdjVmtodHZqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE2MzkyNjU6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0NTc1MThcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // SUHAIL_06_34_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgMTA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICA5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2LFxuICAgICAgICAyLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICA4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDY2LFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjUwalRZak5rZzRoUUFLZUg2ZDgvN25paWxBNzJTY2hUY1VaeHNoZERoQUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVaeDFBd3hPVGlLMlZFeXdZcmx0YXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDM1YTIzOGItYWQyYy00OTMzLWEwNTgtZTFhZjUwZWM1YWE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDEyMSxcbiAgICAgIDI1LFxuICAgICAgMTIwLFxuICAgICAgMjMxLFxuICAgICAgMjQwLFxuICAgICAgMTI3LFxuICAgICAgMTY3LFxuICAgICAgNDUsXG4gICAgICAxNjIsXG4gICAgICAzNSxcbiAgICAgIDE0OSxcbiAgICAgIDI1NCxcbiAgICAgIDE5NSxcbiAgICAgIDI1LFxuICAgICAgMzAsXG4gICAgICAxNTMsXG4gICAgICAyNDksXG4gICAgICA5MCxcbiAgICAgIDc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDI0MyxcbiAgICAgIDE5MixcbiAgICAgIDIzMixcbiAgICAgIDQ2LFxuICAgICAgMzgsXG4gICAgICAxOTksXG4gICAgICAxNTIsXG4gICAgICAxNjIsXG4gICAgICA0NixcbiAgICAgIDE4OCxcbiAgICAgIDY1LFxuICAgICAgMTYwLFxuICAgICAgMjQ3LFxuICAgICAgMTMsXG4gICAgICAxMzMsXG4gICAgICAxMjQsXG4gICAgICA0NyxcbiAgICAgIDc5LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUVTREtQNFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA3MTYzOTI2NTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjQwMjU0OTY5NDg3ODU6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHl1OTlNSEVQclcyN2tHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTZDk2RmRmWVNjeUFEbUQ0cTVFejVWT2VUSWVpRGxuaEdJaXU2VDRVUFNzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9IODY0bzk4M2hhTHZGWjJ5SkQzbWdkWHNQYmVXMVFCdE9JTHp0eUNrdnlINzNMa0hXdys2UkdrWVE3SVFrUlpPWHlJWVl5aS9PTDNadjQ5UyszeUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpmM3kwQ1NxYzEzNFFYeCtEUk9YaEhhd2tQNm5VTytiUEd2Q3pVVTV1aHR0N0huL0hnYmZacTdEVXVISUprOXVjTlA3YTlkVkxaVjBkYlF5MmQwTGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA3MTYzOTI2NTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTY1MjQ3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZZdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRll1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVWY0Z3NZd21rb0xjUmtCK1NjM0VMdHFaUi9NbjhVRnN6eE9kckorSWJHWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDU1MDY3NTE2LFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMTczMTU4MzM3NTQ0MlwifSIKfQ==


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
