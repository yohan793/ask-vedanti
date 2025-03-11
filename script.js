document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("response").innerText = "Yay! I can't wait! ❤️";
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    let btn = document.getElementById("no-btn");
    btn.style.position = "absolute";
    btn.style.top = Math.random() * window.innerHeight + "px";
    btn.style.left = Math.random() * window.innerWidth + "px";
});