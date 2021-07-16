function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(700,500);
}
status="";
function draw(){
  image(video,0,0,700,500);
}
function start(){
   objectDetector= ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
}
function gotResults(error,results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results);
   }
}