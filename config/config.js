const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, OPENAI_API_KEY, GPT_MODEL, MAX_TOKENS, REGION, APP_PORT } = require("dotenv")?.config();

console.log(TWILIO_ACCOUNT_SID)
module.exports = { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, OPENAI_API_KEY, GPT_MODEL, MAX_TOKENS, REGION, APP_PORT };
