document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('addToCart');
    const addToCartMessage = document.getElementById('addToCartMessage');
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const colorSelector = document.getElementById('color');
    const sizeSelector = document.getElementById('size');
    const quantityInput = document.getElementById('quantity');

    // Handle thumbnail click
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', (e) => {
            mainImage.src = e.target.src;
        });
    });

    // Calculate discount percentage
    const compareAtPrice = 12999;
    const price = 10000;
    const percentageOff = ((compareAtPrice - price) / compareAtPrice * 100).toFixed(0) + '% OFF';
    document.querySelector('.discount-percentage').textContent = percentageOff;

    // Add to cart button click
    addToCartButton.addEventListener('click', () => {
        const selectedColor = colorSelector.value;
        const selectedSize = sizeSelector.value;
        const quantity = quantityInput.value;

        addToCartMessage.textContent = `Added ${quantity} x ${selectedSize} ${selectedColor} item(s) to your cart.`;
    });
});