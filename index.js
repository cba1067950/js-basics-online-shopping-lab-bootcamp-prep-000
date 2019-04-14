var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newObj = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * Math.floor(100))
 };
 
 cart.push(newObj);
 return `${newObj["itemName"]} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 1) {
    
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    
  } else if (cart.length === 2) {
    
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
    
  } else if (cart.length >= 3) {
    
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
    
  } else {
    
    return 'Your shopping cart is empty.';
  }
  
}

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total = cart[i].itemPrice + total;
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code 
  //loop through array to find item.
  for(var i = 0; i < 5; i++){
    console.log(item);
  }
  /*
    CART IS EMPTY PUT A DUMMY VALUE IN IT
    AND TRY USING THOSE SEARCHES AGAIN
  
  */
  //for (var key in cart) {
  //string1 += "test";
  //}
    
  //if(item == cart[key]){
  //  console.log(cart[key]);
  //}
  
  //if item is present delete
  //if item isn't present return "That item is not in your cart.
  
  //var itemIndex = cart.indexOf(item);
  //console.log(itemIndex);
  //cart.splice(cart.indexOf(item), 1);
}
removeFromCart("test");

function placeOrder(cardNumber) {
  // write your code here
}
