const celsiusToFahrenheit = (celsius) => {
  return celsius * (9 / 5) + 32;
};

const celsiusToKelvin = (celsius) => {
  return celsius + 273.15;
};

const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const fahrenheitToKelvin = (fahrenheit) => {
  return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
};

const kelvinToCelsius = (kelvin) => {
  return kelvin - 273.15;
};

const kelvinToFahrenheit = (kelvin) => {
  return celsiusToFahrenheit(kelvinToCelsius(kelvin));
};

export {
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  kelvinToCelsius,
  kelvinToFahrenheit,
};
