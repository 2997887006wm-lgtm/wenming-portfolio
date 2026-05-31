'use strict';

// 英文翻译字典（key 与 HTML 中 data-i18n 一致）。中文以页面原文为准，运行时自动捕获。
const EN = {
  role: "AI Product Manager / Product Intern",
  showContacts: "Show Contacts",
  c_email: "Email",
  c_phone: "Phone",
  c_party: "Political Status",
  c_edu: "Education",
  v_party: "Member of the CPC",
  v_edu: "Hunan University · M.A. Journalism & Communication (985)",

  nav_about: "About",
  nav_resume: "Resume",
  nav_portfolio: "Portfolio",
  nav_contact: "Contact",

  about_title: "About Me",
  about_p1: "Hi, I'm Wen Ming, a product intern focused on AI. I'm a Journalism & Communication master's student at Hunan University (a Project 985 / Double First-Class university), with a bachelor's in Journalism (GPA 3.77/4.0, top 3% of my major).",
  about_p2: "I love AI, communicate openly, reflect often, and dig deep when researching. I've interned as an AI Product Manager at <strong>Baidu</strong> and as an AI Product Data intern at <strong>Zhipu AI</strong>, deeply involved in requirement definition, dataset construction, evaluation, and cross-team collaboration for LLM / Agent products. As an indie maker, I also built the “Mojing” AI video-script generation website from scratch with zero coding background.",
  about_p3: "I'm good at breaking real pain points in content creation into shippable product solutions, driving continuous optimization of models and agents with data, and efficiently aligning algorithm, engineering, and client teams to ship.",

  svc_title: "What I Do",
  svc1_t: "AI Product Design",
  svc1_d: "Build Agents and re-editing systems from 0 to 1, write detailed PRDs, and define business flows and core features.",
  svc2_t: "Dataset Building & Evaluation",
  svc2_d: "Accumulate high-quality multi-style SFT data, build evaluation systems, run bad-case attribution, and drive prompt iteration.",
  svc3_t: "Data-Driven Analysis",
  svc3_d: "Own data instrumentation and post-launch analysis, with deep reviews around retention, task performance, and ROI.",
  svc4_t: "AIGC Creative Work",
  svc4_d: "Prompt design, AI image-to-video, and visual creation — National First Prize in an AIGC creative competition.",

  skills_title: "Skills",
  sk1: "AI Product / Agent Design",
  sk2: "Prompt Engineering / AIGC",
  sk3: "Data Analysis / SQL",
  sk4: "Cross-team Collaboration",

  cert1: "<strong>Languages:</strong> CET-6 (516); Mandarin Level 2-A; basic Japanese",
  cert2: "<strong>Computer:</strong> Basic SQL; MS Office (PPT, Excel) certified",
  cert3: "<strong>AIGC:</strong> Prompt design, AI image-to-video, AI visual creation",

  resume_title: "Resume",
  edu_h: "Education",
  intern_h: "Internships",
  proj_h: "Projects & Competitions",

  edu1_t: "Hunan University (985 / Double First-Class) · M.A. in Journalism & Communication",
  edu1_d: "Core courses: Intelligent Communication, Data Mining & Analysis, New Media Studies, Audience Analysis, Digital A/V Production, etc.<br>Honors: First-Class Graduate Scholarship.",
  edu2_t: "Hunan University of Science and Technology · B.A. in Journalism (GPA 3.77/4.0, top 3%)",
  edu2_d: "Core courses: Communication Theory, Data Journalism Visualization, News Reporting & Writing, Commentary, Videography, Documentary Production, etc.<br>Honors: National Encouragement Scholarship, 3rd Prize in the Hunan Provincial Digital Creative Design Contest, First-Class Comprehensive Scholarship, Merit Student, and 30+ awards.",

  in1_t: "Baidu International Technology (Shenzhen) · AI Product Manager Intern",
  in1_d: "· <strong>SynClub (overseas social product) iteration:</strong> Built a comic Agent and re-editing system from 0 to 1 to fix inconsistent comic generation; configured custom-style prompts and accumulated high-quality multi-style SFT data, greatly improving instruction-following and re-editing accuracy; co-built the sub-product “manga” from 0 to 1, exploring OC character cards and comic-creation features.<br>· <strong>Data-driven optimization:</strong> Owned the UTS data-instrumentation doc and post-launch analysis, with deep reviews and attribution around retention, task performance, and ROI to drive interaction and prompt-strategy iteration.<br>· <strong>Cross-team coordination:</strong> Acted as the core product interface across algorithm, engineering, server, and client teams; drove local model deployment and server integration, connecting the path from algorithm debugging to launch.",
  in2_t: "Beijing Zhipu Huazhang Technology · AI Product Data Intern",
  in2_d: "· <strong>LLM instruction & dataset building:</strong> For mechanical language and chaotic shots in text-to-video and creative writing, built storyboard and multi-style creative prompt sets, introduced role-play mechanisms and dynamic scene-description norms, and accumulated large amounts of high-quality SFT and multimodal alignment data.<br>· <strong>Evaluation system:</strong> Focused on dynamic video narrative and long-form generation, quantified core dimensions like inter-frame coherence and logical closure, ran deep bad-case attribution, and worked with the algorithm team to deliver dataset-side solutions.",
  in3_t: "Yueyang Evening News · Editorial Intern",
  in3_d: "Sourced topics in local culture / tourism and livelihood, producing 30+ original articles; reported on-site during the Dongting Lake dyke-breach emergency, relaying rescue updates promptly; coordinated with photography, new-media, and tourism / emergency departments on sourcing and fact-checking.",

  pj1_t: "“Mojing” AI Video-Script Generation Website · Indie Product Maker",
  pj1_date: "2026.01 — Present",
  pj1_d: "· <strong>Product definition & agile dev:</strong> Spotted creators' pain points in turning inspiration into structured storyboards; with zero coding background, used full-stack tools like Cursor, GitHub, and Supabase to own the full lifecycle from core logic to frontend launch and backend database management.<br>· <strong>Workflow & core features:</strong> Designed a standardized creation SOP, introduced an “emotion-curve visualization” panel for frame-level A/V tuning, and one-click export to Excel, PDF, lrc, and more.",
  pj2_t: "AI Design & AIGC Creative Competition · National First Prize",
  pj2_d: "“Journey of Lingyu”, an AI-generated sports-culture micro-animation · Core member. Owned content architecture, character-style consistency, and prompt iteration; used Jimeng, Hailuo, Kling, and LiblibAI for image-to-video and keyframe repair, building a reusable “AI generation + manual refinement” workflow.",
  pj3_t: "Tencent Future PM Bootcamp · Graduate",
  pj3_d: "Systematically studied quantitative / qualitative user research, feature-prioritization matrices, competitive analysis, PRD writing, and other core PM methods; completed 20+ sessions, passed the assessment, and earned the certificate.",

  pf_title: "Portfolio",
  f_all: "All",
  f_ai: "AI Product",
  f_aigc: "AIGC",
  f_method: "PM Method",
  f_select: "Filter",

  cov1: "Mojing",
  cov2: "SynClub",
  cov3: "Zhipu",
  cov4: "Journey of Lingyu",
  cov5: "Tencent Camp",

  pc1_t: "Mojing · AI Video-Script Website",
  pc1_c: "Click to try the product →",
  pc2_t: "SynClub Comic Agent & Re-editing System",
  pc2_c: "Baidu · AI PM Internship",
  pc3_t: "LLM Dataset & Evaluation System",
  pc3_c: "Zhipu AI · AI Product Data Internship",
  pc4_t: "“Journey of Lingyu” AI Sports-Culture Micro-Animation",
  pc4_c: "Scan to watch the AIGC video · National First Prize",
  pc5_t: "Tencent Future PM Bootcamp",
  pc5_c: "Systematic PM methodology · Graduate",

  contact_title: "Contact Me",
  form_title: "Looking forward to working with you",
  form_intro: "If you're looking for a product intern who loves AI and can drive products from 0 to 1 independently, feel free to reach out.",
  c_phone2: "Phone / WeChat",
  ph_name: "Your name",
  ph_email: "Your email",
  ph_msg: "What's on your mind…",
  send_btn: "Send Message",

  qr_title: "“Journey of Lingyu” AIGC Video",
  qr_tip: "Scan the QR code with your phone to watch the full AIGC video"
};

(function () {
  const STORAGE_KEY = "site-lang";
  const toggleBtn = document.querySelector("[data-lang-toggle]");

  // 捕获页面原始中文
  const zhText = {};
  const zhPh = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!(key in zhText)) zhText[key] = el.innerHTML.trim();
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.dataset.i18nPh;
    if (!(key in zhPh)) zhPh[key] = el.getAttribute("placeholder");
  });

  function applyLang(lang) {
    const isEn = lang === "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = isEn ? EN[key] : zhText[key];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.dataset.i18nPh;
      const val = isEn ? EN[key] : zhPh[key];
      if (val != null) el.setAttribute("placeholder", val);
    });

    document.documentElement.lang = isEn ? "en" : "zh-CN";
    document.title = isEn ? "Wen Ming - AI Product Manager · Portfolio" : "文明 - AI产品经理 · 个人简历";
    if (toggleBtn) toggleBtn.textContent = isEn ? "中" : "EN";

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // 初始语言：读取上次选择
  let current = "zh";
  try { current = localStorage.getItem(STORAGE_KEY) || "zh"; } catch (e) {}
  if (current === "en") applyLang("en");
  else if (toggleBtn) toggleBtn.textContent = "EN";

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      current = current === "en" ? "zh" : "en";
      applyLang(current);
    });
  }
})();
