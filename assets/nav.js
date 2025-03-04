
const navbar = document.getElementById("navbar");
const title = document.getElementById("title");
const aboutMeSection = document.querySelector('.about_me');
const workSection = document.querySelector('.work');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.add('black');
            title.classList.add('dark-title'); 
        } else {
            navbar.classList.remove('black');
            title.classList.remove('dark-title'); // Volver al color original
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutMeSection);
observer.observe(workSection);