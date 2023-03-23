const animalList = ['bear', 'tiger'];

window.addEventListener('keydown', (e) => {
  console.log(e.key);
  console.log(e.keyCode);
  console.log(e.code);

  const key = document.querySelector(`.key[data-key="${e.key}"]`);
});
