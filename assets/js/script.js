'use strict';

const toggle = (el) => el.classList.toggle("active");

// sidebar (mobile)
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => toggle(sidebar));

// custom select (mobile filter)
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) select.addEventListener("click", function () { toggle(this); });

const filterItems = document.querySelectorAll("[data-filter-item]");

// 用稳定 key（all/ai/aigc/method）筛选，与显示语言无关
const filterFunc = function (key) {
  for (let i = 0; i < filterItems.length; i++) {
    if (key === "all" || key === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    selectValue.innerText = this.innerText;
    toggle(select);
    filterFunc(this.dataset.selectItem);
  });
}

let lastClickedBtn = filterBtn[0];
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(this.dataset.filterBtn);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// light / dark theme toggle
const themeToggle = document.querySelector("[data-theme-toggle]");
const THEME_KEY = "site-theme";

function applyTheme(theme) {
  const isLight = theme === "light";
  if (isLight) document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
  if (themeToggle) {
    const icon = themeToggle.querySelector("ion-icon");
    if (icon) icon.setAttribute("name", isLight ? "moon-outline" : "sunny-outline");
  }
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
}

let currentTheme = "light";
try { currentTheme = localStorage.getItem(THEME_KEY) || "light"; } catch (e) {}
applyTheme(currentTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    applyTheme(currentTheme);
  });
}

// contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// QR code modal
const qrModal = document.querySelector("[data-qr-modal]");
const qrTriggers = document.querySelectorAll("[data-qr-trigger]");
const qrClosers = document.querySelectorAll("[data-qr-close]");

for (let i = 0; i < qrTriggers.length; i++) {
  qrTriggers[i].addEventListener("click", function (e) {
    e.preventDefault();
    qrModal.classList.add("active");
  });
}
for (let i = 0; i < qrClosers.length; i++) {
  qrClosers[i].addEventListener("click", () => qrModal.classList.remove("active"));
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && qrModal) qrModal.classList.remove("active");
});

// page navigation —— 用 data-nav-link 的稳定 key 匹配 data-page，与显示语言无关
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const target = this.dataset.navLink;
    for (let j = 0; j < pages.length; j++) {
      if (target === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }
    for (let k = 0; k < navigationLinks.length; k++) {
      navigationLinks[k].classList.remove("active");
    }
    this.classList.add("active");
  });
}
