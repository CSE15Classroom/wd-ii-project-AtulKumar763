let cartCount = 0;

// Add To Cart Function
function addToCart(){
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;

    alert("Item Added To Cart");
}

// Place Order Function
function placeOrder(productName){
    alert("Order Placed Successfully for " + productName);
}

// Search Function
function searchProduct(){

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let productName = card.querySelector("h3").innerText.toLowerCase();

        if(productName.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });
}
