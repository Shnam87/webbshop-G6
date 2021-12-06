document.querySelector("#login-form-submit").addEventListener("click", checkLogin);
document.querySelector("#login").addEventListener("click", openModal);

function checkLogin(e) {
    e.preventDefault();

    const loginForm = document.getElementById("login-form");
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "webbshopg6") {
        location.href = 'nextPage.html'
    } else {
        alert("Invalid Username or Password")
    }
}

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
