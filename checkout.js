window.onload = function() {
    // Fetch user details from local storage
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    // Populate personal info section
    const personalInfoDisplay = document.getElementById('personal-info-display');
    personalInfoDisplay.innerHTML = `
        <p>Name: ${userDetails.name}</p>
        <p>Phone: ${userDetails.phone}</p>
        <p>Email: ${userDetails.email}</p>
    `;

    // Confirm Personal Information
    document.getElementById('confirm-info-btn').addEventListener('click', () => {
        document.getElementById('bar-1').style.display = 'none';
        document.getElementById('bar-2').style.display = 'block';
        document.getElementById('indicator-1').classList.remove('active');
        document.getElementById('indicator-2').classList.add('active');

        // Automatically scroll after 6 seconds
        setTimeout(() => {
            document.querySelector('.background-section').scrollIntoView({ behavior: 'smooth' });
        }, 6000);
    });

    // Handle payment method selection
    const paymentMethodRadios = document.querySelectorAll('input[name="payment-method"]');
    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const paymentForm = document.getElementById('payment-form');
            if (radio.value === 'MasterCard') {
                paymentForm.innerHTML = `
                    <label for="card-number">Card Number:</label>
                    <input type="text" id="card-number" required>
                    <label for="expiry-date">Expiry Date:</label>
                    <input type="text" id="expiry-date" required>
                    <label for="cvv">CVV:</label>
                    <input type="text" id="cvv" required>
                `;
                paymentForm.style.display = 'block';
                document.getElementById('add-payment-method-btn').style.display = 'block';
            } else if (radio.value === 'CreditCard') {
                paymentForm.innerHTML = `
                    <label for="credit-card-number">Card Number:</label>
                    <input type="text" id="credit-card-number" required>
                    <label for="credit-expiry-date">Expiry Date:</label>
                    <input type="text" id="credit-expiry-date" required>
                    <label for="credit-cvv">CVV:</label>
                    <input type="text" id="credit-cvv" required>
                `;
                paymentForm.style.display = 'block';
                document.getElementById('add-payment-method-btn').style.display = 'block';
            }
        });
    });

    // Add payment method
    document.getElementById('add-payment-method-btn').addEventListener('click', () => {
        document.getElementById('bar-2').style.display = 'none';
        document.getElementById('bar-3').style.display = 'block';
        document.getElementById('indicator-2').classList.remove('active');
        document.getElementById('indicator-3').classList.add('active');

        // Display final review info
        const finalInfoDisplay = document.getElementById('final-info-display');
        finalInfoDisplay.innerHTML = `
            <p>Name: ${userDetails.name}</p>
            <p>Phone: ${userDetails.phone}</p>
            <p>Email: ${userDetails.email}</p>
            <p>Payment Method: ${document.querySelector('input[name="payment-method"]:checked').value}</p>
        `;
    });

    document.getElementById('pay-now-btn').addEventListener('click', () => {
        // Show money animation
        const moneyElement = document.getElementById('money');
        moneyElement.classList.remove('hidden');
        moneyElement.style.animation = 'drop 1s forwards';
    
        // Show hands waving animation
        const handsElement = document.getElementById('hands');
        handsElement.classList.remove('hidden');
        handsElement.style.animation = 'wave 1s infinite';
    
        // Simulate sending email and thank you message
        const emailContent = `
            Dear Customer, 
            KOV thanks you for trusting us. 
            You can come to one of our offices which are: 
            23 Samson Street, Sandton, Johannesburg 0172, 
            12 Damina Street, Midrand, Johannesburg 0165, 
            2431 Alina Street, Roodepoort, Johannesburg 0178.
        `;
        console.log("Sending email:", emailContent);
    
        // Thank you message
        alert(`Thank you ${userDetails.name}! Your order has been confirmed, please check your emails.`);
        
        // Redirect to home page after a delay
        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);
    });
}  
