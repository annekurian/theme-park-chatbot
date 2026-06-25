# 🎢 AI-Powered Customer Support

A full-stack TypeScript monorepo built with **Bun** that combines two AI capabilities:

1. **Wonderworld Chatbot** — a knowledge-grounded customer support agent for the fictional theme park _Wonderworld_, engineered to answer only from a curated knowledge base and refuse out-of-scope queries

> Built as a prototype project based on the _"Build AI-powered Apps"_ course by Mosh Hamedani.

---

## ✨ Features

### 🤖 Wonderworld Theme Park Chatbot

- **Knowledge-grounded responses** — the LLM is strictly instructed to answer only from `Wonderworld.md`, a custom knowledge base covering rides, hours, tickets, FAQs, and park policies
- **Prompt-engineered refusals** — out-of-scope questions (anything not in the knowledge base) are gracefully declined rather than hallucinated
- **Persona consistency** — the agent maintains a Wonderworld-specific voice throughout the conversation

---

## 🏗️ Architecture

```
ChatBot/
├── index.ts                        # Entry point — runs client & server concurrently
├── package.json                    # Root workspace config (Bun monorepo)
├── packages/
│   ├── client/                     # Frontend (TypeScript + CSS + HTML)
│   │   └── src/
|   |      |___components/
│   │             ├── chat/         # Chat UI — sends messages, renders responses
│   └── server/                     # Backend API (TypeScript + Bun)
│       ├── controllers/            # Gateway - handle HTTP requests and responses
│       ├── services/               # Calls OpenAI model to generate response
│       ├── repositories/           # Fetches or stores data
│       ├── prompts/
│       │   └── Wonderworld.md      # 📄 Theme park knowledge base (rides, hours, FAQs)
|       └── routes.ts               # API Endpoints
├── .husky/                         # Pre-commit hooks
└── .prettierrc                     # Code formatting config
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.com) v1.3.6 or later
- An OpenAI (or compatible) API key

### Installation

```bash
git clone https://github.com/annekurian/theme-park-chatbot.git
cd theme-park-chatbot
bun install
```

### Environment Variables

Create a `.env` file in `packages/server/` with variables mentioned in `.env.example`

### Running

```bash
bun run dev
```

This starts both the client and server concurrently via `concurrently`.

| Service | URL                   |
| ------- | --------------------- |
| Client  | http://localhost:5173 |
| Server  | http://localhost:3000 |

---

## 🛠️ Tech Stack

| Layer       | Technology                   |
| ----------- | ---------------------------- |
| Runtime     | [Bun](https://bun.com)       |
| Language    | TypeScript                   |
| Frontend    | React + Tailwind CSS         |
| Backend     | Express.js                   |
| HTTP Client | Axios                        |
| AI          | OpenAI API (GPT)             |
| Dev tooling | Husky, lint-staged, Prettier |

---

## 🗺️ User Flow

### Chatbot

```
[User opens app]
      ↓
[Types a question] → [Client sends to /api/chat]
      ↓
[Server builds prompt with system context + history]
      ↓
[LLM generates reply]
      ↓
[Response displayed in chat UI]
      ↓
[Repeat — history grows with each turn]
```

---

## 🧠 Prompt Engineering Approach

The chatbot is **not** a generic assistant — it is grounded to a specific knowledge base via prompt engineering.

The system prompt instructs the model to:

1. **Only answer from `Wonderworld.md`** — no external knowledge or hallucination
2. **Refuse gracefully** — if a question isn't covered in the knowledge base, the agent explicitly says so rather than making up an answer
3. **Maintain persona** — all replies stay in character as a Wonderworld customer support agent

`Wonderworld.md` contains structured information about the park: rides, opening hours, ticket pricing, accessibility policies, FAQs, and contact details. This is injected into the system prompt at runtime, making the knowledge base easy to update without touching application code.

This pattern — **injecting a document into a system prompt to ground an LLM's responses** — is the foundation of production RAG (Retrieval-Augmented Generation) systems.

---

## 🚧 Known Limitations (Prototype)

- No persistent storage — chat history lives in memory only
- No authentication or rate limiting on API endpoints
- No streaming responses — full LLM reply waits before rendering

---

## 🙏 Credits

Based on the _"Build AI-powered Apps"_ course by [Mosh Hamedani](https://codewithmosh.com).
