export const initializeDatabase = function () {
  return new Promise((resolve) => {
    setTimeout(function(){
      console.log("Initialize City Database");
      resolve();
    }, 1000);
  })
};

export const clearDatabase = function () {
  return new Promise((resolve) => {
    setTimeout(function(){
      console.log("Clear City Database");
      resolve();
    }, 1000);
  })
};

export const isIt = function(city) {
  return city === "Vienna";
}



