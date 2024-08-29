// script.js

// Add event listeners to the "Buy Now" buttons
const buyNowButtons = document.querySelectorAll('.sneakers-item button');

buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        // You can add your logic here when a "Buy Now" button is clicked
        // For example, you could redirect the user to a product page
        alert('Buy Now button clicked!');
    });
});