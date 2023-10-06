//UI Logic
window.addEventListener("load", function() {
  document.getElementById("order-form").addEventListener("submit", handleOrderFormSubmission);
});

function handleOrderFormSubmission(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='product']:checked").value;
  const cardNumberInput = document.getElementById("creditCardNumber").value;
  const cvvInput = document.getElementById("cvv").value;
  const expDateInput = document.getElementById("exp-date").value;
  const addressInput = document.getElementById("address").value;
  const cityInput = document.getElementById("city").value;
  const stateInput = document.getElementById("state").value;
  const zipCodeInput = document.getElementById("zip-code").value;

  document.querySelector("span#product-display").innerText= radioSelection;
  if (radioSelection == "Necklace") {
    document.querySelector("span#price-display").innerText = "$" + applyDiscount(100, .1);
  } else if (radioSelection == "Earrings") {
    document.querySelector("span#price-display").innerText = "$" + applyDiscount(200, .2);
  } else if (radioSelection == "Bracelet") {
    document.querySelector("span#price-display").innerText = "$" + applyDiscount(300, .3);
  }
  document.querySelector("span#card-number-display").innerText = cardNumberInput;
  document.querySelector("span#cvv-display").innerText = cvvInput;
  document.querySelector("span#exp-date-display").innerText = expDateInput;
  document.querySelector("span#address-display").innerText = addressInput;
  document.querySelector("span#city-display").innerText = cityInput;
  document.querySelector("span#state-display").innerText = stateInput;
  document.querySelector("span#zip-code-display").innerText = zipCodeInput;
  document.getElementById("results").removeAttribute("class");
}

// Business Logic
function applyDiscount(productPrice, discount) {
  return productPrice - (productPrice * discount); 
}