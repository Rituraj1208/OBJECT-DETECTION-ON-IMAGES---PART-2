img="";
status1="";
function preload() {
    img=loadImage('desk.jpg');
}

function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status:- Detecting Object";
}

function modelLoaded() {
    console.log("Model Loaded");
    status1=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Desktop", 300, 30);
    noFill();
    stroke("red");
    rect(200, 10, 260, 120);

    fill("blue");
    text("Keyboard", 280, 150);
    noFill();
    stroke("blue");
    rect(220, 135, 230, 35);

    fill("cyan");
    text("Mouse", 470, 165);
    noFill();
    stroke("cyan");
    rect(455, 135, 80, 35);

    fill("#C648DA");
    text("Books", 430, 225);
    noFill();
    stroke("#C648DA");
    rect(410, 210, 80, 45);

    fill("cyan");
    text("Penstand", 500, 120);
    noFill();
    stroke("cyan");
    rect(495, 80, 60, 50);

    fill("blue");
    text("Cup", 120, 145);
    noFill();
    stroke("blue");
    rect(100, 125, 65, 40);
}