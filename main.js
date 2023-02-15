// // open and close cart


const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
})

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});


// // start when the document is ready 

 if(document.readyState == "loading"){
     document.addEventListener('DOMContentLoaded', start);

 }else{
     start();
 }

//============= start ==========
function start(){
    addEvents();
}

// ============= update rerender =======
function update() {
    addEvents();
}

// ======== add events ==========

function addEvents(){
    // remove items from cart
    let cartRemove_btns  = document.querySelectorAll(".cart-remove");
    console.log(cart-remove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click",handle_removeCartItem);
    });


}