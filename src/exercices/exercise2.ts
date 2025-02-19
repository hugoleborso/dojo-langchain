/*
 Use the langchain function createReactAgent to create a bot that can answer questions.
 
 For this exercise, the bot has to recall the previous conversation messages.

 You can help yourself with the following code and comments, but I advise to start from your exercise1.ts file
*/

import { Message } from "../types";
// import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";

const systemMessage = ``; // fill me ?

const llm = new ChatOpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: "gpt-4o",
});

export async function getBotAnswer(
  _previousMessages: Message[],
  newUserMessage: Message
): Promise<string> {
  console.log({ newUserMessage, systemMessage, llm });

  // const appWithSystemMessage = createReactAgent({
  //   llm: undefined,
  //   tools: undefined
  // });

  // const agentOutput = await appWithSystemMessage.invoke({
  //   // fill me ?
  // });

  // const result = agentOutput.messages[agentOutput.messages.length - 1]
  //   .content as string;

  return "This is not working yet";
}
