
//   ...........YOUR MISSION...........

//   Write a program that will convert a temperature from
//   fahrenheit to celsius, or from celsius to fahrenheit.

//   In the HTML, have one input field where someone can enter
//   in a temperature. Then have a radio button group where
//   Celsius or Fahrenheit can be selected as the scale that the
//   number should be converted to. Then a button that,
//   when clicked, displays the converted.
// */

var button = document.getElementById("converter");

function toCelsius(F) {
  var Cel = ((5/9 * F) -32)
  console.log(Cel)
  }
// toCelsius (54)


function toFahrenheit (C) {
  var Far = ((9/5 * C) + 32)
  console.log(Far)
}
// toFahrenheit(25)

var tempValue = document.getElementById('textbox').value;
console.log(tempValue)
function determineConverter (e) {
console.log("button.click")
   


  var optionChosen = document.getElementsByName("conversion_type");
 console.log(optionChosen)
  
  // for loop
    if (optionChosen.checked === true && Celsius.value === "celsius") {
      console.log(tempValue)
      toCelsius(tempValue)
    } else {
      console.log(tempValue)
      toFahrenheit(tempValue)

    }
  // end for loop
}

// Get a reference to the button element in the DOM


// Assign a function to be executed when the button is clicked
button.onclick = determineConverter(tempValue);



  // This will actually return an array containing both of the radio buttons
  // so you will need to look at each item in the array and see if the 'checked'
  // property is true (sample code provided)
