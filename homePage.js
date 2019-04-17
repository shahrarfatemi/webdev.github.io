
var placeSelected = false;
// Execute a function when the user releases a key on the keyboard
function whereFunction(){
  // Number 13 is the "Enter" key on the keyboard
  console.log("hi");
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    console.log("hi");
    var place;
    var input = document.getElementById("inputPlace3");
    place = input.value;
    console.log(place);
    placeSelected = true;
    // event.preventDefault();
    // Trigger the button element with a click
    // document.getElementById("myBtn").click();
  }
}

function goToLoginPage(){
	console.log("kiiiii");
	location.replace("index.html");
}

function goToHotels(){
    location.replace("hotels.html");
}