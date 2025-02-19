# Dojo Langchain

This project contains a series of exercises to help you learn how to create AI agents using Langchain. Follow the instructions below to set up the project and try out the exercises.

## Prerequisites

- Node.js v20
- pnpm v10

## Installation

1. Use the correct node version with nvm:
   ```sh
   nvm use 20
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Duplicate the `.env.example` file and rename it to `.env`. Fill in the secrets found in Dashlane:
   ```sh
   cp .env.example .env
   ```

## Exercises

To iterate through the exercises, you can go to [App.tsx](src/App.tsx) and change the source of the function `getBotAnswer`. It is starting at `exercise0`. You can also see the implementation of each exercise's solution in the `src/exercises/solutions` folder.

```tsx

### Exercise 0: Checking the Install

Ensure that your environment is set up correctly by running the following command:
```sh
pnpm run dev
```
This should start the application and you should see a basic chat interface with mock bot responses

### Exercise 1: Creating an Agent that Can Answer Messages

In this exercise, you will create a simple agent that can respond to user messages. You can find the implementation in `src/exercices/exercise1.ts`.

### Exercise 2: Creating an Agent that Can Recall Conversations

This exercise builds on the previous one by adding the ability for the agent to recall past conversations. You can find the implementation in `src/exercices/exercise2.ts`.

### Exercise 3: Creating an Agent that Can Use Web Search

In this exercise, you will create an agent that can use web search to answer user questions. You can find the implementation in `src/exercices/exercise3.ts`.
