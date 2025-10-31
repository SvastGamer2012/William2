const preguntas = [
  { pregunta: "¿Qué día nos conocimos?", opciones: ["8 octubre", "4 octubre", "2 octubre"], correcta: 0 },
  { pregunta: "¿Cuál es mi color favorito?", opciones: ["Negro", "Rosa", "Gris"], correcta: 1 },
  { pregunta: "¿Qué día nos hicimos novios?", opciones: ["28 octubre", "8 octubre", "21 octubre"], correcta: 2 },
  { pregunta: "¿Con qué apodo me llamas más?", opciones: ["Halconcito", "brr brr patapim (XD)", "Puto:/"], correcta: 0 },
  { pregunta: "¿Cómo nos conocimos?", opciones: ["Afganistán", "Facebook", "TikTok"], correcta: 2 },
  { pregunta: "¿Qué me gusta más de ti?", opciones: ["Tus ojitos", "Todo", "Nada:/"], correcta: 1 },
  { pregunta: "¿Qué animales seríamos?", opciones: ["Gatitos", "Pejelagartos", "Ninguno:/"], correcta: 0 },
  { pregunta: "¿Qué personaje nos identifica?", opciones: ["Deadpool y Spiderman", "Los dos", "Cirrus y Skylar"], correcta: 1 },
  { pregunta: "¿Qué parte del día hablamos más?", opciones: ["Nunca hablamos:/", "Tarde", "Noche"], correcta: 2 },
  { pregunta: "¿Mi brainrot favorito:/?", opciones: ["Tung tung sahur", "Tralalero tralala", "Brr brr patapim"], correcta: 2 },
  { pregunta: "¿De dónde soy?", opciones: ["Afganistán (es posible)", "Colombia", "Saturno"], correcta: 1 },
  { pregunta: "¿Qué edad tengo?", opciones: ["14", "13", "15"], correcta: 0 },
  { pregunta: "¿Cuándo cumplo años?", opciones: ["31 de junio", "12 de junio", "32 de febrero"], correcta: 1 },
  { pregunta: "¿Qué apodo utilizo más contigo?", opciones: ["Perro hijueputa", "Puto", "Gatito >w<"], correcta: 2 },
  { pregunta: "¿Qué me enamoró más de ti?", opciones: ["Tu personalidad", "Tus muslos", "Nada"], correcta: 0 },
  { pregunta: "¿Qué emoción me representa más?", opciones: ["Lujuria", "Tristeza", "Nerviosismo"], correcta: 2 },
  { pregunta: "¿Qué eres?", opciones: ["Omega", "Un Omega", "MI omega (OMEGA MIO)"], correcta: 2 }
];

let indice = 0;
let puntuacion = 0;

function mostrarPregunta() {
  const p = preguntas[indice];
  const preguntaDiv = document.getElementById("pregunta");
  const opcionesDiv = document.getElementById("opciones");
  const siguienteBtn = document.getElementById("siguiente");

  preguntaDiv.textContent = p.pregunta;
  opcionesDiv.innerHTML = "";
  siguienteBtn.style.display = "none"; // Oculta el botón hasta responder

  p.opciones.forEach((opcion, i) => {
    const boton = document.createElement("button");
    boton.textContent = opcion;
    boton.className = "opcionBtn";
    boton.onclick = () => seleccionarOpcion(i, boton);
    opcionesDiv.appendChild(boton);
  });
}

function seleccionarOpcion(i, botonSeleccionado) {
  const p = preguntas[indice];
  const opcionesBtns = document.querySelectorAll(".opcionBtn");
  const siguienteBtn = document.getElementById("siguiente");

  // Desactiva los botones para no cambiar la respuesta
  opcionesBtns.forEach(btn => (btn.disabled = true));

  // Marca correcta o incorrecta visualmente
  if (i === p.correcta) {
    botonSeleccionado.style.backgroundColor = "#4CAF50"; // Verde si acierta
    puntuacion++;
  } else {
    botonSeleccionado.style.backgroundColor = "#ff4c4c"; // Rojo si falla
    opcionesBtns[p.correcta].style.backgroundColor = "#4CAF50"; // Marca la correcta
  }

  siguienteBtn.style.display = "inline-block"; // Muestra el botón “Siguiente”
}

function siguientePregunta() {
  indice++;
  if (indice < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("pregunta").style.display = "none";
  document.getElementById("opciones").style.display = "none";
  document.getElementById("siguiente").style.display = "none";
  document.getElementById("resultado").classList.remove("oculto");

  const nota = Math.round((puntuacion / preguntas.length) * 10);
  let mensaje = "";

  if (nota === 10) mensaje = "Excelente, eres 10//10 de autista uwu (mandame captura)";
  else if (nota >= 7) mensaje = "Eres una vaca saturnita (mandame captura";
  else mensaje = "SOS UN HIJUEPUTA ESTÚPIDO (mandame captura";

  document.getElementById("notaFinal").textContent = `Sacaste ${nota}/10 en tu examen de autista ${mensaje}`;
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPregunta();
  document.getElementById("siguiente").addEventListener("click", siguientePregunta);
});
