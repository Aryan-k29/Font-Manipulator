noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0
function preload() {

}

function setup () {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(140, 150)

    canvas = createCanvas(550, 420);
    canvas.position(800, 190);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x.toFixed(3);
        noseY = results[0].pose.nose.y.toFixed(3);
        leftWristX = results[0].pose.leftWrist.x.toFixed(3);
        rightWristX = results[0].pose.rightWrist.x.toFixed(3);
        difference = floor(leftWristX - rightWristX);
        console.log("Nose X is " + noseX + " and Nose Y is " + noseY + ". Left Wrist X is " + leftWristX + " and Right Wrist X is " + rightWristX + ". The difference between Left and Right Wrist X are" + difference + ".");
    }
}

function draw() {
    background('#3C91E6');
    fill('#FA6D0F');
    stroke('#FDE74C');
    text('Aryan', noseX, noseY);
    textSize(difference);
    document.getElementById('text_size').innerHTML = "Font size of the text will be" + difference + "px.";
}