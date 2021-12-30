// addEventListener som väntar på att triggas
document.querySelector("#buy").addEventListener("click", openModal);

// Funktionen som öppnar "buyModal"
function openModal(e) {
    // e.preventDefault();
     
    var modal = document.getElementById("buyModal");
    modal.style.display = "block";
}
