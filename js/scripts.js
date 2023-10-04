window.onload = function() {
  let form =document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const creditCard1 = document.getElementById("")
  }
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});

function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='product']:checked").value;
  document.querySelector("output").innerText= radioSelection;
}
