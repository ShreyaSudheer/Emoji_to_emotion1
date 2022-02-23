prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture()
{
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
    });
}

console.log('ml5 version:', ml5.version);

classify = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BpcjVNyUa/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is " + prediction_1;
    speak_data_2 = "And the Second Prediction is " + prediction_2;
    var UtterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(UtterThis);
}
function check(){
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResults);
}
function gotResults(error, results){
    if(error)
    {
      console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("emoji_name").innerHTML = results[0].label;
      document.getElementById("emoji_name2").innerHTML = results[1].label;
      prediction_1 = results[0].label;
      prediction_1 = results[1].label;
      speak();
      if(results[0] = "happy")
      {
          document.getElementById("update_emoji").innerHTML = "&#128522;";
      }
      if(results[0] = "sad")
      {
          document.getElementById("update_emoji").innerHTML = "&#128545;";
      }
      if(results[0] = "angry")
      {
          document.getElementById("update_emoji").innerHTML = "&#128532;";
      }
      

      if(results[1] = "happy")
      {
          document.getElementById("update_emoji2").innerHTML = "&#128522;";
      }
      if(results[1] = "sad")
      {
          document.getElementById("update_emoji2").innerHTML = "&#128545;";
      }
      if(results[1] = "angry")
      {
          document.getElementById("update_emoji2").innerHTML = "&#128532;";
      }

    }
}
