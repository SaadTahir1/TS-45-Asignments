
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien

let alienColor:string = "green";

// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.

//Version 1 of the program 
if(alienColor==="green"){
    console.log(" Version 1: player earned 5 points.");
}
else if(alienColor==="yellow"){
    console.log("player earned 10 points.");
}
else if(alienColor==="red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right color");
}

//Version 2 of the program
alienColor = "yellow";

if(alienColor==="green"){
    console.log("the player earned 5 points.");
}
else if(alienColor==="yellow"){
    console.log("Version 2: player earned 10 points.");
}
else if(alienColor==="red"){
    console.log("player earned 15 points.");
}
else{
    console.log("please select right color");
}


//Version 3 of the program
alienColor = "red";

if(alienColor==="green"){
    console.log("the player earned 5 points.");
}
else if(alienColor==="yellow"){
    console.log("player earned 10 points.");
}
else if(alienColor==="red"){
    console.log("Version 3: player earned 15 points.");
}
else{
    console.log("please select right color");
}
//