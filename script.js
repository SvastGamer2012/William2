// script.js - manejo de inicio y secciones (pegar al final del <body>)

document.addEventListener("DOMContentLoaded", () => {
  // Botones inicio
  const noBtn = document.getElementById("noBtn");
  const siBtn = document.getElementById("siBtn");
  const inicio = document.getElementById("inicio");
  const contenido = document.getElementById("contenido");

  if (noBtn) {
    noBtn.addEventListener("click", () => {
      noBtn.style.display = "none";
    });
  }

  if (siBtn) {
    siBtn.addEventListener("click", () => {
      if (inicio) inicio.classList.add("oculto");
      if (contenido) {
        contenido.classList.remove("oculto");
        // mostrar la primera sección por defecto (si quieres 'fotos')
        mostrarSeccion("fotos");
      }
    });
  }

  // Delegación de clicks para botones .tablink (por si no usan onclick en HTML)
  document.querySelectorAll(".tablink").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // por si el botón es <a> o tiene comportamiento por defecto
      const target = btn.getAttribute("data-target") || btn.getAttribute("onclick-target");
      // Si usas onclick="mostrarSeccion('id')" en HTML, el data-target no será necesario.
      // But prefer data-target in HTML: <button class="tablink" data-target="carta">Carta</button>
      if (target) mostrarSeccion(target);
      else {
        // si no hay data-target, intentar leer el onclick inline (compatibilidad)
        const onclick = btn.getAttribute("onclick");
        if (onclick) {
          // extraer el id entre comillas de mostrarSeccion('id')
          const m = onclick.match(/mostrarSeccion\(['"](.+?)['"]\)/);
          if (m) mostrarSeccion(m[1]);
        }
      }
    });
  });
});

// función robusta para mostrar secciones
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  // Oculta todas
  secciones.forEach(s => {
    s.classList.remove("activo");
    s.classList.add("oculto");
  });

  const activa = document.getElementById(id);
  if (!activa) {
    console.warn("mostrarSeccion: no existe el id ->", id);
    return;
  }

  // Muestra la sección solicitada
  activa.classList.remove("oculto");
  activa.classList.add("activo");

  // opcion: si tienes elementos dentro que deben iniciarse al mostrarse,
  // aquí podrías llamar a funciones como iniciarQuiz() si id === 'quiz'

  // Llevar la vista al inicio de la sección (mejora UX)
  window.scrollTo({ top: 0, behavior: "smooth" });
}
