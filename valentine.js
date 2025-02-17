function showHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(heart);
    }
}

function openNewPage() {
    window.location.href = 'val.html';
}

// CSS for hearts
const style = document.createElement('style');
style.innerHTML = `
    .heart {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: #ff3366;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        animation: float 4s ease-in-out infinite;
        top: 100%;
    }

    @keyframes float {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
