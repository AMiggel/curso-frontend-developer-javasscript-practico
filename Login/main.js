
var usuario = {
    password: '123456',
    user: 'user'
}

function getPasswordValue() {
    return document.getElementById("password").value;
}

function getUserValue() {
    return document.getElementById("user").value;
}

function showErrorMessage(){
    return document.getElementById("aviso").style.display = "block";
}

function hideErrorMessage(){
    return document.getElementById("aviso").style.display = "none";
}

function validarLogin(user, password) {
    if (password === "" || user === "") {
        showErrorMessage();
        return;
    } else if (user !== 'user' && password !== 'user') {
        showErrorMessage();
        return;
    } else {
        window.location.href = '../index.html';
    }

    
}
