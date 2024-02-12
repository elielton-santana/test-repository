function moveButton() {
    var naoBtn = document.getElementById("naoBtn");
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var randomX = Math.floor(Math.random() * screenWidth);
    var randomY = Math.floor(Math.random() * screenHeight);

    naoBtn.style.position = "absolute";
    naoBtn.style.left = randomX + "px";
    naoBtn.style.top = randomY + "px";
}