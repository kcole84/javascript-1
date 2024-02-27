let colors = ['green', 'blue', 'red', 'yellow', 'purple'];
let sports = ['baseball', 'basketball', 'football'];

let person = { name: 'Keva', age: 35 };

function displayArray(array) {
  for (let item of array) {
    console.log(item);
  }
}

displayArray(colors);
displayArray(sports);
