webcame.set({
width:350,
height:350,
image_format : 'png',
png_quality:90
});

camera = document.getElementById("camera");
wbcam.attach('#camera');

function take_snapshot() {
wbcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id = "captured_caamera" src= "'+data_uri+'"/>';
})
}

console.log('ml5 version:' , ml5.version);
classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded);

function modelLoaded() {

    console.log('Model Loaded :')
}