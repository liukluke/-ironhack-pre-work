// Rover Object Goes Here
// ======================

var rover = {
  direction: "N", x: 0, y: 0, travellog: ["0,0"]
};

var secondRover = {
  direction: "N", x: 0, y: 9, travellog: ["0,9"]
};

var thirdRover = {
  direction: "N", x: 9, y: 0, travellog: ["9,0"]
};

var fourthRover = {
  direction: "N", x: 9, y: 9, travellog: ["9,9"]
};

// ======================

var commands = ["b","r","f","r","f","l","f","f","r","f","f","f","l","f"];
var secondCommands = ["r","f","f","f","l","f","f","f","r","f","l","f","f"];
var thirdCommands = ["l","f","f","l","f","f","f","f","r","f","f"];
var fourthCommands = ["b","f","l","f","f","f","r","f","f","f","f","l","f","r","b","l","f"];

var obstaclesArr = [];
var roverPosArr = ["0,0","0,9","9,0","9,9"];

searchObstacles(obstaclesArr);

valid(commands, rover);
searchRoverPosition(roverPosArr, rover, 0);

valid(secondCommands, secondRover);
searchRoverPosition(roverPosArr, secondRover, 1);

valid(thirdCommands, thirdRover);
searchRoverPosition(roverPosArr, thirdRover, 2);

valid(fourthCommands, fourthRover);
searchRoverPosition(roverPosArr, fourthRover, 3);



for(var i=0; i < rover.travellog.length; i++) {
  console.log("Rover was " + rover.travellog[i] + " here!");
}
for(var i=0; i < secondRover.travellog.length; i++) {
  console.log("Second Rover was " + secondRover.travellog[i] + " here!");
}
for(var i=0; i < thirdRover.travellog.length; i++) {
  console.log("Third Rover was " + thirdRover.travellog[i] + " here!");
}
for(var i=0; i < fourthRover.travellog.length; i++) {
  console.log("Fourth Rover was " + fourthRover.travellog[i] + " here!");
}

function turnLeft(rover){
  switch(rover.direction){
    case "N":
    rover.direction = "W"
    break;
    case "W":
    rover.direction = "S"
    break;
    case "S":
    rover.direction = "E"
    break;
    default:
    rover.direction = "N"
    break;
  }

  //console.log("turnLeft was called!");
  return rover;
}

function turnRight(rover){

  switch(rover.direction){
    case "N":
    rover.direction = "E"
    break;
    case "E":
    rover.direction = "S"
    break;
    case "S":
    rover.direction = "W"
    break;
    default:
    rover.direction = "N"
    break;
  }

  //console.log("turnRight was called!");
  return rover;
}

function moveForward(rover){

  switch (rover.direction) {
    case "N":
    if(rover.y !== 0) {      
      if(obstaclesArr.indexOf(rover.x + "," + (rover.y-1)) === -1){
        if(roverPosArr.indexOf(rover.x + "," + (rover.y-1)) === -1) {
          rover.y -= 1; 
          rover.travellog.push(rover.x + "," + rover.y)
        } 
        else {
          console.log("Here " + rover.x + "," + (rover.y-1) + " there is already a Rover!");
        } 
      }
      else {
          console.log("There is an obstacles " + rover.x + "," + (rover.y-1) + " here!");
      } 
    }
    else {
        console.log("You can't get out of the grid!")
    }
    break;
    case "S":
    if(rover.y !== 9) {
        if(obstaclesArr.indexOf(rover.x + "," + (rover.y+1)) === -1){
            if(roverPosArr.indexOf(rover.x + "," + (rover.y+1)) === -1) {
                rover.y += 1; 
                rover.travellog.push(rover.x + "," + rover.y)
            } 
            else {
              console.log("Here " + rover.x + "," + (rover.y+1) + " there is already a Rover!");
            } 
        }
        else {
          console.log("There is an obstacles " + rover.x + "," + (rover.y+1) + " here!");
        }
    }
    else {
        console.log("You can't get out of the grid!")
    }
    break;
    case "W":
    if(rover.x !== 0) {
        if(obstaclesArr.indexOf((rover.x-1) + "," + rover.y) === -1){
            if(roverPosArr.indexOf((rover.x-1) + "," + rover.y) === -1) {
                rover.x -= 1; 
                rover.travellog.push(rover.x + "," + rover.y)
            } 
            else {
              console.log("Here " + (rover.x-1) + "," + rover.y + " there is already a Rover!");
            } 
        }
        else {
          console.log("There is an obstacles " + (rover.x-1) + "," + rover.y + " here!");
        } 
    }
    else {
        console.log("You can't get out of the grid!")
    }
    break;
    case "E":
    if(rover.x !== 9) {
        if(obstaclesArr.indexOf((rover.x+1) + "," + rover.y) === -1){
            if(roverPosArr.indexOf((rover.x+1) + "," + rover.y) === -1) {
                rover.x += 1; 
                rover.travellog.push(rover.x + "," + rover.y)
            } 
            else {
              console.log("Here " + (rover.x+1) + "," + rover.y + " there is already a Rover!");
            } 
        }
        else {
          console.log("There is an obstacles " + (rover.x+1) + "," + rover.y + " here!");
        }
    }
    else {
        console.log("You can't get out of the grid!")
    }
    break;
  }
//console.log("moveForward was called")

  return rover;
}


function moveBackward(rover){

  switch (rover.direction) {
    case "N":
    if(rover.y !== 9) {
        if(obstaclesArr.indexOf(rover.x + "," + (rover.y+1)) === -1){
          if(roverPosArr.indexOf(rover.x + "," + (rover.y+1)) === -1) {
            rover.y += 1; 
            rover.travellog.push(rover.x + "," + rover.y)
          } 
          else {
            console.log("Here " + rover.x + "," + (rover.y+1) + " there is already a Rover!");
          } 
        }
        else {
          console.log("There is an obstacles " + rover.x + "," + (rover.y+1) + " here!");
        } 
    }
    else {
        console.log("You can't get out of the grid!")
    }
    break;
    case "S":
    if(rover.y !== 0) {
        if(obstaclesArr.indexOf(rover.x + "," + (rover.y-1)) === -1){
          if(roverPosArr.indexOf(rover.x + "," + (rover.y-1)) === -1) {
            rover.y -= 1; 
            rover.travellog.push(rover.x + "," + rover.y)
          } 
          else {
            console.log("Here " + rover.x + "," + (rover.y-1) + " there is already a Rover!");
          }
        }
        else {
          console.log("There is an obstacles " + rover.x + "," + (rover.y-1) + " here!");
        }
    }
    else {
        console.log("You can't get out of the grid!")
    }
    break;
    case "W":
    if(rover.x !== 9) {
        if(obstaclesArr.indexOf((rover.x+1) + "," + rover.y) === -1){
          if(roverPosArr.indexOf((rover.x+1) + "," + rover.y) === -1) {
            rover.x += 1; 
            rover.travellog.push(rover.x + "," + rover.y)
          } 
          else {
            console.log("Here " + (rover.x+1) + "," + rover.y + " there is already a Rover!");
          } 
        }
        else {
          console.log("There is an obstacles " + (rover.x+1) + "," + rover.y + " here!");
        } 
    }
    else {
        console.log("You can't get out of the grid!")
    }
    break;
    case "E":
    if(rover.x !== 0) {
        if(obstaclesArr.indexOf((rover.x-1) + "," + rover.y) === -1){
          if(roverPosArr.indexOf((rover.x-1) + "," + rover.y) === -1) {
            rover.x -= 1; 
            rover.travellog.push(rover.x + "," + rover.y)
          } 
          else {
            console.log("Here " + (rover.x-1) + "," + rover.y + " there is already a Rover!");
          }
        }
        else {
          console.log("There is an obstacles " + (rover.x-1) + "," + rover.y + " here!");
        } 
    }
    else {
        console.log("You can't get out of the grid!")
    }
    break;
  }
//console.log("moveForward was called")

    return rover;
}

function moving(element, rover) {
  for(var i=0; i < element.length; i++){

    if(element[i] === "r") {
      rover = turnRight(rover);
      //console.log(rover);
    }
    else if(element[i] === "l") {
      rover = turnLeft(rover);
      //console.log(rover);
    }
    else if(element[i] === "f") {
       rover = moveForward(rover);
      //console.log(rover);
    }
    else if(element[i] === "b") {
        rover = moveBackward(rover);    
      //console.log(rover);
    }
  } 
}

function valid(element, rovers) {
  var valid = true;
  for(var i = 0; i < element.length && valid === true; i++) {
    switch(element[i]){
    case "r":
      break;
    case "l":
      break;
    case "f":
      break;
    case "b":
      break;
    default:
      valid = false
      break;  
    }
  }  
  if (valid === false) {
    console.log("You must enter a valid command");
  }
  else {
    moving(element, rovers);
  }
}  

function searchObstacles(arr){ 

  var grid = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, "OS", null, null, "OS", null, "OS", null, null, null],
    [null, null, null, null, null, null, "OS", null, null, null],
    ["OS", null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, "OS", null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, "OS", null],
    [null,"OS", null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ];

  for (var i = 0; i < grid.length; i++){    
    var row = grid[i];
    for (var j = 0; j < row.length; j++){
      var column = row[j];
      if (column === "OS"){
        arr.push(j + "," + i);
      }
    }
  };
} 

function searchRoverPosition(arr, rovers, i) {
  
  arr[i] = rovers.travellog[rovers.travellog.length-1];
  
}
