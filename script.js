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

var f = document.querySelector('#signup');
f.addEventListener('submit', (e) => {
  // Stop submitting form by itself
  e.preventDefault();
      if (window.PasswordCredential) {
        var c = new PasswordCredential(e.target);
        return navigator.credentials.store(c);
        alert("saved");
      }
});
