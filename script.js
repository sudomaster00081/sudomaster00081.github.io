 // Mobile Navigation
 const hamburger = document.querySelector('.hamburger');
 const navLinks = document.querySelector('.nav-links');
 const navLinksItems = document.querySelectorAll('.nav-links a');

 hamburger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
     hamburger.classList.toggle('active');
 });

 navLinksItems.forEach(item => {
     item.addEventListener('click', () => {
         navLinks.classList.remove('active');
         hamburger.classList.remove('active');
     });
 });

 // Sticky Header
 const header = document.getElementById('header');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 100) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });

 // Back to Top Button
 const backToTop = document.querySelector('.back-to-top');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 300) {
         backToTop.classList.add('active');
     } else {
         backToTop.classList.remove('active');
     }
 });

 backToTop.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });

 // Project Filtering
 const filterBtns = document.querySelectorAll('.filter-btn');
 const projectCards = document.querySelectorAll('.project-card');

 filterBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         // Remove active class from all buttons
         filterBtns.forEach(btn => btn.classList.remove('active'));
         // Add active class to clicked button
         btn.classList.add('active');

         const filter = btn.getAttribute('data-filter');

         projectCards.forEach(card => {
             if (filter === 'all' || card.getAttribute('data-category') === filter) {
                 card.style.display = 'block';
             } else {
                 card.style.display = 'none';
             }
         });
     });
 });

 // Testimonial Slider
 const testimonialSlides = document.querySelectorAll('.testimonial-slide');
 const sliderDots = document.querySelectorAll('.slider-dot');
 let currentSlide = 0;

 function showSlide(index) {
     testimonialSlides.forEach(slide => slide.classList.remove('active'));
     sliderDots.forEach(dot => dot.classList.remove('active'));
     
     testimonialSlides[index].classList.add('active');
     sliderDots[index].classList.add('active');
     currentSlide = index;
 }

 sliderDots.forEach((dot, index) => {
     dot.addEventListener('click', () => {
         showSlide(index);
     });
 });

 // Auto slide change
 setInterval(() => {
     currentSlide = (currentSlide + 1) % testimonialSlides.length;
     showSlide(currentSlide);
 }, 5000);

 // Project Modals
 const projectLinks = document.querySelectorAll('.project-link[data-project]');
 const modals = document.querySelectorAll('.modal');
 const closeModalBtns = document.querySelectorAll('.close-modal');

 projectLinks.forEach(link => {
     link.addEventListener('click', (e) => {
         e.preventDefault();
         const project = link.getAttribute('data-project');
         document.getElementById(`${project}-modal`).classList.add('active');
         document.body.style.overflow = 'hidden';
     });
 });

 closeModalBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         modals.forEach(modal => modal.classList.remove('active'));
         document.body.style.overflow = 'auto';
     });
 });

 // Close modal when clicking outside
 modals.forEach(modal => {
     modal.addEventListener('click', (e) => {
         if (e.target === modal) {
             modal.classList.remove('active');
             document.body.style.overflow = 'auto';
         }
     });
 });

 // GSAP Animations
 gsap.registerPlugin(ScrollTrigger);

 // Hero animation
 gsap.from('.hero-text h1', {
     duration: 1,
     y: 50,
     opacity: 0,
     ease: 'power3.out'
 });

 gsap.from('.hero-text p', {
     duration: 1,
     y: 50,
     opacity: 0,
     delay: 0.3,
     ease: 'power3.out'
 });

 gsap.from('.hero-btns', {
     duration: 1,
     y: 50,
     opacity: 0,
     delay: 0.6,
     ease: 'power3.out'
 });

 gsap.from('.hero-image', {
     duration: 1,
     x: 50,
     opacity: 0,
     delay: 0.9,
     ease: 'power3.out'
 });

 // Section animations
 const sections = document.querySelectorAll('section');
 sections.forEach(section => {
     gsap.from(section, {
         scrollTrigger: {
             trigger: section,
             start: 'top 80%',
             toggleActions: 'play none none none'
         },
         y: 50,
         opacity: 0,
         duration: 1,
         ease: 'power3.out'
     });
 });

 // Skill bars animation
 const skillBars = document.querySelectorAll('.skill-progress');
 skillBars.forEach(bar => {
     ScrollTrigger.create({
         trigger: bar,
         start: 'top 80%',
         onEnter: () => {
             const width = bar.style.width;
             bar.style.width = '0';
             gsap.to(bar, {
                 width: width,
                 duration: 1.5,
                 ease: 'power3.out'
             });
         }
     });
 });

 // Service cards animation
 const serviceCards = document.querySelectorAll('.service-card');
 serviceCards.forEach((card, index) => {
     gsap.from(card, {
         scrollTrigger: {
             trigger: card,
             start: 'top 80%',
             toggleActions: 'play none none none'
         },
         y: 50,
         opacity: 0,
         duration: 0.8,
         delay: index * 0.1,
         ease: 'power3.out'
     });
 });

 // Project cards animation
 const projectCardsAnimate = document.querySelectorAll('.project-card');
 projectCardsAnimate.forEach((card, index) => {
     gsap.from(card, {
         scrollTrigger: {
             trigger: card,
             start: 'top 80%',
             toggleActions: 'play none none none'
         },
         y: 50,
         opacity: 0,
         duration: 0.8,
         delay: index * 0.1,
         ease: 'power3.out'
     });
 });

 // Contact form animation
 gsap.from('.contact-form', {
     scrollTrigger: {
         trigger: '.contact-form',
         start: 'top 80%',
         toggleActions: 'play none none none'
     },
     x: 50,
     opacity: 0,
     duration: 1,
     ease: 'power3.out'
 });