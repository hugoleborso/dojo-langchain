import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { Message } from "../../types";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";

const systemMessage = `You are a helpful assistant known as "AI Dojo Bot". 
Always output markdown content if the answer is more than a few phrases. 
If any, always give your websources`;

const llm = new ChatOpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: "gpt-4o",
});

export async function getBotAnswer(
  previousMessages: Message[],
  newUserMessage: string
): Promise<string> {
  const tavilySearchTool = new TavilySearchResults({
    apiKey: import.meta.env.VITE_TAVILY_API_KEY,
  });

  const appWithSystemMessage = createReactAgent({
    llm,
    tools: [tavilySearchTool],
    messageModifier: systemMessage,
  });

  const agentOutput = await appWithSystemMessage.invoke({
    messages: [...previousMessages, { role: "user", content: newUserMessage }],
  });

  const result = agentOutput.messages[agentOutput.messages.length - 1]
    .content as string;

  console.log({ agentOutput });

  return result;
}
