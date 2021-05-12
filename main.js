noseX=0; 
noseY=0;
function preload(){
    image1 = loadImage("https://i.postimg.cc/8c1BCpMc/th.jpg");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log("Model is travelling from china to India");

}
function draw(){
   image(video,0,0,300,300);
   /*fill(0,0,0); 
   stroke(255,0,0); 
   circle(noseX, noseY, 20);*/
   image(image1 , nosex-10 , nosey-10 , 30 , 30);
   
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x; noseY = results[0].pose.nose.y;
        console.log("nosex = "+nosex);
        console.log("nosey = "+nosey);
    }
}

function take_snapshot(){
    save('myimage.jpg');
}
