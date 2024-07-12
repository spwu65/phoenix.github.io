window.addEventListener('scroll', () => {
    const legitHero = document.querySelector('.legit-hero');
    const scrollPosition = window.scrollY;

    if (scrollPosition > legitHero.clientHeight) {
        document.body.classList.add('fixed-background');
    } else {
        document.body.classList.remove('fixed-background');
    }

    const detopServices = document.querySelectorAll('.detop-service');
    detopServices.forEach((service, index) => {
        const servicePosition = service.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition + window.innerHeight > servicePosition) {
            setTimeout(() => {
                service.classList.add('show');
                if (index % 2 === 0) {
                    service.classList.add('from-left');
                } else {
                    service.classList.add('from-right');
                }
            }, index * 200);
        }
    });
});

let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000);
window.addEventListener('scroll', () => {
    const services = document.querySelectorAll('.luo-service');
    services.forEach((service, index) => {
        const servicePosition = service.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY + window.innerHeight > servicePosition) {
            setTimeout(() => {
                service.classList.add('show');
            }, index * 200);
        }
    });
});


function makeCall() {
    window.location.href = 'tel:123-456-7890';
}

