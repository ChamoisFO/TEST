// Curseur papillon qui suit la souris
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

// Animation bouton au clic
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  btn.textContent = "🦋 Bravo ! 🦋";
  btn.style.background = "#7873f5";
});
