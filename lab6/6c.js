const nameInput = document.getElementById("fnameInput");
const nameLabel = document.getElementById("fnameLabel");
const ageInput = document.getElementById("ageInput");
const ageLabel = document.getElementById("ageLabel");
const validateButton = document.getElementById("validateButton");

const fullNameRegex = new RegExp(/^([A-Z]{3,})+\s+([A-Z\s]{3,})+$/i);

validateButton.addEventListener("click", () => {
  if (!fullNameRegex.test(nameInput.value)) {
    nameInput.style.color = "red";
    nameLabel.style.color = "red";
  } else {
    nameInput.style.color = "black"; //reset color when trying to validate again
    nameLabel.style.color = "black";
  }
  if (isNaN(ageInput.value) || ageInput.value == "") {
    ageInput.style.color = "red";
    ageLabel.style.color = "red";
  } else {
    ageInput.style.color = "black"; //reset color when trying to validate again
    ageLabel.style.color = "black";
  }
});
