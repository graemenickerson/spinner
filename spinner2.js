// spinner2.js
// Graeme Nickerson
// September 24, 2019

const spinArr = ['|', '/', '-', '\\','|', '/', '-', '\\', '|'];

const spinner = function(arr, delay) {
  if (arr[0]) {
    setTimeout(() => {
      process.stdout.write(`\r${arr[0]}   `);
      spinner(arr.slice(1), delay);
    }, 100 + delay);
  } else {
    process.stdout.write('\n');
  }
};

spinner(spinArr, 200);