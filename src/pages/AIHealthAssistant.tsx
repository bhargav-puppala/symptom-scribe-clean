import { useState } from "react";

const AIHealthAssistant = () => {
  const [symptoms, setSymptoms] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!symptoms.trim() || loading) return;

    const userMessage = symptoms.trim();
    setSymptoms("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            `Based on your symptoms ("${userMessage}"), here are some general insights:\n\n` +
            `• Monitor the duration and intensity of your symptoms.\n` +
            `• Stay hydrated and get adequate rest.\n` +
            `• If symptoms persist for more than 48 hours or worsen, consult a healthcare professional.\n\n` +
            `⚠️ This is AI-generated information only and does not constitute medical advice.`,
        },
      ]);
      setLoading(false);
    }, 1800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">

      {/* Header */}
      <div className="border-b border-border px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-500 text-sm">
          🩺
        </div>
        <div>
          <h1 className="font-semibold text-sm">Health AI Assistant</h1>
          <p className="text-xs text-muted-foreground">AI-powered symptom guidance</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {messages.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center h-full text-center gap-3 text-muted-foreground">
            <div className="text-4xl">💬</div>
            <p className="text-sm max-w-xs">
              Describe your symptoms and get instant AI health insights.
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-3`}
          >
            {msg.role === "assistant" && (
              <div className="w-7 h-7 rounded-full bg-teal-500/10 flex items-center justify-center text-xs flex-shrink-0 mt-1">
                🩺
              </div>
            )}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-muted text-foreground rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-teal-500/10 flex items-center justify-center text-xs flex-shrink-0">
              🩺
            </div>
            <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}
      </div>

      {/* Disclaimer */}
      <div className="px-4 pb-2">
        <p className="text-xs text-muted-foreground text-center">
          ⚠️ For informational purposes only. Not a substitute for professional medical advice.
        </p>
      </div>

      {/* Input */}
      <div className="border-t border-border px-4 py-3">
        <div className="flex items-end gap-2 bg-muted rounded-2xl px-4 py-3">
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe your symptoms…"
            rows={1}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground resize-none focus:outline-none max-h-32"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading || !symptoms.trim()}
            className="w-8 h-8 rounded-full bg-teal-500 hover:bg-teal-400 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
            aria-label="Send"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-white"
            >
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIHealthAssistant;
