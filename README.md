<div align="center">

# Md. Wali Ullah Khan
### Academic Researcher & Full-Stack Software Engineer

[![Live Demo](https://img.shields.io/badge/Live_Portfolio-Online-00e676?style=for-the-badge&logo=googlechrome&logoColor=white)](https://cringynoob.github.io/Portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-CringyNoob-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/CringyNoob)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Md_Wali_Ullah_Khan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/search/results/all/?keywords=Md%20Wali%20Ullah%20Khan)
[![Email](https://img.shields.io/badge/Email-wali.official71%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wali.official71@gmail.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](./LICENSE)

<br>

<p align="center">
  A high-performance, responsive academic and engineering portfolio website showcasing computational biology research, distributed microservices systems, published manuscripts, honors, and technical leadership.
</p>

[**Explore Live Website »**](https://cringynoob.github.io/Portfolio/) · [**View Resume (PDF) »**](./assets/docs/Md_Wali_Ullah_Khan_Resume.pdf) · [**Deployment Guide »**](./docs/DEPLOYMENT.md) · [**Manual Update Guide »**](./docs/MANUAL_UPDATE_GUIDE.md)

</div>

---

## 📑 Table of Contents

- [About The Portfolio](#-about-the-portfolio)
- [Key Features](#-key-features)
- [Portfolio Structure & Content Flow](#-portfolio-structure--content-flow)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Repository Structure](#-repository-structure)
- [Quick Start & Local Development](#-quick-start--local-development)
- [Deployment to GitHub Pages](#-deployment-to-github-pages)
- [Manual Update & Maintenance Guide](#-manual-update--maintenance-guide)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 About The Portfolio

This portfolio represents the academic and engineering profile of **Md. Wali Ullah Khan**, a final-year Computer Science and Engineering undergraduate student (Expected Graduation: **Oct 2026**) majoring in **Data Science** at **United International University (CGPA: 3.85 / 4.00)**.

### Primary Focus Areas:
- **Bioinformatics & Computational Biology**: Enhancer–Promoter Interaction (EPI) prediction, Protein Stability/Pathogenicity prediction with physics-constrained Graph Neural Networks (GNNs), and KAN–Transformer architectures.
- **Full-Stack & Distributed Systems**: Microservices architecture, REST APIs, PERN stack (PostgreSQL, Express, React, Node.js), Python & FastAPI, Socket.io real-time websockets, and Dockerized CI/CD pipelines.
- **Human-Centered AI & Safety**: Trust, privacy awareness, and self-disclosure in LLM companions, multimodal financial fraud detection.

---

## ✨ Key Features

- 🌓 **Sleek Dark & Light Mode**: Curated HSL color palette with smooth CSS transitions and persistent `localStorage` preference retention.
- 🎯 **Streamlined Content Sequence**: Optimized hierarchy designed for recruiters, researchers, and graduate school admissions (About Me → Experience → Education → Projects → Achievements → Publications → Skills → Leadership → Contact).
- ⚡ **Interactive Publication Filters**: Real-time filtering by publication status (*Under Review*, *In Preparation*) and domain (*Computational Biology / ML*, *AI & HCI Systems*).
- 📜 **1-Click BibTeX Citation Modal**: Formatted BibTeX citation viewer with direct asynchronous clipboard copy and toast notifications.
- 🚀 **Interactive Project Showcase**: Highlighting architecture breakdowns, award badges, full-stack technologies, and **direct capsule buttons for Live Demos & GitHub repositories**.
- 📍 **ScrollSpy & Smooth Scroll**: High-precision `IntersectionObserver` navigation dynamically highlighting the active section in the sticky sidebar.
- 🖨️ **Resume Shortcut (`Ctrl + P` / `Cmd + P`)**: Built-in keyboard interceptor allowing instant opening and printing of the verified PDF resume.
- 📱 **Fully Responsive Layout**: Built with a responsive CSS Grid and Flexbox system tailored for smartphones, tablets, laptops, and ultra-wide displays.

---

## 🗂️ Portfolio Structure & Content Flow

```
1. 👤 About Me               -> Background, research focus, core competencies & career objectives
2. 💼 Experience             -> Undergraduate Teaching Assistant & Grader (UIU) with impact metrics
3. 🎓 Education              -> B.Sc. in CSE (Major: Data Science), HSC, SSC with CGPA and scholarships
4. 💻 Projects               -> EduSync, Vitrine (Live Demo), Mr.Bin (Live Demo), DishChord
5. 🏆 Achievements & Awards  -> Academic Excellence Scholarship, AI Buildfest Finalist, Hackathon Honors
6. 📚 Publications           -> Briefings in Bioinformatics, MLCB 2026, Nature Methods, ACM CHI, IEEE
7. 🛠️ Technical Skills        -> Programming languages, web technologies, ML frameworks, embedded IoT
8. 👥 Leadership & Service   -> UIU Computer Club (Programming Olympiad Executive, Head of Esports)
9. 📬 Contact & Footer       -> Direct email, phone/WhatsApp copy, social links, resume print guide
```

---

## 🛠️ Tech Stack & Architecture

- **Markup & Semantics**: Semantic HTML5 with complete OpenGraph metadata and SEO optimization.
- **Styling & Design System**: Custom Vanilla CSS with HSL design tokens, Glassmorphism backdrop-filters, CSS variables, and fluid typography (`Outfit`, `Inter`, `JetBrains Mono`).
- **Logic & Interactivity**: Modern Vanilla JavaScript (ES6+) with zero bloated third-party dependencies.
- **Icons & Typography**: [Font Awesome 6](https://fontawesome.com/) and [Devicon](https://devicon.dev/) for authentic technology badges.
- **Hosting & Infrastructure**: [GitHub Pages](https://pages.github.com/) with global CDN and automated SSL/TLS encryption.

---

## 📁 Repository Structure

```
d:/Portfolio/
├── .gitignore                      # Git ignore rules for OS, editor, and build artifacts
├── LICENSE                         # MIT open-source license
├── README.md                       # Main documentation and project overview
├── index.html                      # Semantic single-page portfolio layout
├── assets/
│   ├── docs/
│   │   └── Md_Wali_Ullah_Khan_Resume.pdf  # Downloadable & viewable verified resume PDF
│   └── images/
│       ├── Profile.jpg             # High-resolution profile portrait photo
│       └── profile.png             # Fallback profile portrait asset
├── css/
│   └── styles.css                  # Core CSS design system, themes, and responsive layouts
├── docs/
│   ├── DEPLOYMENT.md               # Step-by-step deployment guide (GitHub Pages, Vercel, Netlify, Custom Domains)
│   └── MANUAL_UPDATE_GUIDE.md      # Comprehensive manual update and maintenance walkthrough
└── js/
    └── script.js                   # Interactivity, theme manager, ScrollSpy, filters, BibTeX & shortcuts
```

---

## 💻 Quick Start & Local Development

No package installation or compilation steps are required. You can preview the website locally using any static web server:

### Option 1: Python Built-in Server (Recommended)
```bash
# In the portfolio root directory
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your web browser.

### Option 2: Node.js / npx
```bash
npx serve .
```

### Option 3: VS Code Live Server
Right-click on [`index.html`](./index.html) and select **Open with Live Server**.

---

## 🚀 Deployment to GitHub Pages

Deploying your portfolio to GitHub Pages takes less than a minute:

1. **Commit and Push changes**:
   ```bash
   git add .
   git commit -m "feat: updated academic and engineering portfolio"
   git branch -M main
   git push origin main
   ```
2. **Enable GitHub Pages**:
   - Go to your repository on GitHub (`https://github.com/CringyNoob/Portfolio`).
   - Click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment**, select Source: `Deploy from a branch`, Branch: `main`, and Folder: `/ (root)`.
   - Click **Save**.
3. Your website will be live at:
   - **`https://cringynoob.github.io/Portfolio/`**

For advanced configuration (such as custom domains and DNS records), see [**DEPLOYMENT.md**](./docs/DEPLOYMENT.md).

---

## ⚙️ Manual Update & Maintenance Guide

For full step-by-step copy-paste templates on updating every section manually without AI (adding new papers, BibTeX citations, projects, live demo links, work experiences, or skills), see the dedicated [**MANUAL_UPDATE_GUIDE.md**](./docs/MANUAL_UPDATE_GUIDE.md).

Quick summary:
- **Updating Profile Photo**: Replace `Profile.jpg` in [`assets/images/`](./assets/images/).
- **Updating Resume PDF**: Replace `Md_Wali_Ullah_Khan_Resume.pdf` in [`assets/docs/`](./assets/docs/).
- **Adding/Editing Publications & BibTeX**:
  - Add the publication card markup in [`index.html`](./index.html#publications).
  - Add the corresponding citation BibTeX block in [`js/script.js`](./js/script.js) under `bibtexData`.
- **Adding Projects**: Duplicate a `.project-card` block in [`index.html`](./index.html#projects), customize description, stack pills, GitHub link, and Live Demo capsule button.

---

## 📄 License

This repository is licensed under the [MIT License](./LICENSE).

---

## 📬 Contact & Connect

- **Name**: Md. Wali Ullah Khan
- **Email**: [wali.official71@gmail.com](mailto:wali.official71@gmail.com)
- **Phone / WhatsApp**: [+880 1682310315](tel:+8801682310315)
- **GitHub**: [@CringyNoob](https://github.com/CringyNoob)
- **LinkedIn**: [Md Wali Ullah Khan](https://www.linkedin.com/search/results/all/?keywords=Md%20Wali%20Ullah%20Khan)
- **Location**: Mirpur, Dhaka, Bangladesh

<br>

<div align="center">
  <sub>Designed &amp; Built by <a href="https://github.com/CringyNoob">Md. Wali Ullah Khan</a> · Powered by GitHub Pages</sub>
</div>
