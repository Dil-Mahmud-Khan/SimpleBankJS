document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passField = document.getElementById('pass-field');
    const pass = passField.value;

    if (email == "dil@gmail.com" && pass == 'dil') {
        window.location.href = 'bank.html';
    }
    else {
        console.log("Invalid User");
    }
})