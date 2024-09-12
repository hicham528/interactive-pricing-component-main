let price = document.querySelector(".price");
let checkbox_btn = document.getElementById("check-apple");
let start_btn = document.querySelector(".start_btn");
let quantity = document.querySelector(".quantity");
let range_input = document.getElementById("range_input");

const check_btn = () => {
  checkbox_btn.addEventListener('click', () => {
    if (price.textContent.includes("0.32")) {
      price.innerHTML = "$2.88<span>/month</span>";
    } else {
      price.innerHTML = "$0.32<span>/month</span>";
    }
  });
};

// Initialize the function
check_btn();

start_btn.onclick = () => {
  alert("Your traffic is accepted, thank you");
};

// Update the price and quantity based on the range input
range_input.addEventListener('input', () => {
  if (checkbox_btn.checked) {
    let value = parseInt(range_input.value);
    let pricePerUnit = 1.44;  
    let baseQuantity = 2; 
    let calculatedPrice = (pricePerUnit * value * baseQuantity).toFixed(2);  // Price calculation
    let calculatedQuantity = baseQuantity + value;
    price.innerHTML = `$${calculatedPrice}<span>/month</span>`;
    quantity.innerHTML = calculatedQuantity;
    if(quantity.innerHTML==2){
      price.innerHTML="$2.88<span>/month</span>";
    }
  }
  if (checkbox_btn.checked==false) {
    let value = parseInt(range_input.value);
    let pricePerUnit = 0.16;  
    let baseQuantity = 2; 
    let calculatedPrice = (pricePerUnit * value * baseQuantity).toFixed(2);  // Price calculation
    let calculatedQuantity = baseQuantity + value;
    price.innerHTML = `$${calculatedPrice}<span>/month</span>`;
    quantity.innerHTML = calculatedQuantity;
    if(quantity.innerHTML==2){
      price.innerHTML="$0.32<span>/month</span>";
    }
  }
});

