const overlay = document.getElementById('overlay');
const homeSection = document.getElementById('home');
const navBar = document.getElementById('main-nav');
const bdayMusic = document.getElementById('bday-music');
const viewMoreBtn = document.getElementById('viewMoreBtn');
const galleryGrid = document.getElementById('galleryGrid');

// Celebration Start Logic
overlay.addEventListener('click', () => {
    bdayMusic.play(); // Piano music starts

    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#00f2ff', '#ffffff', '#0077ff']
    });

    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        homeSection.style.display = 'flex';
        navBar.style.display = 'flex';
        typeWriter();
    }, 800);
});

// Typing Effect Logic
const text = "HAPPY BIRTHDAY 🎂🎈";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 150);
    }
}

// GALLERY TOGGLE (Merged & Fixed)
viewMoreBtn.addEventListener('click', function () {
    const isExpanded = galleryGrid.classList.contains('expanded');

    if (!isExpanded) {
        // Photos dikhao
        galleryGrid.classList.add('expanded');
        this.innerHTML = "Hide Extra Photos"; // Button text badlega
        window.scrollBy({ top: 300, behavior: 'smooth' });
    } else {
        // Photos chhupao
        galleryGrid.classList.remove('expanded');
        this.innerHTML = "View All Photos (37)"; // Button text wapas wahi
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    }
});

// Lightbox Logic
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.onclick = function () {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    }
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function blowCandle(candleElement) {
    const flame = candleElement.querySelector('.flame');
    if (flame) {
        // 1. Flame ko hide karo
        flame.style.display = 'none';

        // 2. Confetti barasao
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        // 3. Message show karo
        document.getElementById('surprise-msg').style.display = 'block';

        // 4. Background Music volume thoda upar (optional)
        const music = document.getElementById('bday-music');
        music.volume = 1.0;
    }
}

function blowCandle(candleElement) {
    const flame = candleElement.querySelector('.flame');
    const cake = document.getElementById('interactive-cake');
    const msg = document.getElementById('surprise-msg');

    if (flame && flame.style.display !== 'none') {
        // 1. Candle bujha do
        flame.style.display = 'none';

        // 2. Cake ko upar lift karo
        cake.classList.add('cake-lift-up');

        // 3. Nichy sy wish show karo
        msg.style.display = 'block';
        setTimeout(() => {
            msg.classList.add('reveal-msg');
        }, 100);

        // 4. Party Confetti Effect
        confetti({
            particleCount: 250,
            spread: 80,
            origin: { y: 0.7 }
        });

        // Background Piano Music volume up
        const music = document.getElementById('bday-music');
        if (music) music.volume = 1.0;
    }
}