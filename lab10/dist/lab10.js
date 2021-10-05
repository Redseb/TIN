const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitInput = document.getElementById("fahrenheitInput");
const kelvinInput = document.getElementById("kelvinInput");
const kilometerInput = document.getElementById("kilometerInput");
const mileInput = document.getElementById("mileInput");

// const [
//   celsiusToFahrenheit,
//   celsiusToKelvin,
//   fahrenheitToCelsius,
//   fahrenheitToKelvin,
//   kelvinToCelsius,
//   kelvinToFahrenheit,
//   kilometersToMiles,
//   milesToKilometers,
// ] = require("./modules");

const tempConvert = (init_scale, value) => {
  if (init_scale !== "C" || "F" || "K") {
    return -1;
  }
  console.log(celsiusToKelvin(value));
  if (init_scale == "C") {
    fahrenheitInput.value = celsiusToFahrenheit(value);
    kelvinInput.value = celsiusToKelvin(value);
  }
};
console.log("test");

celsiusInput.addEventListener("change", (e) => {
  console.log("test");
  tempConvert("C", e.target.value);
});
