const openai = require("./openai.js");
const config = require("../config/config.js");

/* Returns a response from OpenAI's GPT API
 * https://platform.openai.com/docs/api-reference/chat/create?lang=node.js */
module.exports = async (message) => {
  try {
    console.log(message)
    const response = await fetch("https://clifton-chatbot-production.up.railway.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          {
            role: "assistant",
            content: "Hello, How can I help you?"
          },
          {
            role: "user",
            content: message
          }
        ],
        userName: "not specified"
      })
    });
    const result = await response.json();
    // const response = await fetch("https://flowiseai-railway-production-6341.up.railway.app/api/v1/prediction/ec83b091-4bbe-48ad-b164-2786876df57f", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({"question": message})
    // });
    // const result = await response.json();
    // console.log(result)
    return result.translatedText;
  } catch (e) {
    console.log(e);
  }
};
