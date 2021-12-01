const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server!");
  });

  conn.on('connect', () => {
    conn.write("Name: NNO");
    // Send the string "Move: up" as data to the server via the conn object.
    
    
    // let moveUp = setInterval(()=>{
    //   conn.write("Move: up");
    // }, 500);

    // setTimeout(()=>{
    //   clearInterval(moveUp);
    //   let moveRight = setInterval(()=>{
    //     conn.write("Move: right");
    //   },500);
    // }, 5000);



    // setInterval(()=>{
    //   conn.write("Move: right");
    // }, 200);
    // setInterval(()=>{
    //   conn.write("Move: down");
    // }, 800);
    // setInterval(()=>{
    //   conn.write("Move: left");
    // }, 1600);

  });

  


  conn.on("data", data => {
    console.log(data); // console log data for player
  });

  return conn;
};

module.exports = {
  connect
};