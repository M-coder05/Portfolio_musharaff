# Mohammed Musharaff S — Editorial Portfolio & Technical Press Proof

A bespoke personal portfolio crafted with a print-shop / editorial press proof concept for **Mohammed Musharaff S** (Computer Science & Engineering, Class of 2027). Built strictly in vanilla HTML5, CSS3, and modern JavaScript with zero external frameworks, zero build steps, and zero database dependencies.

## Loaders & Contact

The animated “MM” intro appears once per session and is skipped when reduced motion is preferred. The static contact form opens a prefilled email draft in the visitor’s mail app; it does not send messages automatically or require a backend.

---

## 📁 Repository Directory Structure

```text
musharaff-portfolio/
├── index.html                           # Semantic HTML5 master document & editorial layout
├── README.md                            # Documentation, rename map & maintenance guide
└── assets/
    ├── css/
    │   └── style.css                    # Editorial stylesheet, tokens, CSS grid, print styles
    ├── js/
    │   ├── data.js                      # Single source of truth for all content
    │   └── main.js                      # DOM controller, theme toggle & accessible lightbox
    ├── resume/
    │   └── Mohammed_Musharaff_Resume.pdf# Curated resume PDF
    └── images/
        ├── projects/
        │   ├── rainbow-prints/          # Production figures for Rainbow Prints (4 plates)
        │   └── smart-student-portal/    # Architecture & UI figures for Student Portal (3 plates)
        └── achievements/
            ├── certificates/            # AWS, NPTEL, Infosys, Naan Mudhalvan, Internships (16 plates)
            ├── awards/                  # SANKALPANA 2024, INNOVATRIX, NSPC Gold, Rank (6 plates)
            └── events/                  # Pragyan NIT Trichy, IBM LLM, Symposia, Quizzes (9 plates)
```

---

## ⚡ How to Add a Project (in 5 Lines)

1. Save optimized WebP screenshots into `assets/images/projects/<your-project-slug>/`.
2. Open `assets/js/data.js` and locate the `projects` array.
3. Append a new object: `{ id: "slug", plateNumber: "PLATE 06", title: "Name", status: "LIVE", liveUrl: "...", githubUrl: "..." }`.
4. Include the `writeup` object (`problem`, `solution`, `architecture`), `specs` array, and `meta.stack`.
5. Add gallery figures: `gallery: [{ src: "assets/images/projects/slug/hero.webp", width: 1400, height: 880, caption: "..." }]`.

---

## 📜 How to Add a Certificate or Award (in 5 Lines)

1. Convert your image to WebP (max 1600px width, quality ~80) and place in `assets/images/achievements/<category>/` (`certificates`, `awards`, or `events`).
2. Open `assets/js/data.js` and locate the `achievements` array.
3. Append an entry: `{ id: "cert-slug", category: "certificates", categoryLabel: "Certificate", plateNumber: "PL-32", title: "Course Name", issuer: "Organization", date: "Month Year", highlight: "Key achievement details...", image: "assets/images/achievements/certificates/cert-slug.webp", width: 1200, height: 850, alt: "Description" }`.
4. Save `data.js` — the contact sheet filter counters, grid, and modal lightbox will update automatically.
5. Commit and push to your git repository.

---

## 🗂️ Image Rename & Classification Map

All 31 original screenshot files provided have been examined, properly slugged, rotated when necessary, converted to high-efficiency WebP, and filed into their correct category folders:

| # | Original File Name | New WebP Slug | Category | Issuer / Organization | Date / Event |
|---|--------------------|---------------|----------|-----------------------|--------------|
| 01 | `Screenshot 2026-10-24 181458.png` | `aws-academy-cloud-architecting.webp` | `certificates` | AWS Academy | 10 Oct 2026 (60 Hours) |
| 02 | `Screenshot 2026-10-24 181556.png` | `nspc-2026-paryavaran-competition-gold.webp` | `awards` | Ministry of Education & AICTE | 31 Aug 2026 (Parijat Gold) |
| 03 | `Screenshot 2026-10-24 181644.png` | `nptel-data-analytics-with-python.webp` | `certificates` | NPTEL (IIT Roorkee) | Jan–Apr 2026 (Score 58%) |
| 04 | `Screenshot 2026-10-24 181701.png` | `infosys-springboard-big-data-101.webp` | `certificates` | Infosys Springboard | 08 Apr 2026 |
| 05 | `Screenshot 2026-10-24 181725.png` | `mamcet-project-expo-2026.webp` | `events` | M.A.M College of Engineering & Tech | 24 Mar 2026 |
| 06 | `Screenshot 2026-10-24 181736.png` | `mamcet-mongodb-workshop.webp` | `certificates` | M.A.M College of Engineering & Tech | 14 Mar 2026 (MongoDB Workshop) |
| 07 | `Screenshot 2026-10-24 181752.png` | `innovatrix-web-dev-recognition-ceremony.webp` | `awards` | M.A.M College of Eng. (CSE Dept) | 2025 (Faculty Award Handover) |
| 08 | `Screenshot 2026-10-24 181803.png` | `innovatrix-web-dev-memento-plaque.webp` | `awards` | M.A.M College of Eng. (CSE Dept) | 2025 (INNOVATRIX Club Memento) |
| 09 | `Screenshot 2026-10-24 181818.png` | `mamcet-anna-university-sem1-rank.webp` | `awards` | M.A.M College of Eng. / Anna Univ | Nov–Dec 2023 (GPA 8.55, 3rd Rank) |
| 10 | `Screenshot 2026-10-24 181826.png` | `wadhwani-foundation-ignite-bootcamp.webp` | `certificates` | Wadhwani Foundation & Global Entr. | 17 Mar 2026 (Ignite Bootcamp) |
| 11 | `Screenshot 2026-10-24 181842.png` | `pals-ibm-systems-for-llms.webp` | `events` | PALS & IBM India Research Lab | Feb 2026 (Systems for LLMs) |
| 12 | `Screenshot 2026-10-24 181900.png` | `gce-thanjavur-zento26-technical-quiz.webp` | `events` | GCE Thanjavur (Zento' 26) | 04 Mar 2026 (Rotated 270°) |
| 13 | `Screenshot 2026-10-24 181913.png` | `f5coders-intermediate-python.webp` | `certificates` | F5CODER & MSME | 05 Dec 2025 (Python) |
| 14 | `Screenshot 2026-10-24 181923.png` | `pragyan-2026-nit-trichy-ml-dl-workshop.webp` | `events` | NIT Tiruchirappalli & GeeksforGeeks | 21 Feb 2026 (Pragyan '26 ML/DL) |
| 15 | `Screenshot 2026-10-24 181937.png` | `sankalpana-2024-hackathon-first-prize-ceremony.webp` | `awards` | M.A.M College of Eng. (MoE Cell) | 12 Sep 2024 (1st Place Trophy) |
| 16 | `Screenshot 2026-10-24 181949.png` | `sankalpana-2024-best-presentation-award.webp` | `awards` | M.A.M College of Eng. (MoE Cell) | 12 Sep 2024 (Best Presentation) |
| 17 | `Screenshot 2026-10-24 182004.png` | `mount-zion-techquest-2024-symposium.webp` | `events` | Mount Zion College of Eng. & Tech | 16 Oct 2024 (TechQuest-2024) |
| 18 | `Screenshot 2026-10-24 182015.png` | `karpagam-college-electric-vehicles-quiz.webp` | `events` | Karpagam College of Engineering | 15 Oct 2023 (EV Knowledge Quiz) |
| 19 | `Screenshot 2026-10-24 182021.png` | `bhumi-world-environment-day-volunteering.webp` | `events` | Bhumi, UNICEF & YuWaah | Jun 2024 (World Env. Day) |
| 20 | `Screenshot 2026-10-24 182030.png` | `f5coders-web-development-internship.webp` | `certificates` | F5CODER & MSME | 17 Oct 2025 (Web Dev Intern) |
| 21 | `Screenshot 2026-10-24 182040.png` | `naan-mudhalvan-hcl-ebpl-certificate.webp` | `certificates` | TNSDC Naan Mudhalvan & HCL | 10 Oct 2025 (EBPL Course) |
| 22 | `Screenshot 2026-10-24 182047.png` | `naan-mudhalvan-inlustro-java-spring-boot.webp` | `certificates` | TNSDC Naan Mudhalvan & InLustro | 17 Nov 2025 (Java Spring Boot) |
| 23 | `Screenshot 2026-10-24 182103.png` | `f5coders-internship-offer-letter.webp` | `certificates` | F5CODER & MSME | 10 Nov 2025 (Offer Letter) |
| 24 | `Screenshot 2026-10-24 182118.png` | `pals-entrepreneur-speaks-session.webp` | `events` | PALS & Typof / SMEPay | 12 Aug 2025 (Entrepreneur Speaks) |
| 25 | `Screenshot 2026-10-24 182131.png` | `skill-dunia-e-cell-iit-hyderabad-webinar.webp` | `events` | Skill Dunia & E-Cell IIT Hyderabad | 09 May 2025 (Career Webinar) |
| 26 | `Screenshot 2026-10-24 182153.png` | `elewayte-web-development-completion.webp` | `certificates` | Elewayte | 08 Dec 2024 (Web Development) |
| 27 | `Screenshot 2026-10-24 182203.png` | `elewayte-web-development-internship.webp` | `certificates` | Elewayte & Wipro DICE ID | 24 Nov 2024 (Internship) |
| 28 | `Screenshot 2026-10-24 182212.png` | `udemy-generative-ai-spring-boot.webp` | `certificates` | Udemy (Shabbir Dawoodi) | 27 Jun 2025 (GenAI & Spring Boot) |
| 29 | `Screenshot 2026-10-24 182226.png` | `scopik-edutech-python-developer-internship.webp` | `certificates` | Scopik Edutech Pvt. Ltd. | 19 Jul 2025 (Python Developer) |
| 30 | `Screenshot 2026-10-24 182237.png` | `scopik-edutech-internship-completion-letter.webp` | `certificates` | Scopik Edutech Pvt. Ltd. | 19 Jul 2025 (Letter of Recom.) |
| 31 | `Screenshot 2026-10-24 182248.png` | `scripting-spider-web-development-internship.webp` | `certificates` | Scripting Spider | 18 Jul 2025 (Web Dev Intern) |

---

## 🚀 Deployment Instructions

### GitHub Pages
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Mohammed Musharaff portfolio"
   ```
2. Create repository on GitHub and link remote:
   ```bash
   git remote add origin https://github.com/M-coder05/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. In GitHub repo settings, go to **Pages** &rarr; select source branch `main` &rarr; Save. Your site will be live at `https://m-coder05.github.io/portfolio/`.

### Netlify
- Drag and drop the `musharaff-portfolio` root folder into Netlify Drop, or connect the GitHub repository. No build command needed; publish directory is `./`.

### Vercel
- Deploy with `vercel` CLI or import the GitHub repo. Zero configuration needed as it is purely static HTML/CSS/JS.
