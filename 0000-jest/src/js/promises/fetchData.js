export const res = function () {
  return new Promise((resolve, reject) => {
    console.log('Ready....go!');
    setTimeout(function(){
      console.log("Time's up -- stop!");
      resolve("peanut butter");
    }, 1000);
  })
};

export const rej = function () {
  return new Promise((resolve, reject) => {
    console.log('Ready....go!');
    setTimeout(function(){
      console.log("Time's up -- stop!");
      reject("error");
    }, 1000);
  })
};



