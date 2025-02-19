import React, { useState } from 'react';
import { SendHorizontal, Bot, User } from 'lucide-react';
import { getBotAnswer } from './mockBotLogic';
import { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
    };


    try {
      setIsLoading(true);
      const botResponse = await getBotAnswer(messages, input);
      setMessages(prev => [...prev, userMessage]);
      setInput('');
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        role: 'assistant',
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error while processing your request.',
        role: 'assistant',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {messages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full text-center">
            <Bot className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How can I help you today?</h1>
            <p className="text-gray-600 mb-8">Ask me anything! I'm here to assist you with your questions.</p>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-3xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-6 flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex gap-3 max-w-[80%] ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-900'
                  } rounded-lg p-4 shadow-sm`}
                >
                  {message.role === 'assistant' ? (
                    <Bot className="w-6 h-6 flex-shrink-0" />
                  ) : (
                    <User className="w-6 h-6 flex-shrink-0" />
                  )}
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mb-6 flex justify-start">
                <div className="bg-white text-gray-900 rounded-lg p-4 shadow-sm flex gap-3">
                  <Bot className="w-6 h-6" />
                  <div className="flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-100">.</span>
                    <span className="animate-bounce delay-200">.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="border-t bg-white p-4">
        <div className="max-w-3xl mx-auto flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <SendHorizontal className="w-5 h-5" />
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;