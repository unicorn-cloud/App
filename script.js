var synth = window.speechSynthesis;

function say(text) {
  var utt = new SpeechSynthesisUtterance(text);
  utt.pitch = 1;
  utt.rate = 1;
  synth.speak(utt);
}

var speak = document.getElementById("speak");
speak.addEventListener("click", () => {
    say("Wie kann ich dir helfen? Das ist ein Test.");
});
