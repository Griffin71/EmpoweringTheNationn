function calculateTotal() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const selectedCourses = document.querySelectorAll('input[name="course"]:checked');

    // Check if any required fields are empty
    if (!name || !phone || !email) {
        alert("Please fill in all fields: Name, Phone Number, and Email are required.");
        return;
    }

    // Validate the name: no numeric characters and max length of 20
    const namePattern = /^[A-Za-z\s]{1,20}$/;
    if (!namePattern.test(name)) {
        alert("Please enter a valid name (letters only, up to 20 characters).");
        return;
    }

    // Validate the phone number: numeric only
    const phonePattern = /^\d+$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (numeric only).");
        return;
    }

    // Validate the email: must contain "@" and look like a Gmail or iCloud address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|icloud\.com)$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail or iCloud address (must contain '@' and end with 'gmail.com' or 'icloud.com').");
        return;
    }

    // Check if any courses are selected
    if (selectedCourses.length === 0) {
        alert("Please select at least one course.");
        return;
    }

    let total = 0;
    let courseList = [];

    // Calculate total based on selected courses
    selectedCourses.forEach((course) => {
        total += parseFloat(course.value);
        courseList.push(course.dataset.course + ' (R' + course.value + ')');
    });

    // Apply discount based on the number of selected courses
    let discount = 0;
    if (selectedCourses.length === 2) discount = 0.05;  // 5% discount for 2 courses
    if (selectedCourses.length === 3) discount = 0.10;  // 10% discount for 3 courses
    if (selectedCourses.length > 3) discount = 0.15;    // 15% discount for more than 3 courses

    const discountAmount = total * discount;
    total = total - discountAmount; // Apply discount

    // Calculate VAT (15%)
    const vat = total * 0.15;
    total += vat;

    // Store user details in local storage
    const userDetails = {
        name: name,
        phone: phone,
        email: email
    };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Display the selected courses and user info
    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = `
        <h3>Summary</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Selected Courses:</strong></p>
        <ul>
            ${courseList.map(course => `<li>${course}</li>`).join('')}
        </ul>
        <p><strong>Discount Acquired:</strong> R${discountAmount.toFixed(2)}</p>
        <p><strong>VAT (15%):</strong> R${vat.toFixed(2)}</p>
        <p><strong>Total Fee (including VAT):</strong> R${total.toFixed(2)}</p>
        <button onclick="proceedToCheckout(${total.toFixed(2)})">Proceed to Checkout</button>
    `;

    document.getElementById('total-fee').innerText = ''; // Clear the old total fee message
}

function proceedToCheckout(total) {
    // Store the total in local storage or wherever necessary
    localStorage.setItem('totalFee', total);
    
    // Redirect to checkout page
    window.location.href = "checkout.html";
}
