// Load sections vào main
const loadSection = (id, path) => {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
};

loadSection("header", "sections/header.html");
loadSection("services", "sections/services.html");
loadSection("contact", "sections/contact.html");
loadSection("footer", "sections/footer.html");



// Theme toggle (Day/Night)
const body = document.body;
let isDay = true;

function toggleTheme() {
  isDay = !isDay;
  body.classList.toggle('theme-night');
  body.classList.toggle('theme-day');

  const icon = document.querySelector('#theme-icon');
  if (isDay) {
    icon.src = 'assets/images/sun_icon.png';
  } else {
    icon.src = 'assets/images/moon_icon.png';
  }
}

// Pixel fireworks when clicking any button
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    launchFirework(e.pageX, e.pageY);
    showPopup();
  }
});

// Pixel rain effect
function createPixelRain() {
  const count = 100;
  for (let i = 0; i < count; i++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel-drop';
    pixel.style.left = `${Math.random() * 100}vw`;
    pixel.style.animationDelay = `${Math.random() * 5}s`;
    document.body.appendChild(pixel);
  }
}

// Firework explosion
function launchFirework(x, y) {
  const firework = document.createElement('div');
  firework.className = 'pixel-firework';
  firework.style.left = `${x}px`;
  firework.style.top = `${y}px`;
  document.body.appendChild(firework);

  setTimeout(() => firework.remove(), 1000);
}

// Retro-style popup (like Mario)
function showPopup() {
  const popup = document.createElement('div');
  popup.className = 'retro-popup';
  popup.innerText = '🎉 Thành công!';
  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 2000);
}

window.onload = () => {
  createPixelRain();
};


// ------------------------
// Toggle Day/Night Theme
// ------------------------
const toggleBtn = document.getElementById('toggleThemeBtn');

function isNightMode() {
  return document.body.classList.contains('dark-theme');
}

function setTheme(night = true) {
  if (night) {
    document.body.classList.add('dark-theme');
    toggleBtn.textContent = '🌞 Chuyển sang Day Mode';
  } else {
    document.body.classList.remove('dark-theme');
    toggleBtn.textContent = '🌙 Chuyển sang Night Mode';
  }
}

toggleBtn?.addEventListener('click', () => {
  setTheme(!isNightMode());
});

// Set mặc định là Day mode
setTheme(false);

// ------------------------
// Retro Popup Alert
// ------------------------
function showRetroAlert(message) {
  const popup = document.createElement('div');
  popup.textContent = message;
  popup.style.position = 'fixed';
  popup.style.top = '20%';
  popup.style.left = '50%';
  popup.style.transform = 'translateX(-50%)';
  popup.style.background = '#fbd65c';
  popup.style.border = '4px solid #f0b000';
  popup.style.color = '#000';
  popup.style.fontFamily = 'monospace';
  popup.style.padding = '20px';
  popup.style.zIndex = 1000;
  popup.style.boxShadow = '6px 6px 0 #000';
  popup.style.animation = 'shake 0.2s infinite alternate';

  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}

// Gợi ý: Dùng thử
// showRetroAlert("Chào mừng bạn đến với thế giới pixel!");


// ------------------------
// Optional: Pixel Fireworks on Click
// ------------------------
document.addEventListener('click', (e) => {
  const spark = document.createElement('div');
  spark.className = 'spark';
  spark.style.position = 'absolute';
  spark.style.left = `${e.pageX}px`;
  spark.style.top = `${e.pageY}px`;
  spark.style.width = '10px';
  spark.style.height = '10px';
  spark.style.background = '#ff0';
  spark.style.borderRadius = '50%';
  spark.style.pointerEvents = 'none';
  spark.style.animation = 'boom 0.5s ease-out forwards';
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 500);
});
