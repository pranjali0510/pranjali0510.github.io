const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Validate that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // Toggle the 'show-menu' class on the nav element
            nav.classList.toggle('show-menu');
        });
    }
};

// Initialize the menu toggle
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // Remove the 'show-menu' class when a nav link is clicked
    navMenu.classList.remove('show-menu');
}

// Add event listener to all nav links
navLink.forEach(n => n.addEventListener('click', linkAction));

/* Accordion skills */
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    const itemClass = this.parentNode.className;

    skillsContent.forEach(content => {
        content.classList.remove('skills__open');
        content.classList.add('skills__close');
    });

    if (itemClass.includes('skills__close')) {
        this.parentNode.classList.remove('skills__close');
        this.parentNode.classList.add('skills__open');
    }
}

// Add click event listener to all skills headers
skillsHeader.forEach(header => {
    header.addEventListener('click', toggleSkills);
});



/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};




/* Scroll sections active links */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');  
            });
        }
    });


    /*sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    /*Remove toggle icon and navbar when click navbar link(scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*scroll reveal*/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .projects-container, .portfolio-box, .contact-form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer!', 'AI Explorer!', 'Technophile!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});