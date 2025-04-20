let itemCount = 0;
let totalPrice = 0;

function addToCart(price) {
  itemCount++;
  totalPrice += Number(price.parentNode.querySelector("p").innerHTML.slice(1));
  document.getElementById('item-count').innerText = itemCount;
  document.getElementById('total-price').innerText = totalPrice;
}


for(let i = 0; i < 3; i++){
    setTimeout(() => console.log(i),0)
}