var alkuarvot = {video:{facingMode: "user"}, audio: false };
var track = null;

var kamerakuva = document.getElementById("kamerakuva");
var kuvasijainti = document.getElementById("kuvasijainti");
var kameracanvas = document.getElementById("kameracanvas");
var laukaisin = document.getElementById("laukaisin");

function cameraStarttaa(){
    navigator.mediaDevices.getUserMedia(alkuarvot)
    .then(function(kuvavirta){kamerakuva.srcObject = kuvavirta;})
    .catch(function(error){console.log("huppista")})
    }
window.addEventListener("load", cameraStarttaa)