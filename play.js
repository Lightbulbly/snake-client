// const net = require("net");
const { connect } =  require("./client");
const { setupInput } =  require("./input");

console.log("Connecting ...");
connect();




setupInput(connect());

// Connection information:
// IP: 165.227.47.243
// PORT: 50541
// The Zoom will be up until 19h EST, we will change it after to another link
