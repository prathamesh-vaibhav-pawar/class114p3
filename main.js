img = ""
noseX = 0;
noseY = 0
function preload(){
    img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
    canvas = createCanvas(380,380)
    canvas.center()
    img = createCapture(VIDEO)
    img.hide()
    Model = ml5.poseNet(img,modelLoded)
    Model.on('pose',getResult)
}
function draw(){
    image(img,0,0,380,500)
    image(img,noseX,noseY,30,30)
}
function takePhoto(){
    save("snap.png")
}
function modelLoded(){
    console.log("model loaded")
}
function getResult(result){
    if(result.length > 0){
        console.log(result)
        noseX = result[0].pose.nose.x 
        noseY = result[0].pose.nose.y 
    }
}