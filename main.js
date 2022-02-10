var context = new AudioContext, oscillator;

var setTone = function (val) {

  var multiplier = 13;  
  
	if (oscillator) {
    oscillator.stop();
  }
  
  oscillator = context.createOscillator();
  oscillator.frequency.value = val * multiplier
	oscillator.connect(context.destination);
  oscillator.start(0);

};

document.getElementById('tone').onchange = function (e) {
	setTone(e.currentTarget.value);
};


function blow() {
  
    document.getElementById("image-fan-moving").style.display = "inline-block";
    document.getElementById("image-fan").style.display = "none";
    document.getElementById("play3").style.display = "none";
    document.getElementById("stop3").style.display = "inline-block";
    document.getElementById("speed").style.display = "inline-block";

}

function stop_blow() {
  
    document.getElementById("image-fan-moving").style.display = "none";
    document.getElementById("image-fan").style.display = "inline-block";
    document.getElementById("stop3").style.display = "none";
    document.getElementById("play3").style.display = "inline-block";
    document.getElementById("speed").style.display = "none";

    
}