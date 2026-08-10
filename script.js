/* =========================================================
   DAILYDEALSHUB — PREMIUM JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       PRODUCT IMAGE LOADING
       ----------------------------------------------------- */

    const productImages = document.querySelectorAll(
        ".product-card img"
    );

    productImages.forEach((img) => {

        img.loading = "lazy";

        img.addEventListener("load", () => {
            img.classList.add("image-loaded");
        });

        img.addEventListener("error", () => {

            img.style.opacity = "0.5";

            console.warn(
                "Product image could not be loaded:",
                img.src
            );

        });

    });


    /* -----------------------------------------------------
       AMAZON BUTTON CLICK EFFECT
       ----------------------------------------------------- */

    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach((button) => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.97)";

            setTimeout(() => {
                button.style.transform = "";
            }, 150);

        });

    });


    /* -----------------------------------------------------
       PRODUCT CARD REVEAL ANIMATION
       ----------------------------------------------------- */

    const cards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "card-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";

        card.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(card);

    });


    /* -----------------------------------------------------
       SMOOTH NAVIGATION
       ----------------------------------------------------- */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(
                        targetId
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });

});


/* ---------------------------------------------------------
   CARD VISIBLE CLASS
   --------------------------------------------------------- */

const cardAnimationStyle =
document.createElement("style");

cardAnimationStyle.textContent = `

    .card-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    .image-loaded {
        animation: productImageIn 0.45s ease;
    }

    @keyframes productImageIn {

        from {
            opacity: 0;
            transform: scale(0.97);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }

    }

`;

document.head.appendChild(
    cardAnimationStyle
);
