<!--
//Capstone 4
//5/22/18
//John Aoraha
-->

var items = [
	{name : "Apple", price : 1},
	{name : "Orange", price : 2},
	{name : "Banana", price : 3},
	{name : "Mango", price : 4},
	{name : "Kiwi", price : 5},
];

var cart = [];

function addItem(num) {
	var item = items[num]
	cart.push(items[num]);
	alert("Item has been placed in your cart.");
	items[num].quantity++;
}

function checkOut(){
	var total = 0;
	for (var i = 0; i < cart.length; i++) {
		var item = document.createElement("p");
 		item.innerText = cart[i].name + " $" + cart[i].price;
  		document.body.appendChild(item);
		total += cart[i].price;
	}
	var displayGrandTotal = document.createElement("p");
	displayGrandTotal.innerText = "Grand Total: $"+ total;
	document.body.appendChild(displayGrandTotal);
}

