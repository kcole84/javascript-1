function changeColor() {
  let colors = [
    '#ff4000',
    '#ff8000',
    '#ffff00',
    '#bfff00',
    '#80ff00',
    '#40ff00',
    '#00ff00',
    '#00ff40',
    '#00ff80',
    '#00ffbf',
    '#00ffff',
    '#00bfff',
    '#0080ff',
    '#0040ff',
    '#0000ff',
    '#4000ff',
    '#8000ff',
  ];

  let random = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[random];
}
