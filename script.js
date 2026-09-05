/* =====================================================
   FAHAD KHAN — PORTFOLIO JAVASCRIPT
   ===================================================== */


/* =====================================================
   MOBILE MENU
   ===================================================== */

   const menuToggle = document.getElementById("menuToggle");
   const navMenu = document.getElementById("navMenu");
   
   if (menuToggle && navMenu) {
   
       menuToggle.addEventListener("click", () => {
   
           menuToggle.classList.toggle("active");
           navMenu.classList.toggle("active");
   
           const isOpen = navMenu.classList.contains("active");
   
           menuToggle.setAttribute("aria-label", isOpen
               ? "Close menu"
               : "Open menu"
           );
   
       });
   
   
       // Close menu when clicking a navigation link
   
       document.querySelectorAll(".nav-link, .nav-cta").forEach(link => {
   
           link.addEventListener("click", () => {
   
               menuToggle.classList.remove("active");
               navMenu.classList.remove("active");
   
               menuToggle.setAttribute("aria-label", "Open menu");
   
           });
   
       });
   
   
       // Close menu when clicking outside
   
       document.addEventListener("click", (event) => {
   
           if (
               navMenu.classList.contains("active") &&
               !navMenu.contains(event.target) &&
               !menuToggle.contains(event.target)
           ) {
   
               menuToggle.classList.remove("active");
               navMenu.classList.remove("active");
   
               menuToggle.setAttribute("aria-label", "Open menu");
   
           }
   
       });
   
   }
   
   
   /* =====================================================
      ACTIVE NAVIGATION ON SCROLL
      ===================================================== */
   
   const sections = document.querySelectorAll("section[id]");
   const navLinks = document.querySelectorAll(".nav-link");
   
   function updateActiveNav() {
   
       let currentSection = "";
   
       sections.forEach(section => {
   
           const sectionTop = section.offsetTop - 180;
           const sectionHeight = section.offsetHeight;
   
           if (
               window.scrollY >= sectionTop &&
               window.scrollY < sectionTop + sectionHeight
           ) {
               currentSection = section.getAttribute("id");
           }
   
       });
   
   
       navLinks.forEach(link => {
   
           link.classList.remove("active");
   
           if (link.getAttribute("href") === `#${currentSection}`) {
               link.classList.add("active");
           }
   
       });
   
   }
   
   window.addEventListener("scroll", updateActiveNav);
   
   updateActiveNav();
   
   
   /* =====================================================
      SCROLL REVEAL ANIMATION
      ===================================================== */
   
   const revealElements = document.querySelectorAll(
       ".section-heading, .about-text, .stat-card, .skill-card, .project-card, .education-card, .contact-card"
   );
   
   const revealObserver = new IntersectionObserver(
       (entries, observer) => {
   
           entries.forEach(entry => {
   
               if (entry.isIntersecting) {
   
                   entry.target.style.opacity = "1";
                   entry.target.style.transform = "translateY(0)";
   
                   observer.unobserve(entry.target);
   
               }
   
           });
   
       },
       {
           threshold: 0.12
       }
   );
   
   
   revealElements.forEach(element => {
   
       element.style.opacity = "0";
       element.style.transform = "translateY(25px)";
       element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
   
       revealObserver.observe(element);
   
   });
   
   
   /* =====================================================
      SKILL CARD STAGGER
      ===================================================== */
   
   const skillCards = document.querySelectorAll(".skill-card");
   
   skillCards.forEach((card, index) => {
   
       card.style.transitionDelay = `${index * 0.08}s`;
   
   });
   
   
   /* =====================================================
      PROJECT CARD TILT
      ===================================================== */
   
   const projectCard = document.querySelector(".project-card");
   
   if (projectCard && window.innerWidth > 900) {
   
       projectCard.addEventListener("mousemove", (event) => {
   
           const rect = projectCard.getBoundingClientRect();
   
           const x = event.clientX - rect.left;
           const y = event.clientY - rect.top;
   
           const centerX = rect.width / 2;
           const centerY = rect.height / 2;
   
           const rotateX = (y - centerY) / 45;
           const rotateY = (centerX - x) / 45;
   
           projectCard.style.transform =
               `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
   
       });
   
   
       projectCard.addEventListener("mouseleave", () => {
   
           projectCard.style.transform =
               "perspective(1000px) rotateX(0) rotateY(0)";
   
       });
   
   }
   
   
   /* =====================================================
      SMOOTH ANCHOR SCROLL
      ===================================================== */
   
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   
       anchor.addEventListener("click", function (event) {
   
           const targetId = this.getAttribute("href");
   
           if (targetId === "#") return;
   
           const target = document.querySelector(targetId);
   
           if (target) {
   
               event.preventDefault();
   
               target.scrollIntoView({
                   behavior: "smooth",
                   block: "start"
               });
   
           }
   
       });
   
   });
   
   
   /* =====================================================
      CURRENT YEAR
      ===================================================== */
   
   const yearElement = document.getElementById("year");
   
   if (yearElement) {
       yearElement.textContent = new Date().getFullYear();
   }
   
   
   /* =====================================================
      EMAIL CLICK
      ===================================================== */
   
   const emailLink = document.querySelector('a[href^="mailto:"]');
   
   if (emailLink) {
   
       emailLink.addEventListener("click", () => {
   
           console.log("Email link clicked.");
   
       });
   
   }
   
   
   /* =====================================================
      PAGE LOADED
      ===================================================== */
   
   window.addEventListener("load", () => {
   
       document.body.classList.add("loaded");
   
       console.log(
           "Fahad Khan Portfolio loaded successfully 🚀"
       );
   
   });