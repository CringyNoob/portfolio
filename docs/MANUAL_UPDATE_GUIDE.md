# Manual Portfolio Maintenance & Update Guide

This guide explains how to **manually update every section of your portfolio website** in pure HTML/CSS/JavaScript without relying on AI tools.

---

## 📑 Quick Navigation

1. [Updating the Resume PDF](#1-updating-the-resume-pdf)
2. [Updating the Profile Picture](#2-updating-the-profile-picture)
3. [Updating the About Me Section](#3-updating-the-about-me-section)
4. [Updating Experience (Jobs & TA Roles)](#4-updating-experience-jobs--ta-roles)
5. [Updating Education & Grades](#5-updating-education--grades)
6. [Adding or Editing Projects (with Live Demos)](#6-adding-or-editing-projects-with-live-demos)
7. [Updating Achievements & Awards](#7-updating-achievements--awards)
8. [Adding Publications & BibTeX Citations](#8-adding-publications--bibtex-citations)
9. [Updating Technical Skills](#9-updating-technical-skills)
10. [Updating Leadership & Extracurriculars](#10-updating-leadership--extracurriculars)
11. [Updating Contact Info & Socials](#11-updating-contact-info--socials)
12. [Publishing Your Changes to GitHub](#12-publishing-your-changes-to-github)

---

## 1. Updating the Resume PDF

If you export a new resume PDF from Overleaf, Word, or LaTeX:

1. Rename your new file to: `Md_Wali_Ullah_Khan_Resume.pdf`.
2. Replace the file at:
   - `assets/docs/Md_Wali_Ullah_Khan_Resume.pdf`
3. **No code edits are needed**! All "Download Resume", "View PDF", and `Ctrl + P` buttons link directly to this path.

---

## 2. Updating the Profile Picture

1. Save your new portrait as: `Profile.jpg`.
2. Replace the file in `assets/images/Profile.jpg`.
3. If you use a different format (like `.png` or a new name), open `index.html` and update:
   - `<meta property="og:image" content="./assets/images/YourPhoto.jpg">`
   - `<img src="./assets/images/YourPhoto.jpg" ... class="mobile-avatar">`
   - `<img src="./assets/images/YourPhoto.jpg" ... class="profile-avatar">`

---

## 3. Updating the About Me Section

Open [`index.html`](../index.html) and locate `<!-- 1. ABOUT SECTION -->` (`<section id="about">`):

```html
<div class="about-card">
    <p class="about-intro">
        <!-- Edit your introductory headline, standing, and target roles here -->
        Final-year <strong>Computer Science &amp; Engineering</strong> student...
    </p>
    <p class="about-bio">
        <!-- Edit your core engineering background and interests here -->
        Proven ability to architect distributed microservices...
    </p>
    
    <div class="research-focus-title">Core Competencies &amp; Technical Focus</div>
    <div class="research-tags">
        <!-- Add or remove highlight pills -->
        <span class="tag-pill"><i class="fa-solid fa-network-wired"></i> Distributed Microservices</span>
        <span class="tag-pill"><i class="fa-brands fa-python"></i> Python &amp; FastAPI Backend</span>
    </div>
</div>
```

---

## 4. Updating Experience (Jobs & TA Roles)

Open [`index.html`](../index.html) and locate `<!-- 2. EXPERIENCE SECTION -->` (`<section id="experience">`):

### To edit the existing role:
- Modify `<span class="timeline-date">` for the date range.
- Modify `<li>` items inside `<ul class="timeline-bullets">`.
- Modify `<span class="tag-pill">` items inside `<div class="courses-tags">`.

### To add a new work experience:
Copy and paste this template inside `<div class="timeline">`:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-card">
        <div class="timeline-header">
            <h3 class="role-title">Software Engineer Intern</h3>
            <span class="timeline-date"><i class="fa-regular fa-calendar"></i> June 2026 – Sept 2026</span>
        </div>
        <div class="timeline-org">
            <i class="fa-solid fa-building"></i> Company Name · Dhaka, Bangladesh
        </div>
        <ul class="timeline-bullets">
            <li>Developed scalable backend microservices using Node.js and PostgreSQL.</li>
            <li>Optimized database queries, reducing API latency by 25%.</li>
        </ul>
    </div>
</div>
```

---

## 5. Updating Education & Grades

Open [`index.html`](../index.html) and locate `<!-- 3. EDUCATION SECTION -->` (`<section id="education">`):

- **Expected Graduation**: Modify `<span class="education-date">Nov 2022 – Oct 2026 (Expected)</span>`.
- **CGPA**: Modify `<span class="gpa-badge"><i class="fa-solid fa-star"></i> CGPA: 3.85 / 4.00</span>`.
- **Scholarship/Honors**: Modify `<span class="honors-badge">...</span>`.

---

## 6. Adding or Editing Projects (with Live Demos)

Open [`index.html`](../index.html) and locate `<!-- 4. PROJECTS SECTION -->` (`<section id="projects">`):

To add a new project card, paste this template inside `<div class="projects-grid">`:

```html
<div class="project-card">
    <div class="project-top">
        <div class="project-header">
            <a href="https://yourlivedemo.com" target="_blank" rel="noopener noreferrer" class="project-title-link">
                <i class="fa-solid fa-rocket" style="color: var(--accent-primary);"></i> Project Name
            </a>
            <div class="project-links">
                <!-- GitHub Link Icon -->
                <a href="https://github.com/CringyNoob/repo-name" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="GitHub Repository">
                    <i class="fa-brands fa-github"></i>
                </a>
                <!-- Capsule Live Demo Button -->
                <a href="https://yourlivedemo.com" target="_blank" rel="noopener noreferrer" class="btn-live-capsule" title="Open Live Demo">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                </a>
            </div>
        </div>
        
        <!-- Optional Award Badge -->
        <div class="project-badge-award">
            <i class="fa-solid fa-award"></i> Winner / Finalist Award Info
        </div>
        
        <p class="project-desc">
            Brief summary of what the application does and the problems it solves.
        </p>
        <div class="project-contribution">
            <strong>Contribution:</strong> Detailed breakdown of what you personally designed, architected, and built.
        </div>
    </div>
    
    <!-- Tech Stack Badges -->
    <div class="project-stack">
        <span class="stack-badge"><i class="devicon-python-plain colored"></i> Python</span>
        <span class="stack-badge"><i class="devicon-react-original colored"></i> React</span>
        <span class="stack-badge"><i class="devicon-postgresql-plain colored"></i> PostgreSQL</span>
        <span class="stack-badge"><i class="devicon-docker-plain colored"></i> Docker</span>
    </div>
</div>
```

---

## 7. Updating Achievements & Awards

Open [`index.html`](../index.html) and locate `<!-- 5. ACHIEVEMENTS & AWARDS SECTION -->` (`<section id="achievements">`):

Add a new card inside `<div class="achievements-grid">`:

```html
<div class="achievement-card">
    <div class="achievement-icon-wrap">
        <i class="fa-solid fa-trophy"></i>
    </div>
    <div class="achievement-content">
        <h4 class="achievement-title">Award Title</h4>
        <div class="achievement-meta">Awarding Body / Organization</div>
        <span class="achievement-year">2026</span>
    </div>
</div>
```

---

## 8. Adding Publications & BibTeX Citations

Adding a new research paper requires **two simple steps**:

### Step 1: Add HTML Card in [`index.html`](../index.html)
Locate `<!-- 6. PUBLICATIONS & MANUSCRIPTS SECTION -->` (`<section id="publications">`):

1. Paste a new `.pub-card` into `<div class="publications-list">`:
```html
<div class="pub-card" data-category="review" data-topic="bio">
    <div class="pub-meta-top">
        <span class="pub-status-badge review"><i class="fa-solid fa-clock-rotate-left"></i> Submitted / Under Review</span>
        <span class="pub-target-venue"><i class="fa-solid fa-landmark"></i> Target Journal/Conference, 2026</span>
    </div>
    <h3 class="pub-title">
        “Paper Title in Quotation Marks”
    </h3>
    <p class="pub-authors">
        <span class="author-self">Md. Wali Ullah Khan</span>, Co-author One, Co-author Two.
    </p>
    <div class="pub-actions">
        <!-- Note data-pub-id must match key in script.js -->
        <button class="btn-xs btn-bibtex" data-pub-id="pub-my-new-paper">
            <i class="fa-solid fa-quote-left"></i> BibTeX
        </button>
        <span class="tag-pill" style="font-size: 0.76rem; padding: 0.2rem 0.6rem;">Deep Learning</span>
    </div>
</div>
```

2. Update the filter button count numbers in `.filter-bar` (e.g. `Under Review (3)` or `All (6)`).

### Step 2: Add Citation in [`js/script.js`](../js/script.js)
Open `js/script.js` and locate `const bibtexData = { ... }` (around line 184). Add your paper's entry matching the `data-pub-id`:

```javascript
'pub-my-new-paper': `@article{khan2026paper,
  title={Paper Title Goes Here},
  author={Khan, Md. Wali Ullah and collaborators},
  journal={Target Journal Name},
  year={2026},
  note={Under Review}
}`,
```

---

## 9. Updating Technical Skills

Open [`index.html`](../index.html) and locate `<!-- 7. SKILLS SECTION -->` (`<section id="skills">`):

Inside any `.skill-category-card` (e.g., Programming Languages, Web Tech, Database Systems, Data Science & ML, Tools & Practices), add a pill:

```html
<!-- Devicon icon -->
<span class="skill-pill"><i class="devicon-nextjs-plain colored"></i> Next.js</span>

<!-- Font Awesome icon -->
<span class="skill-pill"><i class="fa-solid fa-microchip"></i> Raspberry Pi</span>
```
*(Browse available icons at [devicon.dev](https://devicon.dev) and [fontawesome.com](https://fontawesome.com)).*

---

## 10. Updating Leadership & Extracurriculars

Open [`index.html`](../index.html) and locate `<!-- 8. EXTRACURRICULARS & LEADERSHIP SECTION -->` (`<section id="extracurriculars">`):

Add a new card inside `<div class="extracurricular-list">`:

```html
<div class="extra-card">
    <div class="extra-header">
        <h3 class="extra-role">Role / Position Title</h3>
        <span class="education-date"><i class="fa-regular fa-calendar"></i> Month 2026 – Present</span>
    </div>
    <div class="extra-org">
        <i class="fa-solid fa-people-group"></i> Organization Name · Location
    </div>
    <p class="extra-desc">
        Summary of your responsibilities, leadership initiatives, and contributions.
    </p>
</div>
```

---

## 11. Updating Contact Info & Socials

Contact details exist in two places in [`index.html`](../index.html):

1. **Sticky Sidebar** (`<div class="social-links">` around line 70):
   - Email: `mailto:your.email@gmail.com`
   - GitHub: `https://github.com/YourUsername`
   - LinkedIn: `https://linkedin.com/in/YourProfile`
   - Phone: `tel:+8801682310315`

2. **Contact Section** (`<section id="contact">` around line 720):
   - Edit the respective `.contact-card` elements with your updated information.

---

## 12. Publishing Your Changes to GitHub

Once you finish making your edits:

1. Open your terminal in the portfolio directory (`d:/Portfolio`).
2. Run:
   ```bash
   git status
   git add .
   git commit -m "update: manual content updates"
   git push origin main
   ```
3. GitHub Pages will automatically redeploy the updated website within 60 seconds!
