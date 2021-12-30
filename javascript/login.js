// addEventListener som triggar "checkLogin" funktionen
document.querySelector("#login-form-submit").addEventListener("click", checkLogin);

// addEventListener som triggar "openModal" funktionen
document.querySelector("#login").addEventListener("click", openModal);

// Funktionen som verifierar inloggningen
function checkLogin(e) {
    e.preventDefault();

    const loginForm = document.getElementById("login-form");
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "Grupp6") {
        location.href = 'admin.html'
    } else {
        alert("Invalid Username or Password")
    }
}

// Funktionen som öppnar "myModal"
function openModal(e) {
   // e.preventDefault();
    
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
