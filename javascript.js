const startGame = (function() {
  const game = document.querySelector('.game');
  const intro = document.querySelector('.intro');
  const startBtn = document.getElementById('start');
  startBtn.addEventListener('click', () => {
    game.classList.add('active');
    intro.classList.add('hide');
    console.log('working');
  })
})();