import {
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  kelvinToCelsius,
  kelvinToFahrenheit,
} from "./temperatureConversion";

import { kilometersToMiles, milesToKilometers } from "./distanceConversion";

const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitInput = document.getElementById("fahrenheitInput");
const kelvinInput = document.getElementById("kelvinInput");
const kilometerInput = document.getElementById("kilometerInput");
const mileInput = document.getElementById("mileInput");

celsiusInput.addEventListener("input", (e) => {
  fahrenheitInput.value = celsiusToFahrenheit(e.target.value);
  kelvinInput.value = celsiusToKelvin(e.target.value);
});

fahrenheitInput.addEventListener("input", (e) => {
  celsiusInput.value = fahrenheitToCelsius(e.target.value);
  kelvinInput.value = fahrenheitToKelvin(e.target.value);
});

kelvinInput.addEventListener("input", (e) => {
  celsiusInput.value = kelvinToCelsius(e.target.value);
  fahrenheitInput.value = kelvinToFahrenheit(e.target.value);
});

kilometerInput.addEventListener("input", (e) => {
  mileInput.value = kilometersToMiles(e.target.value);
});

mileInput.addEventListener("input", (e) => {
  kilometerInput.value = milesToKilometers(e.target.value);
});
