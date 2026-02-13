
const messages = [
    "Promotion -20% sur votre premier voyage",
    "Nouvelles destinations disponibles",
    "Réservez maintenant, payez plus tard",
    "-10% pour votre première réservation"
];

let currentIndex = 0;
const banner = document.getElementById('promo-banner');

function updateMessage() {
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(10px)';


    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        banner.textContent = messages[currentIndex];

        banner.style.opacity = '1';
        banner.style.transform = 'translateY(0)';
    }, 500);
}

setInterval(updateMessage, 2000);
