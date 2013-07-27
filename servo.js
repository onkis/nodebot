var five = require("johnny-five"),
    board, servo1, servo2;

board = new five.Board();

board.on("ready", function() {

  // Create a new `servo` hardware instance.
  servo1 = new five.Servo({
    pin: 11,
    // `type` defaults to standard servo.
    // For continuous rotation servos, override the default
    // by setting the `type` here
    type: "continuous"
  });

  servo2 = new five.Servo({
    pin: 10,
    type: "continuous"
  });

  // Inject the `servo` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    servo1: servo1,
    servo2: servo2,
    allStop: allStop,
    moveForward: moveForward,
    moveBackward: moveForward,
    turnLeft: turnLeft,
    turnRight: turnRight
  });


});

function moveForward(){
  servo1.move(120);
  servo2.move(0);
}

function moveBackward(){
  servo1.move(120);
  servo2.move(0);
}


function turnLeft(){
  servo1.move(120);
  servo2.move(120);
}

function turnRight(){
  servo1.move(0);
  servo2.move(0);
}

function allStop(){
  servo1.move(94);
  servo2.move(94);
}

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs');

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.on('command', function (data) {
    console.log("command from client " +data);
    if(data === 'forward') moveForward();
    else if( data === 'stop') allStop();
    else if(data === 'left') turnLeft();
    else if(data === 'right') turnRight();
  });
});





process.on('exit', function() {
  console.log('stopping')
  allStop();
})