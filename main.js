
function passwordMatch() {
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');

    if (password.value === confirmPassword.value) {       
        confirmPassword.setCustomValidity("") 
        return true
    } else {
        confirmPassword.setCustomValidity("Password don't match!")
        return false
    }
}

function checkBeforeSubmit() {
    document.querySelector('#form').addEventListener('submit', e => {
        if (!passwordMatch()) {
            e.preventDefault()
            alert("Passwords don't match!")
        } else {
            return
        }
    })
}

checkBeforeSubmit()