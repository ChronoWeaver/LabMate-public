(function () {
  var STORAGE_KEY = "wetlabpro_lang";
  var DEFAULT_LANG = "zh";

  function getPreferredLang() {
    var url = new URL(window.location.href);
    var urlLang = url.searchParams.get("lang");
    if (urlLang === "zh" || urlLang === "en") {
      return urlLang;
    }

    var stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "zh" || stored === "en") {
      return stored;
    }

    return DEFAULT_LANG;
  }

  function updateDocumentMeta(lang) {
    var body = document.body;
    var title = body.getAttribute("data-title-" + lang);
    var description = body.getAttribute("data-description-" + lang);
    var htmlLang = lang === "en" ? "en" : "zh-CN";
    var meta = document.querySelector('meta[name="description"]');

    document.documentElement.setAttribute("lang", htmlLang);

    if (title) {
      document.title = title;
    }

    if (meta && description) {
      meta.setAttribute("content", description);
    }
  }

  function setLanguage(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
    updateDocumentMeta(lang);

    document.querySelectorAll("[data-lang-button]").forEach(function (button) {
      var active = button.getAttribute("data-lang-button") === lang;
      button.setAttribute("aria-pressed", active ? "true" : "false");
      button.classList.toggle("active", active);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-lang-button]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang-button"));
      });
    });

    setLanguage(getPreferredLang());
  });
})();
