// Função para rolar suavemente até a seção de oferta
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

// Função para copiar o cupom
function copyCoupon() {
    const couponCode = "MIX";
    navigator.clipboard.writeText(couponCode).then(() => {
        alert("Código copiado: " + couponCode);
        closeCouponPopup(); // Fecha o popup automaticamente após copiar
    });
}

// Exibir o popup do cupom ao chegar na seção de preço
const offerSection = document.getElementById('offer');
const couponPopup = document.getElementById('couponPopup');

const observerOffer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            couponPopup.style.display = 'block';
        }
    });
}, {
    threshold: 0.1
});

observerOffer.observe(offerSection);

// Fechar o popup do cupom
function closeCouponPopup() {
    couponPopup.style.display = 'none';
}

// Alternar entre as imagens "antes" e "depois"
const beforeAfterImage = document.getElementById('beforeAfterImage');
const toggleButton = document.getElementById('toggleButton');
let isBefore = true;

// URLs das imagens
const antesURL = "https://github.com/user-attachments/assets/aac2afb9-ea0b-4e0a-881e-2eff335a0bad";
const depoisURL = "https://github.com/user-attachments/assets/ce06f425-856c-4112-b2ac-e4595ee00b22";

toggleButton.addEventListener('click', () => {
    if (isBefore) {
        beforeAfterImage.src = depoisURL; // Muda para a imagem "depois"
        toggleButton.textContent = "Ver Antes";
    } else {
        beforeAfterImage.src = antesURL; // Volta para a imagem "antes"
        toggleButton.textContent = "Ver Depois";
    }
    isBefore = !isBefore; // Alterna o estado
});
