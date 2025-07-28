document.addEventListener('DOMContentLoaded', function() {

    // Initialize Feather Icons
    feather.replace();

    // --- Header Scroll Effect ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Animate Elements on Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    // --- REVISED: Stats Counter Animation ---
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetText = counter.innerText;
                const target = parseFloat(targetText.replace(/,/g, ''));
                const isDecimal = targetText.includes('.');
                const suffix = targetText.replace(/[0-9.,]/g, '');

                let current = 0;
                const duration = 2000; // ms
                const steps = 50;
                const stepTime = duration / steps;
                const increment = target / steps;
                
                counter.innerText = (isDecimal ? '0.0' : '0') + suffix;

                const timer = setInterval(() => {
                    current += increment;
                    
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    if (isDecimal) {
                        counter.innerText = current.toFixed(1) + suffix;
                    } else {
                        counter.innerText = Math.ceil(current) + suffix;
                    }
                }, stepTime);

                observer.unobserve(counter); // Animate only once
            }
        });
    }, {
        threshold: 0.5
    });
    
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => statsObserver.observe(stat));

    // --- UPDATED: Interactive & Automatic Services Panel ---
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceImage = document.getElementById('service-image');
    const servicesList = document.querySelector('.services-list');
    let serviceInterval;

    const changeService = (item) => {
        if (!item) return;
        serviceItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const newImageSrc = item.dataset.image;
        if (serviceImage && serviceImage.src !== newImageSrc) {
            serviceImage.style.opacity = 0;
            setTimeout(() => {
                serviceImage.src = newImageSrc;
                serviceImage.style.opacity = 1;
            }, 200);
        }
    };

    const cycleServices = () => {
        const currentActive = document.querySelector('.service-item.active');
        let nextItem = currentActive ? currentActive.nextElementSibling : null;
        if (!nextItem || !nextItem.classList.contains('service-item')) {
            nextItem = serviceItems[0];
        }
        changeService(nextItem);
    };

    const startCycling = () => {
        clearInterval(serviceInterval);
        serviceInterval = setInterval(cycleServices, 4000);
    };

    const stopCycling = () => {
        clearInterval(serviceInterval);
    };

    serviceItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            stopCycling();
            changeService(this);
        });
    });

    if (servicesList) {
        servicesList.addEventListener('mouseleave', startCycling);
    }

    startCycling();

});
