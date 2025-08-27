# 💡 Idea Builder MVP

An AI-powered tool that helps you capture, expand, and explore business ideas — inspired by [IdeaBrowser.com](https://ideabrowser.com).

Powered by **Next.js**, **Vercel**, **OpenAI GPT-4**, and optionally **Supabase** for idea storage.

---

## 🚀 Features

- ✍️ Input a one-liner idea
- 🤖 Expand into:
  - 3 Business Models
  - 3 Technical Approaches
  - 3 User Personas
- 🧠 Generate 5 Related Ideas
- 📦 Plug-and-play APIs (`/api/expand_idea`, `/api/connect_ideas`)
- ✅ Vercel-ready deployment
- 🗃️ Optional database layer using Supabase

---

## 🛠️ Tech Stack

| Layer        | Tech                |
|--------------|---------------------|
| Frontend     | Next.js (React)     |
| Backend APIs | Vercel Serverless   |
| LLM Engine   | OpenAI GPT-4        |
| Database     | Supabase (Postgres) |
| Hosting      | Vercel              |

---

## 📦 Folder Structure
├── pages/             # Main UI
├── components/        # IdeaCard component
├── api/               # Serverless API routes (OpenAI)
├── prompts/           # Prompt templates
├── utils/             # OpenAI utility
├── database/schema/   # Supabase SQL schema
├── public/            # Static assets
├── scripts/           # Dev setup scripts
├── docs/              # Product spec
└── .env.example       # Environment template
