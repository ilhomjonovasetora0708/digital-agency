// ==============================
// DIGITAL AGENCY - SCRIPT.JS
// ==============================

// DARK MODE

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// ==============================
// STICKY HEADER

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.1)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==============================
// COUNTER

const counters =
    document.querySelectorAll(".counter");

const counterAnimation = () => {

    counters.forEach(counter => {

        const target =
            +counter.dataset.target;

        const current =
            +counter.innerText;

        const increment =
            target / 100;

        if (current < target) {

            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(counterAnimation, 20);

        } else {

            counter.innerText = target;

        }

    });

}

counterAnimation();

// ==============================
// BACK TO TOP

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// CONTACT FORM

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});

// ==============================
// SCROLL REVEAL

const revealElements =
    document.querySelectorAll(
        ".service-card,.portfolio-card,.team-card,.review-card"
    );

window.addEventListener("scroll", () => {

    revealElements.forEach(el => {

        const top =
            el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("show");

        }

    });

});