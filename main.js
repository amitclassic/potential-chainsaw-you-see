
noseX= 0;
noseY= 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("rgb(218, 112, 112)");
}

function modelLoaded() {
    console.log('PoseNet is, like, yknow initialized, or something');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("the awesome noseX iiis " + noseX +" and the fantastic noseY iiiis " + noseY);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("the awesome leftWristX iiis " + leftWristX +", the fantastic rightWristX iiiis " + rightWristX + ", and the stupendous glorious amazing very much good difference isssssssssssssss " + difference);
    }
}
 function draw() {
     background('rgb(233, 162, 162)');
     fill('rgb(173, 85, 85)');
     stroke('rgb(131, 81, 81)');
     square(noseX, noseY, difference);
 }