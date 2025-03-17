require("dotenv").config();
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

async function main(){
    const msg = client.messages.stream({
        model: "claude-3-7-sonnet-20250219",
        max_tokens: 1000,
        temperature: 1,
        messages: [{
          role: 'user',
          content: 'what is 2+2'
        }]
      }).on('text', (text) => {
        console.log(text);
      });
}

main();