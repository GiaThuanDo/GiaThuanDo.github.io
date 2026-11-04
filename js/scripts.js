/* =====================================================================
   ALL YOUR CONTENT IS IN THE "SITE" OBJECT BELOW (English only).
   Edit only the text inside quotes. Don't touch anything after the
   line "RENDER CODE".

   TIPS
   - ADD an entry: copy one { ... }, block (or one "..." line) and paste below it.
   - REMOVE an entry: delete that block/line.
   - Keep the commas between entries and the quotes around text.
   - **double stars** make text bold.  In Education, \n starts a new small line.
   - A section with no entries ( [] ) hides itself and its menu link.
===================================================================== */
const SITE = {

  /* NOTE A: text under your name */
  intro: "MSc International Finance,<br>Corporate Finance & Investment Banking",

  /* NOTE B: EDUCATION — one entry per school. Text after \n shows as a small grey line. */
  education: [
    "**NEOMA Business School** | MSc in International Finance, Corporate Finance & Investment Banking | Sep 2026 – May 2027\nReims, France · Selected as the sole annual admit to the global Dual Degree program (1 candidate per year)",
    "**National Taipei University** | GMBA in Finance, Financial Engineering | Mar 2025 – May 2027\nTaipei, Taiwan · GPA 4.2 / 4.3 · Partial Scholarship, ANNEX Scholarship, Research Assistant Scholarship",
    "**Ton Duc Thang University** | Bachelor in English Linguistics, Translation and Interpretation | Graduated 2022\nHo Chi Minh City, Vietnam · GPA 3.5 / 4.0 · Class Valedictorian, 4 Academic Excellence scholarships, Dean's List"
  ],

  /* NOTE C: EXPERIENCE (timeline, newest first)
     date = small grey line; title = role + organization; link = optional {text, url} or null
     bullets = lines; a bullet can be "text" or { text:"text", url:"https://..." } */
  experience: [
    { date: "Apr 2025 – Present · Taipei, Taiwan",
      title: "AI Research Assistant (Part-Time), IFIT Lab (Intelligent Financial Innovation Technology Lab)",
      link: null,
      bullets: [
        "Conducted comparative benchmarking research of AI models across multilingual STT/TTS, translation, conversational AI and RAG, identifying model strengths, performance limitations and potential applications in workflow automation and Agentic AI."
      ] },
    { date: "Mar 2022 – Mar 2025 · Ho Chi Minh City, Vietnam",
      title: "Business Analyst, Commercial & Supply Chain Operations, Dentsply Sirona",
      link: null,
      bullets: [
        "Automated commercial workflows by deploying Salesforce CRM, cutting cross-functional processing times by 50% while increasing data accuracy.",
        "Modeled SBU sales data and restructured distribution networks during a corporate reorganization, identifying expansion opportunities for a projected 20% revenue lift and cutting logistics cycle times by 30%."
      ] },
    { date: "Mar 2017 – Feb 2025 · Ho Chi Minh City, Vietnam",
      title: "Business Owner / Strategic Advisor, DGT Collectibles Studio",
      link: null,
      bullets: [
        "Drove a 20% annual increase in client collectible portfolio ROI since 2019 by formulating algorithmic supply-demand trend models that optimized alternative asset evaluations and achieved a 90% quarterly inventory turnover rate."
      ] },
    { date: "Aug 2019 – Dec 2022 · Remote, United States",
      title: "Ecommerce Manager, Gozzman",
      link: null,
      bullets: [
        "Generated over $100,000 USD in total revenue by launching 2 digital storefronts and engineering targeted product designs, driving a 10% sustained lift in monthly sales while maintaining a 98% customer satisfaction benchmark."
      ] }
  ],

  /* NOTE D: SKILLS — one line each. **bold** works. */
  skills: [
    "**Technical:** SQL, VBA, SAP/AX, Salesforce CRM, Visio, Tableau, Power BI, DAX, Power Automate, Python",
    "**Languages:** Vietnamese (Native), English (C1), French (B1), Chinese (B1), Japanese (A2)",
    "**Interests:** 3D design, collecting antiques, learning languages"
  ],

  /* NOTE E: CERTIFICATIONS — name + link ("" = no link) */
  certifications: [
    { name: "Salesforce Ranger Badge", url: "" },
    { name: "Certified Translator Certificate", url: "" },
    { name: "More certifications (Google Drive)", url: "https://drive.google.com/drive/folders/1Xw6RfNgJpnIHjmEiR2bQ6iLv28meuZkd?usp=sharing" }
  ],

  /* NOTE F: AWARDS — one line each. **bold** works. */
  awards: [
    "**Sole annual admit**, NEOMA Business School global Dual Degree program (1 candidate per year)",
    "**Class Valedictorian**, Ton Duc Thang University (2022); 4 scholarships for Academic Excellence; Dean's List; Honors Student",
    "**Partial Scholarship, ANNEX Scholarship and Research Assistant Scholarship**, National Taipei University"
  ],

  /* NOTE G: PUBLICATIONS — one line per paper, citation style. **bold** works.
     The line below is a PLACEHOLDER. Replace it with your own paper, or change this
     whole list to  publications: [],  to hide the section and its menu link. */
  publications: [
    "**Your Name**, Co-author Name (Year), \"Paper Title\", Conference or Journal Name, City, Country, Month Day, Year. [Replace or delete this line]"
  ],

  /* NOTE H: PORTFOLIO — cards grouped under headings (like the original site).
     event = line above the title (competition / employer / course)
     title = bold project name          note  = small italic line ("" hides it)
     award = gold badge ("" hides it)   links = buttons; each { label: "Report", url: "https://..." }
     Cards with  links: []  show no buttons. Titles in [brackets] are PLACEHOLDERS: replace them.
     Example buttons to paste inside links: [ { label: "Video", url: "https://youtu.be/xxxx" },
                                              { label: "Report", url: "https://drive.google.com/..." } ]
     Use only public links (YouTube, Google Drive, PDF) and not your GitHub. */
  portfolio: [
    { heading: "Competitions",
      items: [
        { event: "VSU × NTPU Collaborative Hackathon on AI Application",
          title: "[Project name]",
          note: "Role: UI/UX Designer",
          award: "1st Place",
          links: [] },
        { event: "Future Bankers @ Cathay Talent Lab Competition",
          title: "[Project name]",
          note: "Role: Team Lead",
          award: "1st Place",
          links: [] },
        { event: "Ministry of Digital Affairs, Digital Talent Enhancement on AI Marketing",
          title: "[Project name]",
          note: "Role: Team Lead",
          award: "Finalist",
          links: [] }
      ] },
    { heading: "Work & Research Projects",
      items: [
        { event: "IFIT Lab · 2025 – Present",
          title: "Multilingual AI Model Benchmarking",
          note: "STT/TTS, translation, conversational AI and RAG",
          award: "",
          links: [] },
        { event: "Dentsply Sirona · 2022 – 2025",
          title: "Salesforce CRM Workflow Automation",
          note: "Cut cross-functional processing time by 50%",
          award: "",
          links: [] }
      ] },
    { heading: "Course Projects",
      items: [
        { event: "2025 Software Engineering Course Project",
          title: "InquAIry",
          note: "",
          award: "",
          links: [ { label: "Project Site",  url: "https://inquairy.github.io/" },
                   { label: "Course Report", url: "https://drive.google.com/file/d/1bs-NMOpDBO3KZ7iBUrAFOAE6JCavFvb5/view?usp=drive_link" } ] }
      ] }
  ],

  /* NOTE I: ACTIVITIES & COMPETITIONS — one line each */
  clubs: [
    "**1st Place** — VSU × NTPU Collaborative Hackathon on AI Application (UI/UX Designer)",
    "**1st Place** — Future Bankers @ Cathay Talent Lab Competition (Team Lead)",
    "**Finalist** — Ministry of Digital Affairs, Digital Talent Enhancement on AI Marketing (Team Lead)",
    "**Finalist** — Management Trainee / Associate Programs: L'Oréal, Prudential, Generali and others",
    "**Outstanding Individual Award** — National English Olympiad (Team Lead)",
    "**Champion** — Troy University English Contest"
  ],

  /* NOTE J: section titles + menu names */
  titles:    { edu: "Education", exp: "Experience", skills: "Skills", cert: "Certifications", award: "Awards", pub: "Publications", port: "Portfolio", act: "Activities" },
  navLabels: { edu: "Education", exp: "Experience", skills: "Skills", cert: "Certifications", award: "Awards", pub: "Publications", port: "Portfolio", act: "Activities" }
};

/* ============================ RENDER CODE ============================ */
document.addEventListener("DOMContentLoaded", () => {
  const esc  = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const rich = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const link = (text, url) => url ? `<a href="${esc(url)}" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline;">${rich(text)}</a>` : rich(text);
  const $ = id => document.getElementById(id);

  const buildEdu = a => `<div class="edu-block">${a.map(t => {
    const [main, sub] = String(t).split("\n");
    return `<div>${rich(main)}${sub ? `<span class="edu-sub">${rich(sub)}</span>` : ""}</div>`;
  }).join("")}</div>`;

  const buildExp = a => `<div class="timeline">${a.map(e => {
    const extra = e.link ? ` ${link(e.link.text, e.link.url)}` : "";
    const bullets = (e.bullets || []).map(b => `<li>${typeof b === "string" ? rich(b) : link(b.text, b.url)}</li>`).join("");
    return `<div class="timeline-item"><h5><span class="text-muted">${esc(e.date)}</span>${rich(e.title)}${extra}</h5>${bullets ? `<ul>${bullets}</ul>` : ""}</div>`;
  }).join("")}</div>`;

  const buildCert = a => `<div class="certificate-grid">${a.map(c =>
    c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener" class="certificate-item"><div>${esc(c.name)}</div></a>`
          : `<div class="certificate-item"><div>${esc(c.name)}</div></div>`).join("")}</div>`;

  const buildList = a => `<ul class="activity-list">${a.map(t => `<li>${rich(t)}</li>`).join("")}</ul>`;

  const buildPort = groups => groups.map(g => `
    <h3 class="portfolio-subtitle">${esc(g.heading)}</h3>
    <div class="portfolio-cards">${g.items.map(p => `
      <div class="portfolio-item">
        <div class="portfolio-caption">${esc(p.event)}<br><strong>${esc(p.title)}</strong>
          ${p.note  ? `<div class="portfolio-note">${esc(p.note)}</div>` : ""}
          ${p.award ? `<span class="portfolio-award">${esc(p.award)}</span>` : ""}
        </div>
        ${(p.links||[]).length ? `<div class="portfolio-links">${p.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : ""}
      </div>`).join("")}</div>`).join("");

  const S = [
    [SITE.education,      buildEdu,  "edu-content",       "education",      "edu-title",       "nav-edu",    "edu"],
    [SITE.experience,     buildExp,  "exp-content",       "experience",     "exp-title",       "nav-exp",    "exp"],
    [SITE.skills,         buildList, "skills-content",    "skills",         "skills-title",    "nav-skills", "skills"],
    [SITE.certifications, buildCert, "cert-content",      "certifications", "cert-title",      "nav-cert",   "cert"],
    [SITE.awards,         buildList, "award-content",     "award",          "award-title",     "nav-award",  "award"],
    [SITE.publications,   buildList, "pub-content",       "publication",    "pub-title",       "nav-pub",    "pub"],
    [SITE.portfolio,      buildPort, "portfolio-content", "portfolio",      "portfolio-title", "nav-port",   "port"],
    [SITE.clubs,          buildList, "act-content",       "activities",     "act-title",       "nav-act",    "act"]
  ];

  $("intro").textContent = SITE.intro;
  S.forEach(([data, build, box, sec, title, nav, key]) => {
    const has = Array.isArray(data) && data.length > 0;
    $(box).innerHTML = has ? build(data) : "";
    $(title).textContent = SITE.titles[key];
    $(nav).textContent = SITE.navLabels[key];
    $(sec).classList.toggle("hidden", !has);
    $(nav).style.display = has ? "" : "none";
  });

  /* if profile.jpg is missing, show initials instead of a broken image */
  const img = $("profileImg");
  img.addEventListener("error", () => {
    img.src = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130"><rect width="130" height="130" fill="#1b3763"/><text x="65" y="80" font-size="44" font-family="Georgia,serif" font-weight="700" text-anchor="middle" fill="#c9a15a">GD</text></svg>');
  }, { once: true });

  /* mobile menu */
  const menuToggle = $("menuToggle"), sidebar = $("sidebar"), scrim = $("scrim");
  const closeMenu = () => { sidebar.classList.remove("open"); scrim.classList.remove("show"); menuToggle.setAttribute("aria-expanded", "false"); };
  menuToggle.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    scrim.classList.toggle("show", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });
  scrim.addEventListener("click", closeMenu);
  sidebar.querySelectorAll(".nav-link").forEach(l => l.addEventListener("click", closeMenu));

  /* highlight the menu item of the section being read */
  const navLinks = Array.from(sidebar.querySelectorAll(".nav-link")).filter(l => l.style.display !== "none");
  const sections = navLinks.map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  const setActiveLink = () => {
    let current = sections[0];
    for (const s of sections) if (s.getBoundingClientRect().top - 100 <= 0) current = s;
    navLinks.forEach(l => l.classList.toggle("active", !!current && l.getAttribute("href") === `#${current.id}`));
  };
  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
});
