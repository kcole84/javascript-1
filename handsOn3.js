function getDepth() {
  return parseFloat('Please enter the house depth: ');
}

function getDepth() {
  return parseFloat(prompt('Please enter the house width: '));
}
function getDepth() {
  return parseFloat(prompt('Please enter the house height: '));
}

function getSweep() {
  return parseFloat(prompt('Please enter the house depth: '));
}

function houseVolume(width, depth, height, sweep) {
  return livingVolume() + roofVolume();
}

function livingVolume(width, depth, height) {
  return width * depth * height;
}
function roofVolume(width, depth, sweep) {
  let triangle = triangleArea(width, sweep, sweep);
  return triangle * depth;
}

function triangleArea(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

let houseDepth = getDepth();
let houseWidth = getDepth();
let houseHeight = getDepth();
let houseSweep = getDepth();

houseVolume(houseDepth, houseWidth, houseHeight, HouseSweep);
