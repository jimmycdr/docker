// Persistencia del tema en localStorage
(function () {
  const root = document.documentElement;
  const key = "cv-theme";
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Cargar tema inicial
  const saved = localStorage.getItem(key);
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  } else {
    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }

  // Toggle
  const btn = document.getElementById("themeToggle");
  const syncAria = () => {
    const isDark = root.getAttribute("data-theme") === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.textContent = isDark ? "🌗 Tema" : "🌞 Tema";
  };
  syncAria();

  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(key, next);
    syncAria();
  });

  // Descargar PDF (usa diálogo de imprimir → “Guardar como PDF”)
  const printBtn = document.getElementById("printBtn");
  printBtn.addEventListener("click", () => {
    // Forzamos tema claro para impresión si estás en oscuro
    const current = root.getAttribute("data-theme");
    root.setAttribute("data-theme", "light");
    window.print();
    // Restaurar tema tras impresión (al terminar el frame)
    setTimeout(() => root.setAttribute("data-theme", current), 0);
  });
})();
