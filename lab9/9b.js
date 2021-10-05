const numberA = document.getElementById("numberA");
const numberB = document.getElementById("numberB");
const opCode = document.getElementById("op");
const resultButton = document.getElementById("resultButton");
const resultHeader = document.getElementById("result");

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    resultHeader.innerHTML = `Result: ${JSON.parse(xhttp.responseText).result}`;
  }
};

resultButton.addEventListener("click", () => {
  xhttp.open("POST", "http://localhost:5500/arithmetic", true);
  xhttp.setRequestHeader("Content-Type", "application/json");

  xhttp.send(
    JSON.stringify({
      a: numberA.value,
      b: numberB.value,
      op: op.value,
    })
  );
});
