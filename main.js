rightEyeX=0;
rightEyeY=0;
function preload(){
    flower=loadImage("flower.png");
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightEyeX=results[0].pose.rightEye.x-175;
        rightEyeY=results[0].pose.rightEye.y-175;
        console.log("nose x="+results[0].pose.rightEye.x);
        console.log("nose y="+results[0].pose.rightEye.y);
    }
}
function draw(){
    image(video,0,0,400,400);
    image(flower,rightEyeX,rightEyeY,150,150)
}
function takesnapshot(){
    save("image.png");
    
}
function modelLoaded(){
    console.log("PoseNet Is Initialized!")
}