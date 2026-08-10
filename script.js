/* =========================================================
   DAILYDEALSHUB — PREMIUM THEME JAVASCRIPT
   NO HTML EDIT REQUIRED
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PAGE LOADED
       ========================================= */

    document.body.classList.add("theme-loaded");


    /* =========================================
       SMOOTH NAVIGATION
       ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================================
       PRODUCT REVEAL ON SCROLL
       ========================================= */

    const animatedItems = document.querySelectorAll(
        ".product-card, .category-card, .hero, .why-section"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";

                        obs.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        animatedItems.forEach(item => {
            observer.observe(item);
        });

    } else {

        animatedItems.forEach(item => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        });

    }


    /* =========================================
       AMAZON BUTTON EFFECT
       ========================================= */

    document.querySelectorAll(".buy-btn").forEach(button => {

        button.addEventListener("click", function () {

            this.style.transform = "scale(.97)";

            setTimeout(() => {
                this.style.transform = "";
            }, 140);

        });

    });


    /* =========================================
       DEAL TAGS
       ========================================= */

    document.querySelectorAll(".deal-tag").forEach(tag => {

        tag.addEventListener("mouseenter", () => {
            tag.style.transform = "translateY(-2px)";
        });

        tag.addEventListener("mouseleave", () => {
            tag.style.transform = "";
        });

    });


    /* =========================================
       PRODUCT CARD MOUSE EFFECT
       Desktop only
       ========================================= */

    if (window.innerWidth > 800) {

        document.querySelectorAll(".product-card").forEach(card => {

            card.addEventListener("mousemove", event => {

                const rect = card.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) / rect.width - 0.5;

                const y =
                    (event.clientY - rect.top) / rect.height - 0.5;

                card.style.transform =
                    `perspective(900px)
                     rotateY(${x * 3}deg)
                     rotateX(${y * -3}deg)
                     translateY(-7px)`;

            });

            card.addEventListener("mouseleave", () => {

                card.style.transform =
                    "perspective(900px) rotateY(0) rotateX(0) translateY(0)";

            });

        });

    }


    /* =========================================
       ACTIVE NAVIGATION
       ========================================= */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navigationLinks = document.querySelectorAll(
        '.menu a[href^="#"]'
    );

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.getBoundingClientRect().top;

            if (sectionTop <= 140) {
                currentSection = section.id;
            }

        });

        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                currentSection &&
                link.getAttribute("href") === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =========================================
       SCROLL TO TOP
       ========================================= */

    const scrollTopButton =
        document.getElementById("scrollTop");

    function updateScrollButton() {

        if (!scrollTopButton) return;

        if (window.scrollY > 500) {

            scrollTopButton.style.opacity = "1";
            scrollTopButton.style.pointerEvents = "auto";

        } else {

            scrollTopButton.style.opacity = "0";
            scrollTopButton.style.pointerEvents = "none";

        }

    }

    window.addEventListener(
        "scroll",
        updateScrollButton,
        { passive: true }
    );

    updateScrollButton();

    if (scrollTopButton) {

        scrollTopButton.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       GOLD BUTTON RIPPLE
       ========================================= */

    document.querySelectorAll(
        ".buy-btn, .hero a, .hero button"
    ).forEach(button => {

        button.addEventListener("click", function(event) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(
                rect.width,
                rect.height
            );

            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;

            ripple.style.position = "absolute";
            ripple.style.borderRadius = "50%";
            ripple.style.pointerEvents = "none";

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            ripple.style.background =
                "rgba(255,255,255,.35)";

            ripple.style.transform =
                "scale(0)";

            ripple.style.animation =
                "ddhRipple .55s ease-out";

            this.style.position = "relative";
            this.style.overflow = "hidden";

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* =========================================
       PREVENT IMAGE DRAG
       ========================================= */

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("dragstart", event => {
            event.preventDefault();
        });

    });

});


/* =========================================================
   RIPPLE ANIMATION
   ========================================================= */

const rippleStyle = document.createElement("style");

rippleStyle.textContent = `

@keyframes ddhRipple {

    from {
        transform: scale(0);
        opacity: .8;
    }

    to {
        transform: scale(2.5);
        opacity: 0;
    }

}

.menu a.active {
    color: #f5b928 !important;
}

.menu a.active::after {
    width: 100% !important;
}

`;

document.head.appendChild(rippleStyle);
