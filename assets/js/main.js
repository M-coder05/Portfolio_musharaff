/**
 * MOHAMMED MUSHARAFF S — EDITORIAL PORTFOLIO CORE CONTROLLER
 * Vanilla JavaScript / Zero Dependencies
 * Renders dynamically from data.js, manages Lightbox, Theme, and Gallery
 */

(function () {
  "use strict";

  // Check data availability
  if (typeof PORTFOLIO_DATA === "undefined") {
    console.error("Fatal: PORTFOLIO_DATA not loaded.");
    return;
  }

  const { personal, skills, experience, projects, achievements } = PORTFOLIO_DATA;

  // Global State for Achievements Lightbox
  let currentFilter = "all";
  let filteredAchievements = [...achievements];
  let activeLightboxIndex = 0;

  /* --------------------------------------------------------------------------
     1. THEME CONTROLLER (Ink / Paper Mode)
     -------------------------------------------------------------------------- */
  function initTheme() {
    const root = document.documentElement;
    const toggleBtn = document.getElementById("themeToggle");
    const labelSpan = document.getElementById("themeLabel");
    
    // Check saved or system preference
    const savedTheme = localStorage.getItem("musharaff-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemDark ? "dark" : "light");

    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);
      localStorage.setItem("musharaff-theme", theme);
      if (labelSpan) {
        labelSpan.textContent = theme === "dark" ? "LIGHT PAPER" : "DARK INK";
      }
      if (toggleBtn) {
        toggleBtn.setAttribute("aria-label", `Switch to ${theme === "dark" ? "Light" : "Dark"} mode`);
      }
    }

    applyTheme(initialTheme);

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") || "light";
        applyTheme(current === "dark" ? "light" : "dark");
      });
    }

    // Listen for OS scheme changes if user hasn't explicitly set preference
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("musharaff-theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. RENDER HERO & STATS
     -------------------------------------------------------------------------- */
  function renderHero() {
    const nameEl = document.getElementById("heroName");
    const focusEl = document.getElementById("heroFocus");
    const statementEl = document.getElementById("heroStatement");
    const availEl = document.getElementById("heroAvailability");
    const specTableEl = document.getElementById("heroSpecTable");

    if (nameEl) nameEl.textContent = personal.name;
    if (focusEl) focusEl.textContent = personal.title;
    if (statementEl) {
      statementEl.textContent = `${personal.summaryParagraphs[0]} ${personal.summaryParagraphs[1]}`;
    }
    if (availEl) {
      availEl.innerHTML = `<span class="pulse-led" aria-hidden="true"></span> ${personal.availability}`;
    }

    if (specTableEl) {
      specTableEl.innerHTML = `
        <tr>
          <td class="spec-key">Candidate</td>
          <td class="spec-val">${personal.name}</td>
        </tr>
        <tr>
          <td class="spec-key">Discipline</td>
          <td class="spec-val">B.E. Computer Science & Eng. ('27)</td>
        </tr>
        <tr>
          <td class="spec-key">Station</td>
          <td class="spec-val">${personal.location}</td>
        </tr>
        <tr>
          <td class="spec-key">Institution</td>
          <td class="spec-val">${personal.education.institution}</td>
        </tr>
        <tr>
          <td class="spec-key">Academic Mark</td>
          <td class="spec-val">CGPA ${personal.education.cgpa}</td>
        </tr>
        <tr>
          <td class="spec-key">Live Production</td>
          <td class="spec-val"><a href="${projects[0].liveUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--vermilion);text-decoration:underline;">rainbowprintstry.com ↗</a></td>
        </tr>
      `;
    }
  }

  /* --------------------------------------------------------------------------
     3. RENDER IMPRINT (ABOUT & FACTS)
     -------------------------------------------------------------------------- */
  function renderImprint() {
    const proseEl = document.getElementById("imprintProse");
    const factsEl = document.getElementById("imprintFacts");

    if (proseEl) {
      proseEl.innerHTML = `
        <p class="imprint-lead">
          ${personal.summaryParagraphs[0]}
        </p>
        <p>
          ${personal.summaryParagraphs[1]}
        </p>
        <p>
          I prioritize semantic markup, fast load performance, zero layout shift (CLS), and keyboard-accessible navigation. Every interface is built to function reliably under real network conditions, from local business portals to production web applications.
        </p>
      `;
    }

    if (factsEl) {
      const langsHtml = personal.languages
        .map(l => `<span class="lang-tag">${l}</span>`)
        .join("");

      factsEl.innerHTML = `
        <div class="fact-entry">
          <span class="fact-key">Current Academic Program</span>
          <span class="fact-value">${personal.education.degree}</span>
          <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--ink-secondary);">${personal.education.period} • CGPA ${personal.education.cgpa}</span>
        </div>
        <div class="fact-entry">
          <span class="fact-key">Institution</span>
          <span class="fact-value">${personal.education.institution}</span>
        </div>
        <div class="fact-entry">
          <span class="fact-key">Location Base</span>
          <span class="fact-value">${personal.location}</span>
        </div>
        <div class="fact-entry">
          <span class="fact-key">Spoken & Written Languages</span>
          <div class="lang-tags">${langsHtml}</div>
        </div>
        <div class="fact-entry">
          <span class="fact-key">Verified Honours & Credentials</span>
          <span class="fact-value">${achievements.length} Verified Records on File</span>
        </div>
      `;
    }
  }

  /* --------------------------------------------------------------------------
     4. RENDER TOOLKIT (RULED INDEX)
     -------------------------------------------------------------------------- */
  function renderToolkit() {
    const container = document.getElementById("toolkitContainer");
    if (!container) return;

    container.innerHTML = skills.map((group, idx) => {
      const rowsHtml = group.items.map(item => `
        <tr>
          <td class="toolkit-skill-name">${item.name}</td>
          <td class="toolkit-skill-detail">${item.detail}</td>
        </tr>
      `).join("");

      return `
        <article class="toolkit-category-card">
          <div class="toolkit-cat-header">
            <span class="toolkit-cat-name">${group.category}</span>
            <span class="toolkit-cat-lead">${group.lead}</span>
          </div>
          <table class="toolkit-items-table" role="table">
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </article>
      `;
    }).join("");
  }

  /* --------------------------------------------------------------------------
     5. RENDER PROOFS (PROJECTS WITH MULTI-IMAGE GALLERIES)
     -------------------------------------------------------------------------- */
  function renderProjects() {
    const container = document.getElementById("projectsContainer");
    if (!container) return;

    container.innerHTML = projects.map((p, pIdx) => {
      // Alternate layouts: Project 0 = Layout A (Gallery left), Project 1 = Layout B (Gallery right)
      const isLayoutA = pIdx % 2 === 0;
      const initialHero = p.gallery[0];

      const specsHtml = p.specs.map(s => `
        <div class="spec-line">
          <span class="label">${s.label}</span>
          <span class="val">${s.value}</span>
        </div>
      `).join("");

      const stackHtml = p.meta.stack.map(st => `
        <span class="stack-tag">${st}</span>
      `).join("");

      const thumbsHtml = p.gallery.map((img, i) => `
        <button 
          type="button" 
          class="gallery-thumb-btn ${i === 0 ? 'active' : ''}" 
          data-project="${p.id}" 
          data-index="${i}"
          aria-label="View figure ${i + 1} of ${p.title}">
          <img 
            src="${img.src}" 
            alt="${img.caption}" 
            width="${img.width}" 
            height="${img.height}" 
            loading="lazy" 
            decoding="async">
        </button>
      `).join("");

      const galleryBlock = `
        <div class="project-gallery-box">
          <div 
            class="gallery-main-frame" 
            id="mainFrame-${p.id}" 
            tabindex="0" 
            role="region" 
            aria-label="Main gallery image for ${p.title}">
            <img 
              id="heroImg-${p.id}" 
              src="${initialHero.src}" 
              alt="${initialHero.caption}" 
              width="${initialHero.width}" 
              height="${initialHero.height}" 
              loading="lazy" 
              decoding="async">
            <div class="gallery-caption-bar">
              <span id="heroCaption-${p.id}">${initialHero.caption}</span>
              <span style="font-family:var(--font-mono);color:var(--vermilion);font-weight:600;">FIG. 01</span>
            </div>
          </div>
          <div class="gallery-thumbs-row" role="group" aria-label="Thumbnails for ${p.title}">
            ${thumbsHtml}
          </div>
        </div>
      `;

      const ledgerBlock = `
        <div class="project-ledger-box">
          <h3 class="project-heading">${p.title}</h3>
          <div class="project-descriptor">${p.descriptor}</div>
          
          <div class="project-prose">
            <p><strong>Challenge:</strong> ${p.writeup.problem}</p>
            <p><strong>Solution:</strong> ${p.writeup.solution}</p>
            <p><strong>Implementation:</strong> ${p.writeup.architecture}</p>
          </div>

          <div class="project-spec-strip">
            ${specsHtml}
          </div>

          <div class="project-stack-tags">
            ${stackHtml}
          </div>

          <div class="project-link-actions">
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="press-btn press-btn-solid">
              Inspect Live Site ↗
            </a>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="press-btn press-btn-outline">
              Source Code (GitHub) ↗
            </a>
          </div>
        </div>
      `;

      return `
        <article class="project-proof-plate" id="${p.id}">
          <div class="project-plate-header">
            <span class="project-plate-stamp">${p.plateNumber}</span>
            <span class="project-live-indicator">
              <span class="pulse-led" aria-hidden="true"></span> ${p.status}
            </span>
          </div>
          <div class="${isLayoutA ? 'project-layout-a' : 'project-layout-b'}">
            ${isLayoutA ? galleryBlock + ledgerBlock : ledgerBlock + galleryBlock}
          </div>
        </article>
      `;
    }).join("");

    // Bind thumbnail click events for each project gallery
    projects.forEach(p => {
      const thumbs = container.querySelectorAll(`.gallery-thumb-btn[data-project="${p.id}"]`);
      const heroImg = document.getElementById(`heroImg-${p.id}`);
      const heroCaption = document.getElementById(`heroCaption-${p.id}`);

      thumbs.forEach((thumb, idx) => {
        thumb.addEventListener("click", () => {
          thumbs.forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
          const selected = p.gallery[idx];
          if (heroImg) {
            heroImg.src = selected.src;
            heroImg.alt = selected.caption;
            heroImg.width = selected.width;
            heroImg.height = selected.height;
          }
          if (heroCaption) {
            heroCaption.textContent = selected.caption;
            const figLabel = heroCaption.nextElementSibling;
            if (figLabel) {
              figLabel.textContent = `FIG. 0${idx + 1}`;
            }
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. RENDER TRADE RECORD (EXPERIENCE LEDGER)
     -------------------------------------------------------------------------- */
  function renderExperience() {
    const container = document.getElementById("experienceLedger");
    if (!container) return;

    container.innerHTML = experience.map(exp => {
      const bulletsHtml = exp.highlights.map(b => `<li>${b}</li>`).join("");
      const techHtml = exp.technologies.map(t => `<span class="ledger-tag">${t}</span>`).join("");

      return `
        <article class="ledger-row" id="${exp.id}">
          <div class="ledger-margin">
            <span class="ledger-plate-id">${exp.plateNumber}</span>
            <div class="ledger-period">${exp.period}</div>
            <div class="ledger-duration">${exp.duration}</div>
            <div class="ledger-location">${exp.location} • ${exp.type}</div>
          </div>
          <div class="ledger-content">
            <h3 class="ledger-role-title">${exp.role}</h3>
            <div class="ledger-org">@ ${exp.organization}</div>
            <ul class="ledger-bullets">
              ${bulletsHtml}
            </ul>
            <div class="ledger-tech-strip">
              ${techHtml}
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  /* --------------------------------------------------------------------------
     7. RENDER PLATES OF HONOUR (ACHIEVEMENTS & CERTIFICATES)
     -------------------------------------------------------------------------- */
  function renderAchievements() {
    const grid = document.getElementById("achievementsGrid");
    const countAll = document.getElementById("countAll");
    const countCerts = document.getElementById("countCerts");
    const countAwards = document.getElementById("countAwards");
    const countEvents = document.getElementById("countEvents");

    // Populate filter counts
    if (countAll) countAll.textContent = achievements.length;
    if (countCerts) countCerts.textContent = achievements.filter(a => a.category === "certificates").length;
    if (countAwards) countAwards.textContent = achievements.filter(a => a.category === "awards").length;
    if (countEvents) countEvents.textContent = achievements.filter(a => a.category === "events").length;

    // Filter items
    filteredAchievements = currentFilter === "all"
      ? [...achievements]
      : achievements.filter(a => a.category === currentFilter);

    if (!grid) return;

    grid.innerHTML = filteredAchievements.map((item, index) => `
      <article 
        class="proof-card" 
        tabindex="0" 
        role="button" 
        aria-label="Enlarge ${item.title}" 
        data-index="${index}">
        <div class="proof-card-media">
          <img 
            src="${item.image}" 
            alt="${item.alt}" 
            width="${item.width}" 
            height="${item.height}" 
            loading="lazy" 
            decoding="async">
          <span class="proof-card-badge">${item.categoryLabel}</span>
        </div>
        <div class="proof-card-body">
          <div class="proof-card-folio">
            <span>${item.plateNumber}</span>
            <span>${item.date}</span>
          </div>
          <h4 class="proof-card-title">${item.title}</h4>
          <div class="proof-card-issuer">${item.issuer}</div>
        </div>
      </article>
    `).join("");

    // Bind click and keyboard Enter/Space to open lightbox
    const cards = grid.querySelectorAll(".proof-card");
    cards.forEach(card => {
      const idx = parseInt(card.getAttribute("data-index"), 10);
      card.addEventListener("click", () => openLightbox(idx));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(idx);
        }
      });
    });
  }

  function initAchievementsFilter() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        currentFilter = btn.getAttribute("data-filter") || "all";
        renderAchievements();
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. LIGHTBOX CONTROLLER (ACCESSIBLE / KEYBOARD DRIVEN)
     -------------------------------------------------------------------------- */
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxCloseBtn = document.getElementById("lightboxClose");
  const lightboxPrevBtn = document.getElementById("lightboxPrev");
  const lightboxNextBtn = document.getElementById("lightboxNext");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxPlate = document.getElementById("lightboxPlate");
  const lightboxIssuer = document.getElementById("lightboxIssuer");
  const lightboxDate = document.getElementById("lightboxDate");
  const lightboxEvent = document.getElementById("lightboxEvent");
  const lightboxHighlight = document.getElementById("lightboxHighlight");
  const lightboxCounter = document.getElementById("lightboxCounter");

  let lastActiveElement = null;

  function openLightbox(index) {
    if (!filteredAchievements || index < 0 || index >= filteredAchievements.length) return;
    lastActiveElement = document.activeElement;
    activeLightboxIndex = index;
    updateLightboxContent();
    lightboxOverlay.classList.add("active");
    lightboxOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // lock scroll
    if (lightboxCloseBtn) lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    lightboxOverlay.classList.remove("active");
    lightboxOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
  }

  function updateLightboxContent() {
    const item = filteredAchievements[activeLightboxIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.alt;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxPlate) lightboxPlate.textContent = `${item.plateNumber} / ${item.categoryLabel}`;
    if (lightboxIssuer) lightboxIssuer.textContent = item.issuer;
    if (lightboxDate) lightboxDate.textContent = item.date;
    if (lightboxEvent) lightboxEvent.textContent = item.event;
    if (lightboxHighlight) lightboxHighlight.textContent = item.highlight;
    if (lightboxCounter) {
      lightboxCounter.textContent = `PROOF ${activeLightboxIndex + 1} OF ${filteredAchievements.length}`;
    }

    if (lightboxPrevBtn) {
      lightboxPrevBtn.disabled = activeLightboxIndex === 0;
    }
    if (lightboxNextBtn) {
      lightboxNextBtn.disabled = activeLightboxIndex === filteredAchievements.length - 1;
    }
  }

  function nextLightbox() {
    if (activeLightboxIndex < filteredAchievements.length - 1) {
      activeLightboxIndex++;
      updateLightboxContent();
    }
  }

  function prevLightbox() {
    if (activeLightboxIndex > 0) {
      activeLightboxIndex--;
      updateLightboxContent();
    }
  }

  function initLightboxListeners() {
    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", nextLightbox);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", prevLightbox);

    // Click outside dialog to close
    if (lightboxOverlay) {
      lightboxOverlay.addEventListener("click", (e) => {
        if (e.target === lightboxOverlay) closeLightbox();
      });
    }

    // Keyboard handlers: Esc, Left, Right, Tab trap
    window.addEventListener("keydown", (e) => {
      if (!lightboxOverlay.classList.contains("active")) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextLightbox();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevLightbox();
      } else if (e.key === "Tab") {
        // Trap focus inside lightbox
        const focusable = lightboxOverlay.querySelectorAll("button, [tabindex='0']");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     9. LIVE TIME & COLOPHON
     -------------------------------------------------------------------------- */
  function initLiveTime() {
    const timeEl = document.getElementById("liveStationTime");
    const yearEl = document.getElementById("currentYear");
    
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    function updateTime() {
      if (!timeEl) return;
      try {
        const now = new Date();
        const options = {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        };
        const formatted = new Intl.DateTimeFormat("en-IN", options).format(now);
        timeEl.textContent = `TIRUCHIRAPPALLI, IN • ${formatted} IST`;
      } catch (err) {
        timeEl.textContent = "TIRUCHIRAPPALLI, IN • 10:23 AM IST";
      }
    }

    updateTime();
    setInterval(updateTime, 1000);
  }

  /* --------------------------------------------------------------------------
     10. INITIALIZATION
     -------------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderHero();
    renderImprint();
    renderToolkit();
    renderProjects();
    renderExperience();
    initAchievementsFilter();
    renderAchievements();
    initLightboxListeners();
    initLiveTime();
  });
})();
