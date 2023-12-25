"use cilent"
const { Configuration, OpenAIApi } = require("openai-edge");
const { OpenAIStream, StreamingTextResponse } = require("ai");
const OpenAI = require("openai");

export const runtime = 'edge';

const config = new Configuration({
  apiKey: "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",
})


const openai = new OpenAIApi(config);

 export async function POST(request) {
  const { messages } = await request.json();

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages:[{ role:"system"  ,  content :"only show section number and section name an section descrption in three dotted bullet points from indian penal code in new line"}, ...messages]
  })

  const stream = await OpenAIStream(response);

  return new StreamingTextResponse(stream);
}


module.exports = { POST };
