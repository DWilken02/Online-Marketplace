window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
  document.getElementById("payment-info").addEventListener("submit", paymentInfo);
  document.getElementById("shipping-info").addEventListener("submit", shippingInfo);
});


function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='product']:checked").value;
  document.querySelector("span#product-display").innerText= radioSelection;
}

function paymentInfo(event) {
  event.preventDefault();
  //finish code
}

function shippingInfo(event) {
  event.preventDefault();
  const addressInput = document.getElementById("address").value;
  const cityInput = document.getElementById("city").value;
  const stateInput = document.getElementById("state").value;
  const zipCodeInput = document.getElementById("zip-code").value;

  document.querySelector("span#address-display").innerText = addressInput;
  document.querySelector("span#city-display").innerText = cityInput;
  document.querySelector("span#state-display").innerText = stateInput;
  document.querySelector("span#zip-code-display").innerText = zipCodeInput;
}