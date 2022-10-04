window.onload = () => {
  main();
};
function main() {
  let btn = document.getElementById('changeBtn');
  let copyClick = document.getElementById('copyClick');
  let body = document.body;
  let output = document.getElementById('output');
  btn.addEventListener('click', function () {
    let bgColor = generateHex();
    body.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
  output.addEventListener('keyup', function (e) {
    let color = e.target.value;
    if (color && isValidHex(color)) {
      body.style.backgroundColor = color;
    }
  });
  copyClick.addEventListener('click', function () {
    output = output;
    output.select();
    output.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(output.value);
    if (isValidHex(output.value)) {
      alert(output.value + ' Copied');
    } else {
      alert('Invalid Color Code!');
    }
  });
}
function copyClickText() {}
function isValidHex(color) {
  if (color.length !== 7) return false;
  if (color[0] !== '#') return false;
  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

function generateHex() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
