import { Message } from "./types";

export async function getBotAnswer(
  _previousMessages: Message[],
  newUserMessage: string
): Promise<string> {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock response based on user input
  if (newUserMessage.toLowerCase().includes("hello")) {
    return "Hello! How can I assist you today?";
  }

  if (newUserMessage.toLowerCase().includes("help")) {
    return "I'm here to help! What would you like to know?";
  }

  // Default response
  return `This is a mock response to: "${newUserMessage}". You can implement your actual response logic here.`;
}
