document.addEventListener("keydown", function (event) {
  const audio = document.getElementById("audios");

  if (event.key === "a") {
    var path = "sounds/crash.mp3";
  } else if (event.key === "s") {
    var path = "sounds/kick-bass.mp3";
  } else if (event.key === "d") {
    var path = "sounds/snare.mp3";
  } else if (event.key === "f") {
    var path = "sounds/tom-1.mp3";
  } else if (event.key === "g") {
    var path = "sounds/tom-2.mp3";
  } else if (event.key === "h") {
    var path = "sounds/tom-3.mp3";
  } else if (event.key === "j") {
    var path = "sounds/tom-4.mp3";
  }
  if (path) {
    audio.src = path;
    audio.play();
  }
});

function crash() {
  const audio = document.getElementById("audios");
  var path = "sounds/crash.mp3";
  audio.src = path;
  audio.play();
}
function kick() {
  const audio = document.getElementById("audios");
  var path = "sounds/kick-bass.mp3";
  audio.src = path;
  audio.play();
}
function snare() {
  const audio = document.getElementById("audios");
  var path = "sounds/snare.mp3";
  audio.src = path;
  audio.play();
}
function tom1() {
  const audio = document.getElementById("audios");
  var path = "sounds/tom-1.mp3";
  audio.src = path;
  audio.play();
}
function tom2() {
  const audio = document.getElementById("audios");
  var path = "sounds/tom-2.mp3";
  audio.src = path;
  audio.play();
}
function tom3() {
  const audio = document.getElementById("audios");
  var path = "sounds/tom-3.mp3";
  audio.src = path;
  audio.play();
}
function tom4() {
  const audio = document.getElementById("audios");
  var path = "sounds/tom-4.mp3";
  audio.src = path;
  audio.play();
}
