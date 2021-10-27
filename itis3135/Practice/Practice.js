var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {

	var total = 0;

	//add onclick event handler for each image
	// for click event add item to order and update total
	document.getElementById("cappuccino").onclick = function()
	{
		document.getElementById("order").append("$3.45 - Cappuccino - Delicious Cappuccino!");
		total = (parseFloat(total) + parseFloat(3.45)).toFixed(2);
		document.getElementById("total").innerHTML = "<em>Total:" + total + "</em>";
		
	};

	document.getElementById("espresso").addEventListener("click", function()
	{
		total = (parseFloat(total) + parseFloat(1.95)).toFixed(2);
		document.getElementById("order").append("$1.95 - Espresso - Delicious espresso. Wanna try it?");
		document.getElementById("total").innerHTML = "<em>Total: " + total + "</em>";
	})

	// display order and total
		
}; // end onload