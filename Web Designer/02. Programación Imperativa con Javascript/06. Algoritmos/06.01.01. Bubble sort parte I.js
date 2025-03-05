let array = [5, 4, 1, 6, 3, 2];

// De menor a mayor
for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}

console.log(array);

// De mayor a menor
for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}

console.log(array);
