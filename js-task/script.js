// Initialize an empty cart array
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    const item = {
        name: itemName,
        price: itemPrice
    };
    cart.push(item);
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartSection = document.getElementById('Cart');
    cartSection.innerHTML = '<h2>Your Cart</h2>';

    if (cart.length === 0) {
        cartSection.innerHTML += '<p>Your cart is empty.</p>';
    } else {
        let totalPrice = 0;
        cart.forEach((item, index) => {
            cartSection.innerHTML += `
                <div class="cart-item">
                    <p>${item.name} - Rs.${item.price.toFixed(2)}</p>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            totalPrice += item.price;
        });
        cartSection.innerHTML += `<p><strong>Total Price: Rs.${totalPrice.toFixed(2)}</strong></p>`;
    }
}

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.closest('.menu-item');
        const itemName = menuItem.querySelector('h3').innerText;
        const itemPrice = parseFloat(menuItem.querySelector('span').innerText.replace('Rs.', ''));
        addToCart(itemName, itemPrice);
    });
});