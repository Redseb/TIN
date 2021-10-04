celsiusInput = document.getElementById("celsiusInput");
fahrenheitInput = document.getElementById("fahrenheitInput");
convertButtonCF = document.getElementById("convertButtonCF");
convertButtonFC = document.getElementById("convertButtonFC");

convertButtonCF.addEventListener("click", () => {
  celsiusVal = celsiusInput.value;
  fahrenheitVal = celsiusVal * (9 / 5) + 32;
  fahrenheitInput.value = fahrenheitVal;
});

convertButtonFC.addEventListener("click", () => {
  fahrenheitVal = fahrenheitInput.value;
  celsiusVal = ((fahrenheitVal - 32) * 5) / 9;
  celsiusInput.value = celsiusVal;
});
