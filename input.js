// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;

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
  if (key === '\u0077') { //w
    // conn.write("Move: up");
    // console.log("w is pressed for up");
    connection.write("Move: up");
  }
  if (key === '\u0073') { //s
    // conn.write("Move: up");
    // console.log("s is pressed for down");
    connection.write("Move: down");

  }
  if (key === '\u0061') { //a
    // conn.write("Move: up");
    // console.log("a is pressed for left");
    connection.write("Move: left");

  }
  if (key === '\u0064') { //d
    // conn.write("Move: up");
    console.log("d is pressed for right");
    connection.write("Move: right");

  }
  if (key === '\u0064') { //d
    // conn.write("Move: up");
    console.log("d is pressed for right");
    connection.write("Move: right");

  }
  if (key === '\u0071') { //q
    // conn.write("Move: up");
    console.log("q is pressed for taunting");
    // "Say: _____"
    connection.write("Say: I'M FINALLY MOVING!!!");


  }
  if (key === '\u0065') { //e
    // conn.write("Move: up");
    connection.write("Say: WEEEEEEEEEEEEEE!!!");
    // "Say: _____"

  }
};



module.exports = { setupInput, handleUserInput};