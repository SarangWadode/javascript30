const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name=text]').value;

function populateVoices() {
  voices = this.getVoices();
  voices.forEach(voice => {
    voicesDropdown.innerHTML += `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
  });
}

function setVoices() {
  msg.voice = voices.find(voice => voice.name == this.value);
  toggle();
}

function toggle() {
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

function stop() {
  speechSynthesis.cancel();
}

function handleChanges() {
  // console.log(this.name)
  if (this.name == "rate") {
    msg.rate = this.value;
  } else if (this.name == "pitch") {
    msg.volume = this.value;
  } else {
    msg.text = this.value;
  }
  console.log(msg)
}

speechSynthesis.addEventListener('voiceschanged',populateVoices)
voicesDropdown.addEventListener('change',setVoices);
options.forEach(input => input.addEventListener('change',handleChanges));
stopButton.addEventListener('click',stop);
speakButton.addEventListener('click',toggle);
