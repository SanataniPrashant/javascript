// Initialize cart
let cart = [];

// Function to update cart
function updateCart() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach((item, index) => {
    const cartItemHTML = `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: Rs. ${item.price}</p>
        <button class="remove-from-cart" data-index="${index}">Remove</button>
      </div>
    `;
    cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
  });

  // Update total cost
  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  document.getElementById('total-cost').textContent = `Rs. ${totalCost.toFixed(2)}`;
}

// Function to add item to cart
function addToCart(item) {
  const existingItem = cart.find((cartItem) => cartItem.name === item.name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  updateCart();
}

// Function to remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Function to clear cart
function clearCart() {
  cart = [];
  updateCart();
}

// Add event listeners to add to cart buttons
document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const menuItem = button.closest('.menu-item');
    const itemName = menuItem.querySelector('h3').textContent;
    const itemPrice = parseFloat(menuItem.querySelector('span').textContent.replace('Rs.', ''));
    addToCart({ name: itemName, price: itemPrice });
  });
});

// Add event listener to remove from cart buttons
document.querySelector('.cart-items').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-from-cart')) {
    const index = parseInt(event.target.dataset.index);
    removeFromCart(index);
  }
});

// Add event listener to clear cart button
document.getElementById('clear-cart').addEventListener('click', clearCart);

// Function to place order
function placeOrder() {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add items to cart before placing an order.');
    return;
  }

  const orderConfirmation = `Your order has been placed successfully. Total cost: Rs. ${document.getElementById('total-cost').textContent}`;
  alert(orderConfirmation);
  clearCart();
};

// Add event listener to place order button
document.getElementById('place-order').addEventListener('click', placeOrder);


