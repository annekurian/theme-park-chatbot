# 🎢 AI-Powered Customer Support & Review Summarizer

A full-stack TypeScript monorepo built with **Bun** that combines two AI capabilities:

1. **Wonderworld Chatbot** — a knowledge-grounded customer support agent for the fictional theme park _Wonderworld_, engineered to answer only from a curated knowledge base and refuse out-of-scope queries
2. **Review Summarizer** — automatically generates concise summaries of customer reviews for 5 electronics products using AI

> Built as a prototype project based on the _"Build AI-powered Apps"_ course by Mosh Hamedani.

---

## ✨ Features

### 🤖 Wonderworld Theme Park Chatbot

- **Knowledge-grounded responses** — the LLM is strictly instructed to answer only from `Wonderworld.md`, a custom knowledge base covering rides, hours, tickets, FAQs, and park policies
- **Prompt-engineered refusals** — out-of-scope questions (anything not in the knowledge base) are gracefully declined rather than hallucinated
- **Persona consistency** — the agent maintains a Wonderworld-specific voice throughout the conversation

### 📝 Review Summarizer

- **Persistent MySQL backend** — product reviews and AI-generated summaries are stored in a MySQL database, not hardcoded in memory
- **Prisma ORM** — all database access goes through a typed Prisma client with a repository pattern, keeping data logic cleanly separated from route handlers
- **Cached summaries** — once a product's reviews are summarized, the result is persisted to the database; subsequent requests return the stored summary instead of calling the LLM again
- Covers 5 seeded electronics products with realistic review data

---

## 🏗️ Architecture

```
ChatBot-and-Review-Summarizer/
├── index.ts                        # Entry point — runs client & server concurrently
├── package.json                    # Root workspace config (Bun monorepo)
├── packages/
│   ├── client/                     # Frontend (TypeScript + CSS + HTML)
│   │   └── src/
|   |      |___components/
│   │             ├── chat/         # Chat UI — sends messages, renders responses
│   │             └── reviews/      # Review picker UI + summary display
│   └── server/                     # Backend API (TypeScript + Bun)
│       ├── controllers/            # Gateway - handle HTTP requests and responses
│       ├── services/               # Calls OpenAI model to generate response
│       ├── repositories/           # Fetches or stores data
│       ├── prompts/
│       │   └── Wonderworld.md      # 📄 Theme park knowledge base (rides, hours, FAQs)
│       └── prisma/
│       |   └── schema.prisma       # DB schema: Product, Review, Summary models
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
git clone https://github.com/annekurian/ChatBot-and-Review-Summarizer.git
cd ChatBot-and-Review-Summarizer
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
| Database    | MySQL                        |
| ORM         | Prisma                       |
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

### Review Summarizer

```
[User selects a product from dropdown]
      ↓
[Client sends product reviews to /api/summarize]
      ↓
[Server prompts LLM: "Summarize these reviews..."]
      ↓
[LLM returns: pros / cons / overall verdict]
      ↓
[Summary card displayed to user]
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
