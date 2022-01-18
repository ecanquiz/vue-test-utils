export default function () {
  return new Promise((resolve, reject) => {
    console.log('Ready....go!');
    setTimeout(function(){
      console.log("Time's up -- stop!");
      reject("error");
    }, 1000);
  })
};

