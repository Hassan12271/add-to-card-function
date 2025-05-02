let itemCount = 0;
let totalPrice = 0;
let cart = [];

let sidebarmenu = document.querySelectorAll(".side-bar-menu")[0];
let items;
function cartIconBtn(){
  sidebarmenu.style.right = "0";
  sidebarmenu.style.width = "30%";
}
function addToCart(price) {
  let currentProductPrice = Number(price.parentNode.querySelector("p").innerHTML.slice(1));
  itemCount++;
  totalPrice += currentProductPrice;
  document.getElementById('item-count').textContent = itemCount;
  document.getElementById('total-price').innerText = totalPrice;
  console.log(document.getElementById('item-count').innerHTML);
  let currentProductNAme = price.parentNode.childNodes[3].innerHTML;
  let currentProductImg = price.parentNode.childNodes[1].src;
  items = {
    productImage: currentProductImg,
    productName: currentProductNAme,
    productPRice: currentProductPrice,
    productQuantity: 1
  }
  fillArry()
  console.log(cart);
  // sidebarmenu.style.right = "0";
  cartIconBtn();
  // sidebarmenu.style.width = "100%";
}

function closebtn() {
  sidebarmenu.style.right = "-100%";
  sidebarmenu.style.width = "0";
}

function fillArry() {
  let found = false;

  for (let i = 0; i < cart.length; i++) {
    if (
      cart[i].productImage === items.productImage &&
      cart[i].productName === items.productName
    ) {
      found = true;
      cart[i].productQuantity += 1;
      break;
    }
  }

  if (found) {
    createInSideMenu();
    
  } else {
    cart.push(items);
    createInSideMenu();
  }
}


function createInSideMenu() {
  let sectionEl = sidebarmenu.querySelector("section .cart-continer");
  let htmlContent = '';

  for (let i = 0; i < cart.length; i++) {
    htmlContent += `<div class="inner-container">
      <div class="col-1"><img src="${cart[i].productImage}" alt="Product Image"></div>
      <div class="col-2">
        <h3>Product Name: ${cart[i].productName}</h3>
        <p>Product Price: ${cart[i].productPRice}$</p>
        <p>Product Quantity: <span class="count-product">${cart[i].productQuantity}</span></p>
      </div>
    </div>`;
  }

  sectionEl.innerHTML = htmlContent;
}