// 💞 Corazones flotando con movimiento natural
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerText = "❤";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = 15 + Math.random() * 25 + "px";
  heart.style.color = "#ff5c8d";
  heart.style.opacity = 0.6 + Math.random() * 0.4;
  heart.style.pointerEvents = "none";
  heart.style.filter = "blur(" + (Math.random() * 1.5) + "px)";
  document.body.appendChild(heart);

  // Variables naturales (velocidad, dirección, oscilación)
  const duracion = 6000 + Math.random() * 4000; // duración total
  const inicioX = parseFloat(heart.style.left);
  const desplazamientoX = (Math.random() - 0.5) * 30; // movimiento lateral
  const rotacion = Math.random() * 360;
  const startTime = Date.now();

  function animar() {
    const t = (Date.now() - startTime) / duracion;
    if (t > 1) {
      heart.remove();
      return;
    }

    // Movimiento suave: sube y oscila a los lados
    const y = 100 - t * 120; // sube de 100vh a -20vh
    const x = inicioX + Math.sin(t * Math.PI * 2) * desplazamientoX;
    const scale = 1 + 0.2 * Math.sin(t * Math.PI);
    const opacity = 1 - t;

    heart.style.left = x + "vw";
    heart.style.top = y + "vh";
    heart.style.transform = `rotate(${rotacion + t * 180}deg) scale(${scale})`;
    heart.style.opacity = opacity;

    requestAnimationFrame(animar);
  }

  animar();
}, 350);
