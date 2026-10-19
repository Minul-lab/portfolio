# MD. MOHAIMINUL — Personal Developer Portfolio

> **Production-grade personal portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.**

Designed with an architectural, editorial aesthetic tailored to stand out for **software engineering internships**, **junior developer roles**, and **freelance client engagements**.

---

## 🌟 Overview & Highlights

- **Distinctive Visual Identity:** Clean slate/charcoal canvas (`#090d16`), hairline borders, subtle ambient lighting, and technical micro-interactions. Zero generic templates or flashy distracting animations.
- **Authentic Engineering Story:** Connects an academic background in **Electronics & Communication Engineering (HSTU)** with low-level logic (C/C++), modern frontend mastery (React, Next.js, Tailwind), and a progressive transition into full-stack MERN and practical AI integrations.
- **Showcase of Real Verified Projects:**
  1. **[Bazar-Dor](https://bazar-dor-2-avum.vercel.app/)** — Daily market price tracker for Bangladesh with live ticker, multi-bazaar comparison, BetterAuth (Google/GitHub), and MongoDB.
  2. **[FitLog](https://fit-log-by-minul.vercel.app/)** — Workout planner and routine companion calculating real-time training metrics, target muscle specs, and daily routine splits.
  3. **[DevStack](https://devstack-by-minul.netlify.app/)** — Interactive developer technology stack builder with technology catalog curation and React mental model explorations.
- **Centralized Data Architecture:** All projects, skills, narrative paragraphs, and contact links live in `src/data/portfolioData.ts` for instant customization.
- **Responsive & Accessible:** Fully tested on mobile, tablet, and desktop viewports with accessible controls and reduced-motion support.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Library** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React + Custom SVG Brand Icons |
| **Deployment** | Vercel / Netlify |

---

## 📁 Project Structure

```
├── public/
│   ├── images/
│   │   └── mohaiminul.jpg        # Professional portrait photograph
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind v4 styles & technical grid
│   │   ├── layout.tsx            # Metadata, OpenGraph, Viewport, Fonts
│   │   ├── not-found.tsx         # Custom 404 page
│   │   └── page.tsx              # Main portfolio page assembler
│   ├── components/
│   │   ├── Navbar.tsx            # Responsive navigation & resume trigger
│   │   ├── Hero.tsx              # Candidate hero, portrait frame & CTAs
│   │   ├── About.tsx             # Academic narrative & engineering pillars
│   │   ├── Projects.tsx          # Featured projects with filtering
│   │   ├── ProjectMockup.tsx     # High-fidelity visual preview mockups
│   │   ├── Skills.tsx            # Categorized skills & learning trajectory
│   │   ├── Contact.tsx           # Contact cards, copy-email & message form
│   │   ├── Footer.tsx            # Minimal footer with dynamic year
│   │   ├── Icons.tsx             # SVG brand icons (GitHub, LinkedIn)
│   │   └── ScrollToTop.tsx       # Smooth floating scroll-to-top button
│   └── data/
│       └── portfolioData.ts      # Strictly typed, centralized data source
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have **Node.js 18+** installed:

```bash
node -v
npm -v
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## ✏️ How to Customize

All personal details, project entries, and skills are decoupled into [`src/data/portfolioData.ts`](file:///src/data/portfolioData.ts):

- **Update Bio or Social Links:** Edit `PERSONAL_INFO` in `portfolioData.ts`.
- **Add / Modify Projects:** Add items to `PROJECTS_DATA` with title, problem, solution, features, and live links.
- **Update Skills:** Modify `SKILL_CATEGORIES` or `CURRENTLY_LEARNING`.
- **Change Portrait Photo:** Replace `/public/images/mohaiminul.jpg` with any preferred image.

---

## 🌐 Deployment to Vercel

1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete production-ready personal portfolio"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically be detected as **Next.js**.
5. Click **"Deploy"**.

---

## 📄 License

Created by **MD. MOHAIMINUL**. Available under the MIT License.
