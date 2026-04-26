function showAlert() {
    alert("Welcome to Custom Component Library!");
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("successMessage").innerText =
        "Form submitted successfully!";
});
