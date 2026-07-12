# 📚 Smart Study Planner

> Because a study plan that can't adapt to real life isn't a plan — it's a guess.

An AI-assisted study planner that helps students build and adjust exam prep schedules in real time. Add your subjects, get a personalized day-by-day plan, and when life gets in the way and you miss a target, the schedule automatically re-plans itself instead of falling apart.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Claude API](https://img.shields.io/badge/Claude_API-D97757?style=flat&logo=anthropic&logoColor=white)
![Status](https://img.shields.io/badge/status-in%20progress-yellow)

---

## 🎬 Demo

*(Add a screenshot or GIF of the dashboard / re-planning flow here)*

```
[ Dashboard screenshot / demo GIF placeholder ]
```

---

## ✨ Features

- [x] Add subjects with exam dates and difficulty level
- [x] Generate a personalized day-by-day study schedule using AI
- [x] Daily check-in — mark whether today's target was completed
- [ ] Auto re-planning of remaining days when a target is missed
- [ ] Simple dashboard to track progress and upcoming deadlines

---

## 🧠 How It Works

1. **Input** — You add subjects along with exam dates and a self-rated difficulty level.
2. **Schedule generation** — This data is sent to the Claude API, which generates a day-by-day breakdown weighted by difficulty and days remaining.
3. **Daily check-in** — Each day you mark whether the target was completed.
4. **Adaptive re-planning** — If a target is missed, the app re-sends your updated progress (days left, completed vs. missed targets, difficulty) to Claude, which regenerates a realistic plan for the remaining days — so the schedule stays achievable instead of just falling further behind.

---

## 🛠️ Tech Stack

- **React (Vite)** — frontend framework & build tool
- **Tailwind CSS** — styling
- **JavaScript** — core logic
- **Claude API** — schedule generation & adaptive re-planning logic

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A Claude API key ([get one here](https://console.anthropic.com))

### Installation

```bash
git clone https://github.com/your-username/smart-study-planner.git
cd smart-study-planner
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_CLAUDE_API_KEY=your_api_key_here
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/     # UI components (SubjectCard, ScheduleView, CheckInToggle, etc.)
├── hooks/          # Custom React hooks
├── api/            # Claude API integration & re-planning logic
├── utils/          # Helper functions
└── App.jsx
```

---

## 🎯 Why This Project

As a BSCS student juggling multiple subjects and exam dates, I wanted a planner that doesn't just create a static schedule but actually adapts when real life gets in the way — which is where AI collaboration comes in.

---

## 🚧 Status

In progress — capstone project for the **FlyRank AI Internship (Frontend AI Engineering track)**.

---

## 👤 Author

**Your Name**
🔗 [Portfolio](#) · [LinkedIn](#) · [GitHub](#)

---

## 📄 License

MIT
