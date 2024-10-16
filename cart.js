document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [
        // Example item structure
        { name: "Course 1", price: 100 },
        { name: "Course 2", price: 150 }
    ]; // This would be dynamically fetched from your server or local storage

    function updateCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        let totalCourses = cartItems.length;
        let totalCost = 0;

        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            totalCost += item.price;
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(itemElement);
        });

        const discount = calculateDiscount(totalCourses, totalCost);
        const finalTotal = totalCost - discount;

        document.getElementById('total-courses').textContent = totalCourses;
        document.getElementById('total-cost').textContent = totalCost.toFixed(2);
        document.getElementById('discount').textContent = discount.toFixed(2);
        document.getElementById('final-total').textContent = finalTotal.toFixed(2);
    }

    function calculateDiscount(totalCourses, totalCost) {
        let discount = 0;
        if (totalCourses >= 4) {
            discount = totalCost * 0.20;
        } else if (totalCourses === 3) {
            discount = totalCost * 0.15;
        } else if (totalCourses === 2) {
            discount = totalCost * 0.10;
        }
        return discount;
    }

    updateCart();

    document.getElementById('checkout-button').addEventListener('click', function () {
        // Handle checkout process
        alert('Proceeding to checkout...');
    });
});
