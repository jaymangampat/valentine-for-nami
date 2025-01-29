document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const response = document.getElementById("response");

    noButton.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener("click", function () {
        response.classList.remove("hidden");
    });
});
