// -/-/-/-/-/-/-/-/-/-/--Smooth Scroll---/-/-/-/-/-/-/-/-/-/-/


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });
});

// -/-/-/-/-/-/-/-/-/-/--Hide Block Respective Main---/-/-/-/-/-/-/-/-/-/-/

document.addEventListener("DOMContentLoaded", () => {
    const activeTabId = localStorage.getItem("activeTab") || "home-tab";

    document.querySelectorAll("main").forEach(main => {
        main.style.display = "none";
    });

    const activeMain = document.getElementById(activeTabId);
    if (activeMain) {
        activeMain.style.display = "block";
    }

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("data-target") === activeTabId) {
            link.classList.add("active");
        }
    });
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const targetId = link.getAttribute("data-target");

        document.querySelectorAll("main").forEach(main => {
            main.style.display = "none";
        });

        const targetMain = document.getElementById(targetId);
        if (targetMain) {
            targetMain.style.display = "block";
        }

        document.querySelectorAll(".nav-link").forEach(nav => {
            nav.classList.remove("active");
        });
        link.classList.add("active");

        localStorage.setItem("activeTab", targetId);
    });
});

// -/-/-/-/-/-/-/-/-/-/--Appear/Disappear Nav Bar---/-/-/-/-/-/-/-/-/-/-/

let lastScrollY = window.scrollY;
const navbar = document.querySelector('#nav');
const threshold = 50;

window.addEventListener('scroll', () => {
    if (Math.abs(window.scrollY - lastScrollY) < threshold) return;

    if (window.scrollY > lastScrollY) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});



// -/-/-/-/-/-/-/-/-/-/--Toggle Switch---/-/-/-/-/-/-/-/-/-/-/


let ToggleHTML = `<label class="switch">
<span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
<span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
<input type="checkbox" class="input">
<span class="slider"></span>
</label>`


document.querySelector(".links").insertAdjacentHTML("beforeend", ToggleHTML);

function preloadImages(...urls) {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
}
preloadImages("Assets/Hero-night.png", "Assets/dayhero.png");

document.querySelector(".input").addEventListener("change", function () {
    const imageElement = document.querySelector("#heroImg");

    imageElement.style.opacity = "0";
    setTimeout(() => {
        if (this.checked) {
            // Dark mode
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            imageElement.src = "Assets/Hero-night.png";
            localStorage.setItem("theme", "dark");

            const specialCase = document.body.querySelector("#special-case");
            specialCase.style.background = "none";
            specialCase.style.border = "2px solid var(--main-grey)";
        } else {
            // Light mode
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            imageElement.src = "Assets/dayhero.png";
            localStorage.setItem("theme", "light");

            const specialCase = document.body.querySelector("#special-case");
            specialCase.style.background = "var(--primary-300)";
            specialCase.style.border = "none";
        }

        imageElement.style.opacity = "1";
    }, 200);
});

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    const imageElement = document.querySelector("#heroImg");

    if (savedTheme === "dark") {
        document.querySelector(".input").checked = true;
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        imageElement.src = "Assets/Hero-night.png";
    } else {
        document.querySelector(".input").checked = false;
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        imageElement.src = "Assets/dayhero.png";
    }

    imageElement.style.opacity = "1";
});

// -/-/-/-/-/-/-/-/-/-/--Hamburger Menu---/-/-/-/-/-/-/-/-/-/-/

let Hamburger = `<i id="menu" class='bx bx-menu'></i>`;
document.querySelector(".right").insertAdjacentHTML("beforeend", Hamburger);

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('#menu');
    const navLinks = document.querySelector('nav .links');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');

        if (hamburger.classList.contains('bx-menu')) {
            hamburger.classList.replace('bx-menu', 'bx-x');
        } else {
            hamburger.classList.replace('bx-x', 'bx-menu');
        }
    });

    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.replace('bx-x', 'bx-menu');
        }
    });
});


// -/-/-/-/-/-/-/-/-/-/--Radio Button---/-/-/-/-/-/-/-/-/-/-/


document.addEventListener("DOMContentLoaded", () => {
    const computerOption = document.getElementById("computerOption");
    const universityOption = document.getElementById("universityOption");
    const computerCourses = document.getElementById("computer-courses");
    const universityCourses = document.getElementById("university-courses");

    function toggleCourses(section) {
        if (section === "computer") {
            computerCourses.style.display = "flex";
            universityCourses.style.display = "none";
            computerOption.checked = true;
            universityOption.checked = false;
        } else if (section === "university") {
            universityCourses.style.display = "flex";
            computerCourses.style.display = "none";
            universityOption.checked = true;
            computerOption.checked = false;
        }
    }

    document.getElementById("goToComputerCourses").addEventListener("click", (event) => {
        event.preventDefault();

        toggleCourses("computer");

        const target = document.getElementById("computer-courses");
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });

    document.getElementById("goToUniversityCourses").addEventListener("click", (event) => {
        event.preventDefault();

        toggleCourses("university");

        const target = document.getElementById("university-courses");
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });

    computerOption.addEventListener("change", () => {
        if (computerOption.checked) {
            computerCourses.style.display = "flex";
            universityCourses.style.display = "none";
        }
    });

    universityOption.addEventListener("change", () => {
        if (universityOption.checked) {
            computerCourses.style.display = "none";
            universityCourses.style.display = "flex";
        }
    });
});


// -/-/-/-Script for prevent default images options---/-/-/-/-/-/

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', event => event.preventDefault());
});

// -/-/-/-/-/-/-/-/-/-/--Other Script---/-/-/-/-/-/-/-/-/-/-/