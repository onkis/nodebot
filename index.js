var five = require("johnny-five"),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board();

board.on("ready", function() {

  // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms
  (new five.Led(1)).on();

});

// var five = require("johnny-five"),
//     board, motor, led;

// board = new five.Board();

// board.on("ready", function() {
//   // Create a new `motor` hardware instance.
//   motor = new five.Motor({
//     pin: 1
//   });

//   // Inject the `motor` hardware into
//   // the Repl instance's context;
//   // allows direct command line access
//   board.repl.inject({
//     motor: motor
//   });

//   // Motor Event API

//   // "start" events fire when the motor is started.
//   motor.on("start", function( err, timestamp ) {
//     console.log( "start", timestamp );

//     // Demonstrate motor stop in 2 seconds
//     // board.wait( 2000, function() {
//     //   motor.stop();
//     // });
//   });

//   // "stop" events fire when the motor is started.
//   motor.on("stop", function( err, timestamp ) {
//     console.log( "stop", timestamp );
//   });

//   // Motor API

//   // start()
//   // Start the motor. `isOn` property set to |true|
//   motor.start();

//   // stop()
//   // Stop the motor. `isOn` property set to |false|
// });






// // var five = require("johnny-five"),
// //     board, servo;

// // board = new five.Board();

// // board.on("ready", function() {

// //   // Create a new `servo` hardware instance.
// //   servo = new five.Servo(5);

// //   // Inject the `servo` hardware into
// //   // the Repl instance's context;
// //   // allows direct command line access
// //   board.repl.inject({
// //     servo: servo
// //   });

// //   // Servo API

// //   // min()
// //   //
// //   // set the servo to the minimum degrees
// //   // defaults to 0
// //   //
// //   // eg. servo.min();

// //   // max()
// //   //
// //   // set the servo to the maximum degrees
// //   // defaults to 180
// //   //
// //   // eg. servo.max();

// //   // center()
// //   //
// //   // centers the servo to 90°
// //   //
// //   servo.center();

// //   // move( deg )
// //   //
// //   // Moves the servo to position by degrees
// //   //
// //   // servo.move( 90 );

// //   // sweep( obj )
// //   //
// //   // Perform a min-max cycling servo sweep (defaults to 0-180)
// //   // optionally accepts an object of sweep settings:
// //   // {
// //   //    lapse: time in milliseconds to wait between moves
// //   //           defaults to 500ms
// //   //    degrees: distance in degrees to move
// //   //           defaults to 10°
// //   // }
// //   //
// //   // servo.sweep();


// //   // Servo Event API

// //   // "move" events fire after a successful move.
// //   servo.on("move", function( err, degrees ) {
// //     console.log( "move", degrees );
// //   });
// // });


