function submitFeedback() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !rating || !message) {
        alert("Please fill all fields.");
        return;
    }

    document.getElementById("response").innerHTML = `
        <h3>Thank You, ${name}! 😊</h3>
        <p>Your feedback has been submitted successfully.</p>
        <p>Rating: ${rating}/5</p>
    `;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("message").value = "";
}