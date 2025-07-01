const btn = document.getElementById('change-btn');
btn.addEventListener('click', () => {
  const rand = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${rand}`;
});
