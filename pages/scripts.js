
// TOPNAV //

function myFunction() {

  var x = document.getElementById("ham");
  if (x.className === "ham_container") {
    x.className += " responsive";
  } else {
    x.className = "ham_container";
  }
}

