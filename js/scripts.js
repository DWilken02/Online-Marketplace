window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
  document.getElementById("payment-info").addEventListener("submit", paymentInfo);
  document.getElementById("shipping-info").addEventListener("submit", shippingInfo);
});


function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='product']:checked").value;
  document.querySelector("span#product-display").innerText= radioSelection;
  if (radioSelection == "Necklace") {
    let productTotal = applyDiscount(100, .1)
    document.querySelector("span#price-display").innerText = "$" + productTotal;
  } else if (radioSelection == "Earrings") {
    let productTotal = applyDiscount(200, .2)
    document.querySelector("span#price-display").innerText = "$" + productTotal;
  } else if (radioSelection == "Bracelet") {
    let productTotal = applyDiscount(300, .3)
    document.querySelector("span#price-display").innerText = "$" + productTotal;
  }
}

function paymentInfo(event) {
  event.preventDefault();
  const cardNumberInput = document.getElementById("creditCardNumber").value;
  const cvvInput = document.getElementById("cvv").value;
  const expDateInput = document.getElementById("exp-date").value;

  document.querySelector("span#card-number-display").innerText = cardNumberInput;
  document.querySelector("span#cvv-display").innerText = cvvInput;
  document.querySelector("span#exp-date-display").innerText = expDateInput;
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

function applyDiscount(productPrice, discount) {
  return productPrice - (productPrice * discount); 
}