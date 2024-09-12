document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('signupForm').addEventListener('submit', handleSubmit);

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');

    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailError.textContent = '';
        successMessage.textContent = 'All good to go!';
    } else {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
        
        successMessage.textContent = '';
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    if (password.length > 8) {
        passwordError.textContent = '';
        successMessage.textContent = 'All good to go!';
    } else {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        successMessage.textContent = '';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const emailError = document.getElementById('emailError').textContent;
    const passwordError = document.getElementById('passwordError').textContent;

    if (!emailError && !passwordError) {
        if (confirm('Are you sure you want to sign up?')) {
            alert('Successful signup!');
        } else {
            document.getElementById('signupForm').reset();
        }
    }
}
