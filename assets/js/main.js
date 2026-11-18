(function () {
  "use strict";

  var grid = document.getElementById("grid");
  var chips = document.querySelectorAll(".chip");
  var projects = window.PROJECTS || [];
  var uid = 0;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function buildCard(p) {
    var id = "p" + ++uid;
    var card = el("article", "card");
    card.dataset.kind = p.kind;

    var img = el("img", "card__img");
    img.src = p.img;
    img.alt = p.alt || "";
    img.loading = "lazy";
    img.width = 900;
    img.height = 1125;
    card.appendChild(img);
    card.appendChild(el("div", "card__shade"));

    if (p.org) card.appendChild(el("span", "badge", p.org));

    var sheet = el("div", "sheet");

    var head = el("button", "sheet__head");
    head.type = "button";
    head.setAttribute("aria-expanded", "false");
    head.setAttribute("aria-controls", id);
    head.appendChild(el("span", "grip"));
    var row = el("span", "sheet__row");
    row.appendChild(el("h3", "", p.title));
    var chev = el("span", "chev");
    chev.setAttribute("aria-hidden", "true");
    row.appendChild(chev);
    head.appendChild(row);
    sheet.appendChild(head);

    var body = el("div", "sheet__body");
    body.id = id;
    var inner = el("div", "sheet__inner");
    inner.appendChild(el("p", "desc", p.desc));
    var tags = el("ul", "tags");
    p.tags.forEach(function (t) { tags.appendChild(el("li", "", t)); });
    inner.appendChild(tags);
    if (p.links && p.links.length) {
      var links = el("div", "links");
      p.links.forEach(function (l) {
        var a = el("a", "link", l.label + " ↗");
        a.href = l.url;
        a.target = "_blank";
        a.rel = "noopener";
        links.appendChild(a);
      });
      inner.appendChild(links);
    }
    body.appendChild(inner);
    body.setAttribute("inert", "");
    sheet.appendChild(body);
    card.appendChild(sheet);

    bindSheet(card, head, body);
    return card;
  }

  function setOpen(card, head, body, open) {
    card.classList.toggle("is-open", open);
    head.setAttribute("aria-expanded", String(open));
    if (open) body.removeAttribute("inert"); else body.setAttribute("inert", "");
  }

  function closeAll(except) {
    grid.querySelectorAll(".card.is-open").forEach(function (c) {
      if (c === except) return;
      setOpen(c, c.querySelector(".sheet__head"), c.querySelector(".sheet__body"), false);
    });
  }

  function bindSheet(card, head, body) {
    var startY = null, swiped = false;

    head.addEventListener("click", function () {
      if (swiped) { swiped = false; return; }
      var open = !card.classList.contains("is-open");
      if (open) closeAll(card);
      setOpen(card, head, body, open);
    });

    // gesto de deslizar (celular): para cima abre, para baixo fecha
    head.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse") return;
      startY = e.clientY; swiped = false;
    });
    head.addEventListener("pointermove", function (e) {
      if (startY === null) return;
      var dy = e.clientY - startY;
      if (Math.abs(dy) < 28) return;
      var open = dy < 0;
      if (open) closeAll(card);
      setOpen(card, head, body, open);
      swiped = true; startY = null;
    });
    ["pointerup", "pointercancel"].forEach(function (ev) {
      head.addEventListener(ev, function () { startY = null; });
    });
  }

  function render(filter) {
    grid.innerHTML = "";
    projects
      .filter(function (p) { return filter === "all" || p.kind === filter; })
      .forEach(function (p) { grid.appendChild(buildCard(p)); });
  }

  chips.forEach(function (chip) {
    var f = chip.dataset.filter;
    var n = projects.filter(function (p) { return f === "all" || p.kind === f; }).length;
    chip.querySelector("b").textContent = n;
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      render(f);
    });
  });

  render("all");

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll();
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".card")) closeAll();
  });

  // menu mobile
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("menu");
  function toggleMenu(open) {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    menu.classList.toggle("is-open", open);
  }
  burger.addEventListener("click", function () {
    toggleMenu(burger.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") toggleMenu(false);
  });

  // cabeçalho com borda ao rolar
  var header = document.querySelector(".header");
  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.getElementById("ano").textContent = new Date().getFullYear();

  // formulário de contato (envio por e-mail via FormSubmit; plano B: abre o app de e-mail)
  var form = document.getElementById("form");
  var status = document.getElementById("status");
  var EMAIL = "pammellaxisto@gmail.com";

  function setStatus(msg, type) {
    status.textContent = msg;
    status.className = "form__status" + (type ? " is-" + type : "");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value,
      message: form.message.value.trim()
    };
    if (form._honey.value) return; // anti-spam
    if (!data.name || !/^\S+@\S+\.\S+$/.test(data.email) || data.message.length < 10) {
      setStatus("Preencha nome, um e-mail válido e uma mensagem com pelo menos 10 caracteres.", "error");
      (!data.name ? form.name : !/^\S+@\S+\.\S+$/.test(data.email) ? form.email : form.message).focus();
      return;
    }
    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    setStatus("Enviando…", "");

    fetch("https://formsubmit.co/ajax/" + EMAIL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        name: data.name, email: data.email, subject: data.subject, message: data.message,
        _subject: "Contato pelo portfólio: " + data.subject,
        _replyto: data.email, _template: "table", _captcha: "false"
      })
    })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || j.success === "false") throw new Error(); }); })
      .then(function () {
        form.reset();
        setStatus("Mensagem enviada! Respondo em breve.", "ok");
      })
      .catch(function () {
        var href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(data.subject) +
          "&body=" + encodeURIComponent(data.message + "\n\n" + data.name + " — " + data.email);
        status.className = "form__status is-error";
        status.innerHTML = "";
        status.appendChild(document.createTextNode("Não consegui enviar agora. "));
        var a = document.createElement("a");
        a.href = href; a.textContent = "Abrir no meu app de e-mail";
        status.appendChild(a);
      })
      .then(function () { btn.disabled = false; });
  });
})();
