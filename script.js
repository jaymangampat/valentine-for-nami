document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const response = document.getElementById("response");

    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    // Desktop: Move when hovered
    noButton.addEventListener("mouseover", moveNoButton);

    // Mobile: Move when touched
    noButton.addEventListener("touchstart", function (event) {
        event.preventDefault(); // Prevent accidental taps
        moveNoButton();
    });

    yesButton.addEventListener("click", function () {
        response.classList.remove("hidden");
    });
});
