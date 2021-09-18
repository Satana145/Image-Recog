Webcam.set({
    width:350, 
    height:300, 
    image_format: 'png', 
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function tak_snap() {
    Webcam.snap(function name(data_uri) {
        document.getElementById("result").innerHTML="<img id='img_captured' src='" + data_uri + "'/>"
    });
}
console.log('ml5 ver.:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
function modelLoaded() {
    console.log("Model is loaded.");
}
function check() {
    img = document.getElementById("img_captured");
    classifier.classify(img,gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document,getElementById("results_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}