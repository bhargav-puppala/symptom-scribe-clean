# 🩺 Symptom Scribe — Smart Health & MedTech Platform

Symptom Scribe is an AI-powered health and wellness platform designed to help users track health metrics, analyze symptoms, receive personalized recommendations, and improve overall well-being through intelligent insights and interactive experiences.

🌐 **Live Demo:** https://symptom-scribe-clean.netlify.app/

---

# 📑 Table of Contents

* Project Overview
* Objectives
* Key Features
* Technology Stack
* Screenshots
* Installation & Setup
* Environment Variables
* Supabase Edge Function Setup
* API & Backend Services
* Project Structure
* Usage Guide
* Troubleshooting
* FAQ
* Contributing
* Future Enhancements
* License
* Author

---

# 📖 Project Overview

Symptom Scribe provides a centralized health management experience that combines:

* Health tracking
* Symptom analysis
* AI-powered recommendations
* Brain-training activities
* Medical education
* Doctor consultation guidance

The goal is to make healthcare monitoring more accessible, engaging, and personalized.

---

# 🎯 Objectives

* Help users monitor daily health metrics.
* Enable symptom tracking and analysis.
* Provide educational health insights.
* Encourage healthier lifestyles through gamification.
* Support informed healthcare decisions.

---

# 🌟 Key Features

## 🧠 Health & Wellness Tracking

* Track hydration, nutrition, activity levels, and wellness goals.
* View health progress over time.
* Personalized wellness recommendations.

## 🩻 Symptom Analysis

* Log and manage symptoms.
* AI-assisted symptom evaluation.
* Health recommendations based on reported symptoms.

## 🎮 Brain Games

* Interactive games designed to improve:

  * Memory
  * Focus
  * Cognitive performance

## 💡 Health Facts

* Educational health facts and medical trivia.
* Daily learning opportunities.

## 👨‍⚕️ Doctor Consultation Suggestions

* Intelligent recommendations for professional medical consultation.
* Supports early decision-making for health concerns.

## 📊 Health History & Metrics

* Store historical health records.
* Visualize health trends and patterns.

---

# ⚙️ Technology Stack

| Category        | Technologies              |
| --------------- | ------------------------- |
| Frontend        | React + Vite + TypeScript |
| Styling         | Tailwind CSS + ShadCN UI  |
| Backend         | Supabase                  |
| Authentication  | Supabase Auth             |
| Database        | PostgreSQL (Supabase)     |
| Edge Functions  | Supabase Functions        |
| Deployment      | Netlify                   |
| Version Control | Git & GitHub              |

---

# 📸 Screenshots

> Add screenshots of the following sections:

* Dashboard
* Symptom Analyzer
* Health Metrics
* Brain Games
* Settings Page
* Mobile Responsive View

Example:

```md
![Dashboard](screenshots/dashboard.png)
![Symptom Analyzer](screenshots/analyzer.png)
```

---

# 🚀 Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/mohdmaazgani/symptom-scribe-clean.git
```

## 2. Navigate to Project

```bash
cd symptom-scribe-clean
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Configure Environment Variables

```bash
cp .env.example .env.local
```

Add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 5. Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:8080
```

---

# 🔐 Environment Variables

## Frontend Variables

| Variable                      | Description                |
| ----------------------------- | -------------------------- |
| VITE_SUPABASE_URL             | Supabase Project URL       |
| VITE_SUPABASE_PUBLISHABLE_KEY | Browser authentication key |
| VITE_SUPABASE_ANON_KEY        | Legacy fallback key        |

### Important

Only variables prefixed with `VITE_` are exposed to the frontend.

---

# ☁️ Supabase Edge Function Setup

## Required Secrets

| Secret                    | Purpose                |
| ------------------------- | ---------------------- |
| LOVABLE_API_KEY           | AI gateway access      |
| SUPABASE_URL              | Supabase project URL   |
| SUPABASE_ANON_KEY         | Caller validation      |
| SUPABASE_SERVICE_ROLE_KEY | Admin operations       |
| UPSTASH_REDIS_REST_URL    | Optional rate limiting |
| UPSTASH_REDIS_REST_TOKEN  | Optional rate limiting |

## Configure Secrets

```bash
supabase login

supabase link --project-ref <project-ref>

supabase secrets set LOVABLE_API_KEY=<key>

supabase secrets set SUPABASE_URL=<url>

supabase secrets set SUPABASE_ANON_KEY=<anon-key>

supabase secrets set SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
```

Optional:

```bash
supabase secrets set UPSTASH_REDIS_REST_URL=<url>

supabase secrets set UPSTASH_REDIS_REST_TOKEN=<token>
```

## Local Edge Functions

```bash
supabase functions serve --env-file supabase/.env.local
```

---

# 🔌 API & Backend Services

## Authentication

Handled through:

* Supabase Auth
* JWT Session Management

## Database

Managed via:

* PostgreSQL
* Supabase Migrations

## Edge Functions

Current Functions:

* `symptom-analyzer`
* `delete-user-account`

---

# 🧩 Project Structure

```text
symptom-scribe-clean/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── integrations/
│   ├── utils/
│   └── main.tsx
├── supabase/
│   ├── functions/
│   └── migrations/
├── package.json
├── vite.config.ts
└── README.md
```

---

# 📘 Usage Guide

### 1. Create Account

Register using email authentication.

### 2. Track Metrics

Add health records and wellness metrics.

### 3. Analyze Symptoms

Use AI-assisted symptom analysis.

### 4. Explore Health Facts

Learn through interactive educational content.

### 5. Improve Cognitive Skills

Play brain-training games.

---

# 🛠️ Troubleshooting

For detailed troubleshooting instructions, see:

```text
TROUBLESHOOTING.md
```

Common issues include:

* Missing environment variables
* Supabase authentication failures
* Dependency installation errors
* Port conflicts
* Build failures

---

# ❓ FAQ

### Why are my environment variables undefined?

Ensure all client-side variables begin with:

```env
VITE_
```

### Why can't I log in?

Verify:

* Supabase credentials
* User account status
* Environment variables

### Why does the app fail to build?

Check:

* Dependency installation
* TypeScript errors
* Environment configuration

---

# 🤝 Contributing

Contributions are welcome!

## Contribution Steps

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

## Pull Request Requirements

### Related Issue

```text
Closes #<issue-number>
```

### Checklist

* [ ] Tested locally
* [ ] No unrelated files changed
* [ ] Code style followed
* [ ] Issue linked
* [ ] No console errors
* [ ] Issue assigned before work began

---

# 🚀 Future Enhancements

* Wearable device integration
* AI-powered conversational diagnosis
* Medication reminders
* Advanced analytics dashboards
* Doctor-patient collaboration portal
* Personalized health forecasting

---

# 📄 License

This project is licensed under the MIT License.

You are free to:

* Use
* Modify
* Distribute

the software under the terms of the MIT License.

---

# 👨‍💻 Author

Developed by **@mohdmaazgani**

✨ Passionate about building intelligent, user-centric healthcare solutions.
