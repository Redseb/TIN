setTimeout(() => {
  const tag = document.createElement("p");
  const text = document.createTextNode(
    "Tada!!! Wasn't that pretty cool? All you need is a setTimeout async function and it works!"
  );
  tag.appendChild(text);
  document.getElementById("container").appendChild(tag);
}, 5000);
