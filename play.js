const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Connected!");
  });

  conn.on("data", data => {
    console.log(data); // console log data for player
  });

  return conn;
};

console.log("Connecting ...");
connect();



// Connection information:
// IP: 165.227.47.243
// PORT: 50541
// The Zoom will be up until 19h EST, we will change it after to another link
