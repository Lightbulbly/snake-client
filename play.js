// const net = require("net");
const { connect } =  require("./client");

console.log("Connecting ...");
connect();


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();

// Connection information:
// IP: 165.227.47.243
// PORT: 50541
// The Zoom will be up until 19h EST, we will change it after to another link
