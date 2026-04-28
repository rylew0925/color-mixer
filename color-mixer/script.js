const c1 = document.getElementById('color1');
const c2 = document.getElementById('color2');

function updateBackground() {
  document.body.style.background = `linear-gradient(90deg, ${c1.value}, ${c2.value})`;
}

c1.addEventListener('input', updateBackground);
c2.addEventListener('input', updateBackground);

updateBackground();