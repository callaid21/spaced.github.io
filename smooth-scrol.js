let navLinks = document.querySelectorAll('primary-nav li a');

for (const link of navLinks){
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e){
    e.preventDefault();

    const hfre = this.getAttribute('href');

    document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
    });
}