
// TOPNAV //

function myFunction() {

  var x = document.getElementById("ham");
  if (x.className === "ham_container") {
    x.className += " responsive";
  } else {
    x.className = "ham_container";
  }
}

var muteButton = document.getElementById("muteButton");
var playAudio = document.getElementById("playAudio");
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

muteButton.addEventListener("click", toggleMute);

function toggleMute() {
    if (isChrome) {
        // This part will be executed if the user is using Chrome
        if (playAudio.muted) {
            playAudio.muted = false;
            muteButton.innerText = "Unmute";
        } else {
            playAudio.muted = true;
            muteButton.innerText = "Mute";
        }
    } else {
        // This part will be executed if the user is not using Chrome
        if (!playAudio.paused) {
            playAudio.pause();
        } else {
            playAudio.play();
        }
        muteButton.innerText = playAudio.muted ? "Unmute" : "Mute";
    }
}
// SCROLL + DISPLAY EFFECT//


myID = document.getElementById("icon_arrow");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 700) {
    document.getElementById("icon_arrow").style.display = "none";    
    
    document.getElementById("r1").addEventListener("mouseover", mouseOver);
     function mouseOver() {
    document.getElementById("r1").style.opacity = "1";
    document.getElementById("r2").style.opacity = "0.5";
    document.getElementById("r3").style.opacity = "0.5";
    document.getElementById("r4").style.opacity = "0.5";    
    document.getElementById("r4").style.opacity = "0.5";    
    document.getElementById("l1").style.display = "flex";
    document.getElementById("l2").style.display = "none";  
    document.getElementById("l3").style.display = "none";    
    document.getElementById("l4").style.display = "none";  
    document.getElementById("txt1").style.display = "flex";
    document.getElementById("txt2").style.display = "none";  
    document.getElementById("txt3").style.display = "none";    
    document.getElementById("txt4").style.display = "none";      
    }

    document.getElementById("r2").addEventListener("mouseover", mouseOver2);
    function mouseOver2() {
    document.getElementById("r1").style.opacity = "0.5";
    document.getElementById("r2").style.opacity = "1";
    document.getElementById("r3").style.opacity = "0;5";
    document.getElementById("r4").style.opacity = "0.5";  
    document.getElementById("l1").style.display = "none";
    document.getElementById("l2").style.display = "flex";  
    document.getElementById("l3").style.display = "none";    
    document.getElementById("l4").style.display = "none";  
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "flex";  
    document.getElementById("txt3").style.display = "none";    
    document.getElementById("txt4").style.display = "none";       
   }

    document.getElementById("r3").addEventListener("mouseover", mouseOver3);
    function mouseOver3() {
    document.getElementById("r1").style.opacity = "0.5";
    document.getElementById("r2").style.opacity = "0.5";
    document.getElementById("r3").style.opacity = "1";
    document.getElementById("r4").style.opacity = "0.5";
    document.getElementById("l1").style.display = "none";
    document.getElementById("l2").style.display = "none";  
    document.getElementById("l3").style.display = "flex";    
    document.getElementById("l4").style.display = "none";   
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "none";  
    document.getElementById("txt3").style.display = "flex";    
    document.getElementById("txt4").style.display = "none";     
    }

    document.getElementById("r4").addEventListener("mouseover", mouseOver4);
    function mouseOver4() {
    document.getElementById("r1").style.opacity = "0.5";
    document.getElementById("r2").style.opacity = "0.5";
    document.getElementById("r3").style.opacity = "0.5";
    document.getElementById("r4").style.opacity = "1";
    document.getElementById("l1").style.display = "none";
    document.getElementById("l2").style.display = "none";  
    document.getElementById("l3").style.display = "none";    
    document.getElementById("l4").style.display = "flex";   
    document.getElementById("txt1").style.display = "none";
    document.getElementById("txt2").style.display = "none";  
    document.getElementById("txt3").style.display = "none";    
    document.getElementById("txt4").style.display = "flex";     
    }
  } else {
    document.getElementById("icon_arrow").style.display = "flex";
  }
};

window.addEventListener("scroll", myScrollFunc);






