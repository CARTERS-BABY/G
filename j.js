

var previsao = ''
var previsao2 = ''
Webcam.set({
    width: 350, 
    height: 300,
    image_format: 'png',
    png_quality: 90,
})
var camera = document.getElementById('camera')
Webcam.attach (camera)
function tirarfoto(){
    Webcam.snap (function (data_uri){
        document.getElementById ('result').innerHTML = `<img id='foto' src='${data_uri}'/> `
    })


}
console.log(ml5.version)
var classificaçao = ml5.imageClassifier ('https://teachablemachine.withgoogle.com/models/Rcq_NXgoO/model.json', carregarmodelo )
function carregarmodelo (){
console.log ('funcionou')
}
function falarpv(){
    var syten = window.speechSynthesis
    var previsao11 = 'O PRIMEIRAO GESTO É' + previsao
    var previsao22 = 'O SEGUNDO GESTO É' + previsao2
    var TEXTO = new SpeechSynthesisUtterance (previsao11 + previsao22)
    syten.speak(TEXTO)
}