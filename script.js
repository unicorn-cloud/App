var synth = window.speechSynthesis;

function say(text) {
  var utt = new SpeechSynthesisUtterance(text);
  utt.pitch = 1;
  utt.rate = 1;
  synth.cancel();
  synth.speak(utt);
}

var speak = document.getElementById("speak");
speak.addEventListener("click", () => {
    alert("test");
    say("Wie kann ich dir helfen? Das ist ein Test.");
});

function login(f){
    var username = f.username.value;
    var password = f.password.value;

    alert("login");
    //$("#loginform").submit();
    return false; //do not post data
}
