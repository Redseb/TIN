const nameInput = document.getElementById("fnameInput");
const nameLabel = document.getElementById("fnameLabel");
const ageInput = document.getElementById("ageInput");
const ageLabel = document.getElementById("ageLabel");
const addButton = document.getElementById("addButton");

const dataTable = document.getElementById("dataTable");

const fullNameRegex = new RegExp(/^([A-Z]{3,})+\s+([A-Z\s]{3,})+$/i);

addButton.addEventListener("click", () => {
  let isValid = true;
  if (!fullNameRegex.test(nameInput.value)) {
    nameInput.style.color = "red";
    nameLabel.style.color = "red";
    isValid = false;
  } else {
    nameInput.style.color = "black"; //reset color when trying to validate again
    nameLabel.style.color = "black";
  }
  if (isNaN(ageInput.value) || ageInput.value == "") {
    ageInput.style.color = "red";
    ageLabel.style.color = "red";
    isValid = false;
  } else {
    ageInput.style.color = "black"; //reset color when trying to validate again
    ageLabel.style.color = "black";
  }

  if (isValid) {
    //Add row to table
    const row = dataTable.insertRow(-1);
    const nameCell = row.insertCell(0);
    const ageCell = row.insertCell(1);
    let nameText = document.createTextNode(nameInput.value);
    let ageText = document.createTextNode(ageInput.value);
    nameCell.appendChild(nameText);
    ageCell.appendChild(ageText);
  }
});
