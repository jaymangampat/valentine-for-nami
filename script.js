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

    // Ensure the "No" button always moves when tapped
    noButton.addEventListener("mouseover", moveNoButton);
    noButton.addEventListener("touchstart", function (event) {
        event.preventDefault(); // Prevents weird behavior on mobile
        moveNoButton();
    });

    // Show the response when "Yes" is clicked
    yesButton.addEventListener("click", function () {
        response.classList.remove("hidden");
    });
});
