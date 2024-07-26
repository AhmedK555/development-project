const btnPlus = document.getElementsByClassName("plusBtn");
const btnMinus = document.getElementsByClassName("minusBtn");
const btnCheck = document.getElementsByTagName("input");
for (var i = 0; i < btnCheck.length; i++) {
  btnCheck[i].addEventListener("click", changeTotal);
}
for (var i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
}
function increment(event) {
  const btnPlus = event.target;
  const divElt = btnPlus.parentElement.parentElement;
console.log(divElt)
  const quantityTag = divElt.querySelector("p");
  var quantityValue = parseInt(quantityTag.innerHTML);
  quantityValue++;
  quantityTag.innerHTML = quantityValue;
  const unitPriceValue=Number(divElt.querySelector(".unit_price").innerHTML);
  var priceValue = Number(divElt.querySelector(".price").innerHTML);
  priceValue = quantityValue * unitPriceValue;
  divElt.querySelector(".price").innerHTML = priceValue;
  mytable = divElt.parentElement.parentElement.parentElement.parentElement;
  const btnCheck = divElt.querySelector("input");
  totalTag = mytable.querySelector("#fnl_Total");
  totalValue = Number(totalTag.innerHTML);
  if(btnCheck.checked){
    totalValue += unitPriceValue;
    totalTag.innerHTML = totalValue;
  }
}
function changeTotal(event){
    const btnCheck = event.target;
    const tdElement = btnCheck.parentElement.parentElement;
    const trElement = tdElement.parentElement;
    const priceTag= trElement.querySelector(".price")
    var priceValue = Number(priceTag.innerHTML) // will be used 
    const mytable =  trElement.parentElement.parentElement.parentElement.parentElement;
    header=mytable.querySelector("#header")
    navb=header.querySelector("#navb")
    menu=navb.querySelector("#menu")
    home=menu.querySelector("#home")
    menu_div=home.querySelector("#menu_div")
    shop=menu_div.querySelector("#shopp")
    shopping_div=shopp.querySelector("shopping_div")
    const totalTag = mytable.querySelector("#fnl_Total");
    var totalValue = Number(totalTag.innerHTML)
    if(btnCheck.checked){
      totalValue += priceValue ;
      totalTag.innerHTML = totalValue;
    }
    else {
      totalValue -= priceValue ;
      totalTag.innerHTML = totalValue;
    }
  }

console.log(typeof totalValue);

for (var i = 0; i < btnMinus.length; i++) {
    btnMinus[i].addEventListener("click", decrement);
  }
function decrement(event) {
    const btnMinus = event.target;
    const divElt = btnMinus.parentElement.parentElement;
    const quantityTag = divElt.querySelector("p");
    var quantityValue = parseInt(quantityTag.innerHTML);
    if (quantityValue>0) {
    quantityValue--;
    quantityTag.innerHTML = quantityValue;    
    var priceValue = Number(divElt.querySelector(".price").innerHTML);
    const unitPriceValue=Number(divElt.querySelector(".unit_price").innerHTML);
    priceValue = quantityValue * unitPriceValue
    divElt.querySelector(".price").innerHTML = priceValue;
    mytable = divElt.parentElement.parentElement.parentElement.parentElement;
  const btnCheck = divElt.querySelector("input");
  totalTag = mytable.querySelector("#fnl_Total");
  totalValue = Number(totalTag.innerHTML);
  if(btnCheck.checked){
    totalValue -= unitPriceValue;
    totalTag.innerHTML = totalValue;
  }
  }
}
  