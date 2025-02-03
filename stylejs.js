function celebrate() {
    const confettiContainer = document.createElement("div");
    confettiContainer.style.position = "fixed";
    confettiContainer.style.top = "0";
    confettiContainer.style.left = "0";
    confettiContainer.style.width = "100%";
    confettiContainer.style.height = "100%";
    confettiContainer.style.pointerEvents = "none";
    confettiContainer.style.overflow = "hidden";
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.style.position = "absolute";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.top = Math.random() * 100 + "%";
        confetti.style.opacity = "0.8";
        confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";
        confetti.style.animation = "fall 2s linear infinite";
        confettiContainer.appendChild(confetti);
    }
    
    setTimeout(() => { confettiContainer.remove(); }, 3000);
}

document.body.insertAdjacentHTML("beforeend", "<style>@keyframes fall { from { transform: translateY(0); } to { transform: translateY(100vh); }}</style>");