
function openSurprise() {
  const message = document.getElementById("surpriseMessage");
  const button = document.getElementById("surpriseButton");

  message.classList.toggle("show");

  if (message.classList.contains("show")) {
    button.textContent = "Close your surprise ♡";
    createHearts();
  } else {
    button.textContent = "Open your surprise ♡";
  }
}

function createHearts() {
  const holder = document.getElementById("hearts");
  if (!holder) return;

  for (let i = 0; i < 22; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (16 + Math.random() * 18) + "px";
    heart.style.animationDelay = Math.random() * 1.5 + "s";

    holder.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}
