const messages = [
  {
    role: "ai" as const,
    content: "Good morning! I'm KompasSehat AI. How can I help you with your health concerns today?",
    time: "9:01 AM",
  },
  {
    role: "user" as const,
    content: "I've been feeling dizzy and nauseous since yesterday morning.",
    time: "9:02 AM",
  },
  {
    role: "ai" as const,
    content:
      "I understand. Dizziness with nausea can have several causes. Let me ask a few questions to help guide you:",
    time: "9:02 AM",
  },
  {
    role: "ai" as const,
    content:
      "• Have you experienced any fever?\n• Are you currently taking any medications?\n• Do you have a history of low blood pressure?",
    time: "9:02 AM",
    isList: true,
  },
  {
    role: "user" as const,
    content: "No fever. I take blood pressure medication daily.",
    time: "9:03 AM",
  },
  {
    role: "ai" as const,
    content:
      "Thank you. Given your symptoms and medication, I recommend scheduling a visit with your primary care physician within 24–48 hours. I've found 3 nearby clinics with availability today.",
    time: "9:03 AM",
    highlight: true,
  },
];

export default function AIChatPreview() {
  return (
    <section id="ai-chat" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
              AI Chat
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Conversational healthcare guidance
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Chat naturally with our AI assistant. No forms, no waiting rooms —
              just intelligent, empathetic guidance available 24/7.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Natural language understanding",
                "Context-aware follow-up questions",
                "Multi-language support",
                "Instant facility matching",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50">
                    <svg className="h-3 w-3 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-purple-600/5 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-accent">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">KompasSehat AI</div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Online
                    </div>
                  </div>
                </div>
                <button className="rounded-lg px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:bg-white hover:text-slate-700">
                  New chat
                </button>
              </div>

              <div className="max-h-[420px] space-y-4 overflow-y-auto p-6">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[85%] ${msg.role === "user" ? "order-1" : ""}`}>
                      {msg.role === "ai" && (
                        <div className="mb-1.5 flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full gradient-accent text-[10px] font-bold text-white">
                            AI
                          </div>
                          <span className="text-xs text-slate-400">{msg.time}</span>
                        </div>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "rounded-tr-sm bg-[#2563EB] text-white"
                            : msg.highlight
                              ? "rounded-tl-sm border border-blue-100 bg-blue-50/80 text-slate-700"
                              : "rounded-tl-sm bg-slate-50 text-slate-700"
                        }`}
                      >
                        {msg.isList ? (
                          <pre className="whitespace-pre-wrap font-sans">{msg.content}</pre>
                        ) : (
                          msg.content
                        )}
                      </div>
                      {msg.role === "user" && (
                        <div className="mt-1 text-right text-xs text-slate-400">{msg.time}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 p-4">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 transition-colors focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100">
                  <input
                    type="text"
                    placeholder="Type your health concern..."
                    className="flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    readOnly
                  />
                  <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg gradient-accent transition-all duration-300 hover:brightness-110">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
