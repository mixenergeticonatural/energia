function scrollToOffer() {
    const offerSection = document.getElementById('offer');
    offerSection.scrollIntoView({ behavior: 'smooth' });
}

// Contador regressivo
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let minutes = 7;
    let seconds = 0;

    const countdown = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(countdown);
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        countdownElement.textContent = `Oferta expira em: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

// Animação de fade para elementos
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observa elementos importantes
document.querySelectorAll('.testimonial-card, .benefit-card, .price-box').forEach((el) => {
    observer.observe(el);
});

// Inicia o contador quando a página carrega
window.addEventListener('load', startCountdown);

// Adiciona classe active aos botões quando clicados
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('active');
        setTimeout(() => {
            this.classList.remove('active');
        }, 200);
    });
});

// Simula contagem regressiva de vagas disponíveis
let availableSpots = 37;
setInterval(() => {
    if (availableSpots > 5) {
        availableSpots--;
        document.querySelectorAll('.button-sub').forEach(sub => {
            sub.textContent = `Últimas ${availableSpots} vagas disponíveis`;
        });
    }
}, 45000);
