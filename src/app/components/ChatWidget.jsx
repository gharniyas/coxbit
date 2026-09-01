"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BsChatDotsFill, BsX, BsSend } from "react-icons/bs";

const topics = [
  {
    label: "About COXBIT",
    keywords: ["about", "mission", "vision", "who are you"],
    reply:
      "COXBIT is the Centre of Excellence in Biotechnology at Tamil Nadu Agricultural University, Coimbatore, building world-class biotech research infrastructure.",
    href: "/about",
    linkLabel: "About COXBIT",
  },
  {
    label: "Facilities",
    keywords: ["facility", "facilities", "lab", "laboratory", "sals", "cabin", "cold room", "tissue culture", "bioinformatics"],
    reply:
      "COXBIT offers shared lab facilities (SALS), cabin/floor space for startups, and services like proteomics, tissue culture, cold room storage and a bioinformatics server.",
    href: "/facilities",
    linkLabel: "View Facilities",
  },
  {
    label: "Projects",
    keywords: ["project", "projects", "dbt", "phenomics", "seed vault", "tnapex", "birac"],
    reply:
      "COXBIT runs government and institution funded projects like the DBT Phenomics Platform, Native Species Seed Vault, TNAPEx MSME Programme and BIRAC E-YUVA.",
    href: "/projects",
    linkLabel: "View Projects",
  },
  {
    label: "Startups",
    keywords: ["startup", "startups", "entrepreneur", "incubation", "partner"],
    reply:
      "COXBIT supports biotech startups and entrepreneurs through partnerships, cabin/knowledge space and technology-readiness opportunities.",
    href: "/startup-ecosystem/partners",
    linkLabel: "Startup Ecosystem",
  },
  {
    label: "Events & Training",
    keywords: ["event", "events", "training", "workshop", "register"],
    reply:
      "COXBIT regularly hosts hands-on trainings, workshops and events for researchers, students and industry.",
    href: "/events-news",
    linkLabel: "Events & Training",
  },
  {
    label: "Contact Us",
    keywords: ["contact", "phone", "email", "address", "location", "reach"],
    reply:
      "You can reach COXBIT at coebiotech@tnau.ac.in or +91 94870 01028. We're located at Tamil Nadu Agricultural University, Coimbatore - 641 003.",
    href: "/contact",
    linkLabel: "Contact Us",
  },
];

const fallbackReply = {
  reply:
    "I don't have an answer for that yet. Please reach out to us at coebiotech@tnau.ac.in or +91 94870 01028, or visit our Contact page for more details.",
  href: "/contact",
  linkLabel: "Contact Us",
};

function findReply(text) {
  const lower = text.toLowerCase();
  const match = topics.find((topic) =>
    topic.keywords.some((keyword) => lower.includes(keyword))
  );
  return match || fallbackReply;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm the COXBIT Assistant. Ask me about our facilities, projects, startups, events, or how to reach us.",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const respond = (userText, matched) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userText },
      {
        from: "bot",
        text: matched.reply,
        href: matched.href,
        linkLabel: matched.linkLabel,
      },
    ]);
  };

  const handleTopicClick = (topic) => {
    respond(topic.label, topic);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    respond(trimmed, findReply(trimmed));
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-80 sm:w-96 max-h-[32rem] flex flex-col bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-[#6b4226] text-white px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-serif font-bold leading-tight">COXBIT Assistant</p>
              <p className="text-amber-100 text-xs">Ask about COXBIT</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/80 hover:text-white transition-colors"
            >
              <BsX size={24} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-[#c89b3c] text-[#6b4226] font-medium"
                      : "bg-white border border-gray-200 text-gray-700"
                  }`}
                >
                  <p>{msg.text}</p>
                  {msg.href && (
                    <Link
                      href={msg.href}
                      className="mt-1 inline-block text-xs font-semibold text-[#6b4226] hover:text-[#8a6a1f] underline"
                    >
                      {msg.linkLabel} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-1">
              {topics.map((topic) => (
                <button
                  key={topic.label}
                  onClick={() => handleTopicClick(topic)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#c89b3c]/50 text-[#6b4226] bg-white hover:bg-[#c89b3c]/10 transition-colors"
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSend}
            className="border-t border-gray-200 bg-white p-2 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 text-sm px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-[#c89b3c]"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="w-9 h-9 shrink-0 rounded-full bg-[#6b4226] text-white flex items-center justify-center hover:bg-[#8a6a1f] transition-colors"
            >
              <BsSend size={14} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="w-14 h-14 rounded-full bg-[#6b4226] text-white shadow-lg flex items-center justify-center hover:bg-[#8a6a1f] transition-colors duration-200"
      >
        {open ? <BsX size={28} /> : <BsChatDotsFill size={22} />}
      </button>
    </div>
  );
}
