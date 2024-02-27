let unit = 'inches';
let radius = prompt('Enter a radius in ' + unit);
let circleArea = Math.PI * radius * radius;

let userRoundPreference = prompt('Would you like to round? (Yes/No)');

if (
  userRoundPreference === 'yes' ||
  userRoundPreference === 'Yes' ||
  userRoundPreference === 'Y' ||
  userRoundPreference === 'y'
) {
  circleArea = circleArea.toFixed();
}

alert('This area in ' + unit + ' is ' + circleArea + '.');
