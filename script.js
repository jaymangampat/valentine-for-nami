document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const response = document.getElementById("response");
    const heartsContainer = document.getElementById("hearts-container");
    const loveSong = document.getElementById("loveSong");

    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    noButton.addEventListener("mouseover", moveNoButton);
    noButton.addEventListener("touchstart", function (event) {
        event.preventDefault();
        moveNoButton();
    });

    yesButton.addEventListener("click", function () {
        response.classList.remove("hidden");
        createHearts();
        loveSong.play(); // Play music when she clicks "Yes"
        loveSong.volume = 0.5; // Adjust volume if needed

        // Display the lyric after "Yes"
        const lyric = document.createElement("p");
        lyric.classList.add("lyric");
        lyric.innerText = "I like me better when I'm with you 💖"; // Short lyric
        document.body.appendChild(lyric); // Add the lyric to the body
    });

    function createHearts() {
        for (let i = 0; i < 30; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${2 + Math.random() * 3}s`;
            heartsContainer.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }
    }
});
