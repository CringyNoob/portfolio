# Deployment Guide — Md. Wali Ullah Khan Portfolio

This guide outlines step-by-step instructions for deploying this portfolio website across various modern hosting platforms.

---

## 🚀 1. Deploying to GitHub Pages (Recommended)

GitHub Pages provides free, zero-config hosting with built-in HTTPS and global CDN.

### Step 1: Initialize and Push to GitHub

If you haven't pushed your workspace to GitHub yet, execute the following commands in your terminal:

```bash
git add .
git commit -m "feat: complete modern academic & engineering portfolio"
git branch -M main
git remote add origin https://github.com/CringyNoob/Portfolio.git # Replace with your repository URL if different
git push -u origin main --force
```

### Step 2: Enable GitHub Pages in Repository Settings

1. Open your repository on GitHub: `https://github.com/CringyNoob/Portfolio`.
2. Click on the **Settings** tab in the top navigation.
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` branch and `/ (root)` directory.
5. Click **Save**.
6. Within 1–2 minutes, your website will be live at:
   - **`https://cringynoob.github.io/Portfolio/`**
   *(Or `https://cringynoob.github.io/` if your repository is named `CringyNoob.github.io`)*.

---

## 🌐 2. Configuring a Custom Domain (Optional)

If you own a custom domain (e.g., `waliullahkhan.dev` or `walikhan.me`):

1. In GitHub repository **Settings** > **Pages** > **Custom domain**, enter your domain name (e.g., `www.yourdomain.com`).
2. Click **Save** (this will automatically create a `CNAME` file in your repository).
3. In your DNS provider (Cloudflare, Namecheap, GoDaddy, Google Domains), add the following DNS records:
   - **Apex domain (`@`)**:
     - `185.199.108.153` (A Record)
     - `185.199.109.153` (A Record)
     - `185.199.110.153` (A Record)
     - `185.199.111.153` (A Record)
   - **Subdomain (`www`)**:
     - CNAME: `cringynoob.github.io`
4. Check **Enforce HTTPS** in GitHub Pages settings once the DNS check passes.

---

## ⚡ 3. Alternative 1-Click Deployments

### Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New Project** > **Import Git Repository**.
3. Select `Portfolio`.
4. Leave all build settings at default (Static HTML) and click **Deploy**.

### Netlify
1. Go to [netlify.com](https://netlify.com) and log in.
2. Click **Add new site** > **Import an existing project**.
3. Select GitHub and choose `Portfolio`.
4. Deploy directory: `.` (root), then click **Deploy Site**.

---

## 🛠️ 4. Local Testing Before Deployment

To verify changes locally before pushing:

```bash
# Python built-in server
python -m http.server 8080

# Node.js / npx serve
npx serve .

# VS Code
Right-click on index.html -> Open with Live Server
```
Visit `http://localhost:8080` in your web browser.
