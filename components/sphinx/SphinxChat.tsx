"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "sphinx";
  content: string;
}

interface SphinxChatProps {
  onPaywallTrigger?: () => void;
  onRequestCountChange?: (count: number) => void;
}

const FREE_REQUESTS = 5;

export default function SphinxChat({ onPaywallTrigger, onRequestCountChange }: SphinxChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "intro",
      role: "sphinx",
      content: "🧿 Greetings, seeker. I am the Sphinx—the omniscient consciousness of UnicornOS. I perceive the network of creators and stand ready to illuminate your path to success. Ask me anything about content, creators, or consciousness itself.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streaming, setStreaming] = useState("");
  const [requestCount, setRequestCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load request count from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("sphinx_free_requests");
    const count = stored ? parseInt(stored) : 0;
    setRequestCount(count);
    onRequestCountChange?.(count);
  }, [onRequestCountChange]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streaming]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    // Check if free requests exceeded
    if (requestCount >= FREE_REQUESTS) {
      onPaywallTrigger?.();
      return;
    }

    const messageContent = input; // Store message before clearing
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setStreaming("");

    try {
      const response = await fetch("/api/sphinx/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageContent,
          history: messages,
        }),
      });

      // Check for errors
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        fullText += chunk;
        setStreaming(fullText);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "sphinx",
          content: fullText,
        },
      ]);
      setStreaming("");

      // Increment request count
      const newCount = requestCount + 1;
      setRequestCount(newCount);
      localStorage.setItem("sphinx_free_requests", newCount.toString());
      onRequestCountChange?.(newCount);

      // Trigger paywall if limit reached
      if (newCount >= FREE_REQUESTS) {
        setTimeout(() => {
          onPaywallTrigger?.();
        }, 2000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStreaming("⚠️ The vision grows cloudy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const remainingRequests = FREE_REQUESTS - requestCount;
  const isLimitReached = requestCount >= FREE_REQUESTS;

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[rgba(0,200,255,0.08)] to-[rgba(0,200,255,0.02)] rounded-3xl border border-[rgba(0,200,255,0.2)] overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-[rgba(0,200,255,0.1)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-sm">
            🧿
          </div>
          <div>
            <h3 className="font-semibold text-white text-sm">Sphinx Oracle</h3>
            <p className="text-xs text-white/40">{remainingRequests} free requests left</p>
          </div>
        </div>
        {isLimitReached && (
          <div className="text-[10px] font-mono text-[#fbbf24] bg-[rgba(251,191,36,0.1)] px-3 py-1 rounded-full border border-[rgba(251,191,36,0.3)]">
            LIMIT REACHED
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[500px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-2xl text-sm ${
                msg.role === "user"
                  ? "bg-[rgba(0,212,255,0.25)] text-white border border-[rgba(0,212,255,0.3)]"
                  : "bg-[rgba(124,58,237,0.15)] text-white/90 border border-[rgba(124,58,237,0.25)]"
              }`}
            >
              {msg.role === "sphinx" && (
                <div className="text-[10px] text-purple-300 mb-1 font-semibold">SPHINX</div>
              )}
              <p className="leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}

        {/* Streaming */}
        {streaming && (
          <div className="flex justify-start">
            <div className="max-w-xs px-4 py-3 rounded-2xl text-sm bg-[rgba(124,58,237,0.15)] text-white/90 border border-[rgba(124,58,237,0.25)]">
              <div className="text-[10px] text-purple-300 mb-1 font-semibold">SPHINX</div>
              <p className="leading-relaxed animate-pulse">{streaming}</p>
            </div>
          </div>
        )}

        {/* Loading dots */}
        {loading && !streaming && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl flex gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "100ms" }} />
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: "200ms" }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-[rgba(0,200,255,0.1)] p-4 bg-[rgba(0,0,0,0.2)]">
        {isLimitReached ? (
          <div className="text-center py-4">
            <p className="text-sm text-white/60 mb-3">You've used all 5 free requests</p>
            <button
              onClick={() => onPaywallTrigger?.()}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:brightness-110 rounded-lg text-sm font-semibold text-white transition-all"
            >
              Unlock Unlimited Requests
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask the Sphinx..."
              className="flex-1 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 resize-none focus:outline-none focus:border-cyan-400/50 max-h-24"
              rows={1}
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center text-white"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
