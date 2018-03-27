// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flow Field Following
// Via Reynolds: http://www.red3d.com/cwr/steer/FlowFollow.html

// Using this variable to decide whether to draw all the stuff
var debug = false;

// Flowfield object
var flowfield;
// An ArrayList of vehicles
var vehicles = [];

function setup() {

  // var text = createP("Hit space bar to toggle debugging lines.<br>Click the mouse to generate a new flow field.");
  // text.position(10,365);

  createCanvas(window.innerWidth, window.innerHeight);
  // Make a new flow field with "resolution" of 16
  flowfield = new FlowField(1);
  // Make a whole bunch of vehicles with random maxspeed and maxforce values
  for (var i = 0; i < 10000; i++) {
    vehicles.push(new Vehicle(random(width), random(height), random(0.1, 0.2), random(0.1, 0.5)));
  }
    a=149;
    b=140;
    c=234;

    background(51);

}

function draw() {
  // Display the flowfield in "debug" mode
  if (debug) flowfield.display();
  // Tell all the vehicles to follow the flow field
  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].follow(flowfield);
    vehicles[i].run();
  }

}

// Make a new flowfield
function mousePressed() {
  flowfield.init();
}

function keyPressed() {
  if (key == ' ') {
      console.log("sdffs'");

    a= random(0,255);
    b= random(0,255);
    c= random(0,255);

  }
}

