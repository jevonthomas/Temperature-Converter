// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

function toCelsius (degrees) {
	let celsiusDegrees = (degrees - 32) * (5/9);
	container.innerHTML = `<span id="result">${Math.floor(celsiusDegrees)}C</span>`;
	if (celsiusDegrees > 32) {
		document.getElementById("result").style.color = "red";
	} else if (celsiusDegrees < 0) {
		document.getElementById("result").style.color = "blue";
	} else {
		document.getElementById("result").style.color = "green";
	}
}

function toFahrenheit (degrees) {
	let fahrenheitDegrees = (degrees * (9/5)) + 32;
	container.innerHTML = `<span id="result">${Math.floor(fahrenheitDegrees)}F</span>`;
	if (celsiusDegrees > 90) {
		document.getElementById("result").style.color = "red";
	} else if (celsiusDegrees < 32) {
		document.getElementById("result").style.color = "blue";
	} else {
		document.getElementById("result").style.color = "green";
	}
}

// Get a reference to the button element in the DOM
let convertButton = document.getElementById("converter");

// Get a reference to the element that will hold the text
let container = document.getElementById("container");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  let degrees = document.getElementById("temperature").value
  let fahButtonChecked = document.getElementById("fahrenheit").checked
  let celButtonChecked = document.getElementById("celsius").checked
  if (fahButtonChecked !== true && celButtonChecked !== true) {
  	alert("Please select a temperature scale");
  } else if (fahButtonChecked === true && degrees !== "") {
  	toFahrenheit(degrees);
  } else if (celButtonChecked === true && degrees !== "") {
  	toCelsius(degrees);
  } else {
  	alert("Please enter a number");
  }
}

// Assign a function to be executed when the button is clicked
convertButton.addEventListener("click", determineConverter);

// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
document.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		determineConverter();
	}
})

// Add an event handler to the clear button that clears the input field
document.getElementById("clear-button").addEventListener("click", function() {
	// This displays a warning that states the input field must have a number
	// because the button type is number. Thus the input feild gets cleared regardless
	document.getElementById("temperature").value = " ";
})