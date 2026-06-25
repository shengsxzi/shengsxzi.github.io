function text(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value || "";
}

function makeLink(url, label, className) {
  const a = document.createElement("a");
  a.href = url || "#";
  a.textContent = label;
  if (className) a.className = className;
  if (url && /^https?:\/\//.test(url)) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  return a;
}

function renderParagraphs(items, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = "";
  items.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item;
    target.appendChild(p);
  });
}

function renderNav(items, activePage) {
  const nav = document.getElementById("topnav");
  nav.innerHTML = "";
  items.forEach((item) => {
    const a = makeLink(item.href, item.label);
    const hrefPage = item.href.replace("./", "").replace(".html", "");
    if (hrefPage === activePage || (activePage === "home" && hrefPage === "index")) {
      a.setAttribute("aria-current", "page");
    }
    nav.appendChild(a);
  });
}

function renderProfile(data) {
  text("site-name", data.name);
  text("person-name", data.name);
  text("person-chinese-name", data.chineseName);
  text("person-role", data.role);
  text("person-org", data.organization);
  text("person-location", data.location);
  text("footer-name", data.name);

  const photo = document.getElementById("profile-photo");
  if (photo) {
    photo.src = data.photo;
    photo.alt = `${data.name} portrait`;
  }

  const links = document.getElementById("profile-links");
  if (links) {
    links.innerHTML = "";
    data.links.forEach((item) => links.appendChild(makeLink(item.url, item.label)));
  }
}

function makeProjectArticle(item) {
  const article = document.createElement("article");
  article.className = "project-item";
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  h3.textContent = item.title;
  if (item.coauthors) {
    const em = document.createElement("em");
    em.textContent = `, ${item.coauthors}`;
    h3.appendChild(em);
  }
  p.textContent = item.description;
  article.append(h3, p);
  if (item.preprintUrl) {
    article.appendChild(makeLink(item.preprintUrl, "Preprint", "project-link"));
  }
  return article;
}

function renderResearchSections(sections, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = "";
  sections.forEach((section) => {
    const sectionNode = document.createElement("section");
    sectionNode.className = "research-group";
    const heading = document.createElement("h2");
    const list = document.createElement("div");
    list.className = "project-list";
    heading.textContent = section.heading;
    sectionNode.append(heading, list);
    target.appendChild(sectionNode);
    section.projects.forEach((item) => list.appendChild(makeProjectArticle(item)));
  });
}

function renderSimpleList(items, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function renderHome(data) {
  renderParagraphs(data.home.intro, "home-intro");
  text("home-research-interests", data.home.researchInterests);
  renderSimpleList(data.home.education, "home-education");
}

function renderResearchPage(data) {
  renderResearchSections(data.research.sections, "research-projects");
}

function renderCvPage(data) {
  const link = document.getElementById("cv-download");
  if (link) link.href = data.cv.url;
}

function initSite() {
  if (!window.siteData) return;
  const page = document.body.dataset.page || "home";
  renderProfile(siteData.profile);
  renderNav(siteData.nav, page);
  text("year", String(new Date().getFullYear()));

  if (page === "home") renderHome(siteData);
  if (page === "research") renderResearchPage(siteData);
  if (page === "cv") renderCvPage(siteData);
}

initSite();
