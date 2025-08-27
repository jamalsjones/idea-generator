# Product Specification – Idea Builder MVP

## 🌟 Overview

**Idea Builder** is a lightweight web tool that helps entrepreneurs, makers, and creatives capture short ideas and instantly expand them using AI into concrete business models, technical approaches, and target personas.

Inspired by IdeaBrowser.com, this MVP allows users to:
- Input a one-line idea
- Expand it into structured output via GPT-4
- View related ideas for exploration
- (Optionally) save and tag ideas using Supabase

---

## 🧠 Problem Statement

People often have fleeting ideas but lack a quick way to validate or expand on them. Tools like Notion or notes apps capture the input but offer no intelligence. AI can turn sparks into structured outputs — but there's no user-friendly productized interface for it.

---

## 💡 Solution

A simple AI-powered interface that turns 1-line ideas into:
- 3 Business Models
- 3 Technical Approaches
- 3 User Personas

Bonus: Related ideas based on semantics, to encourage lateral exploration.

---

## 🔑 Key Features

| Feature | Description |
|--------|-------------|
| Idea Input | Single input box for short-form ideas |
| GPT Expansion | Uses GPT-4 to generate 3x3x3 framework |
| Idea Cards | Clean visual layout for viewing expanded ideas |
| Related Ideas | Generate semantically similar ideas |
| Supabase Integration | Store, tag, and retrieve saved ideas (optional) |
| Deployment-Ready | Vercel + OpenAI + Supabase setup |

---

## 🔄 User Flow

1. **User lands on homepage**
2. Inputs idea into a prompt field (e.g., "AI-powered journaling coach")
3. Clicks **"Expand"**
4. Receives:
   - Business Models
   - Technical Approaches
   - Personas
5. (Optionally) explores **Related Ideas**
6. (Optional Phase 2) Tags idea and saves to Supabase

---

## ⚙️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React (Next.js) |
| Styling | Inline CSS / Tailwind (future) |
| Backend | Vercel Serverless Functions |
| LLM | OpenAI GPT-4 API |
| Database | Supabase (Postgres + Auth) |
| Deployment | Vercel |
| Optional | pgvector (semantic search) |

---

## 📈 Future Roadmap

| Phase | Features |
|-------|----------|
| Phase 2 | User accounts (Supabase Auth) |
|        | Save ideas to DB |
|        | Edit/iterate ideas |
| Phase 3 | Embedding generation + semantic linking |
|        | Visual graph UI (D3.js or React Flow) |
|        | Share/export features |

---

## 🎯 Success Criteria

- < 2 min time-to-value (first idea expanded)
- 100% GPT-4 powered idea expansions
- Deployable in 10 minutes via GitHub + Vercel
- Optional data persistence with Supabase