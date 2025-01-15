function appendCardsInExplore(link, img, h2) {
    let exploreCards = document.querySelector("#explore .swiper-wrapper");

    let html = `<a href="${link}" class="swiper-slide">
                    <img class="img_round" src="${img}">
                    <span class="img-title">${h2}</span>
                </a>`

    exploreCards.insertAdjacentHTML("beforeend", html);
}

const exploreCards = [
    {
        link: "#",
        img: "Assets-c/cd1.webp",
        h2: "Arts & Humanities"
    },
    {
        link: "#",
        img: "Assets-c/cd2.webp",
        h2: "Commerce, Business & Management"
    },
    {
        link: "#",
        img: "Assets-c/cd3.webp",
        h2: "Science & Technology"
    },
    {
        link: "#",
        img: "Assets-c/cd4.webp",
        h2: "Engineering & Technical"
    },
    {
        link: "#",
        img: "Assets-c/cd5.webp",
        h2: "Law & Corporate"
    },
    {
        link: "#",
        img: "Assets-c/cd6.webp",
        h2: "Education & Training"
    },
    {
        link: "#",
        img: "Assets-c/cd7.webp",
        h2: "Safety, Fire & Miscellaneous Fields"
    },
    {
        link: "#",
        img: "Assets-c/cd8.webp",
        h2: "Accounting, Finance & Career Oriented"
    },
    {
        link: "#",
        img: "Assets-c/cd9.webp",
        h2: "Creative & Multimedia"
    },
    {
        link: "#",
        img: "Assets-c/cd10.webp",
        h2: "Computer Science & IT"
    }
];

exploreCards.forEach(course => {
    appendCardsInExplore(
        course.link, course.img, course.h2
    );
});


// -/-/-/-/-/-/-/-/-/-/--Course Tab Courses sections---/-/-/-/-/-/-/-/-/-/-/

const status_new = `New✨`;
const status_trending = `Trending🔥`;
const status_limited = `Limited Seats⌛`;
const Rs = `<i class="fa-solid fa-indian-rupee-sign"></i>`;
const clock = `<i class="fa-regular fa-clock"></i>`;
const ratings = `/5 ⭐`;

function appendCards(name, description, ratings, price, duration, src) {

    for (let i = 2; i < 11; i++) {
        console.log(i);
    };

    let html = `<article class="Course-Card">
                        <img src="${src}">
                        <div class="info">
                            <div class="meta">
                                <span class="status">${status}</span>
                                <span class="ratings">${ratings}</span>
                            </div>
                            <h3>${name}</h3>
                            <p>${description}</p>
                            <div class="details">
                                <span class="price">Rs${price}/-</span>
                                <span class="duration">clock${duration}</span>
                            </div>
                        </div>
                    </article>`;
}

const computerCourses = [
    {
        id: "GTG001",
        name: "Post Graduate Diploma in Computer Application (PGDCA)",
        description: "Advanced diploma covering computer applications for graduates.",
        ratings: 4.8,
        price: 9900,
        duration: "12 Months",
        src: "",
    },
    {
        id: "GTG002",
        name: "Advanced Diploma in Computer Application (ADCA)",
        description: "In-depth diploma on various computer applications.",
        ratings: 4.5,
        price: 8700,
        duration: "12 Months",
        src: "",
    },
    {
        id: "GTG003",
        name: "Diploma in Computer Application (DCA - 12 Months)",
        description: "One-year program providing fundamental computer skills.",
        ratings: 4.6,
        price: 7500,
        duration: "12 Months",
        src: "",
    },
    {
        id: "GTG004",
        name: "Diploma in Computer Application (DCA - 6 Months)",
        description: "Six-month diploma for essential computer skills.",
        ratings: 4.4,
        price: 4700,
        duration: "6 Months",
        src: "",
    },
    {
        id: "GTG005",
        name: "Diploma in Computer Teacher Training (DCTT)",
        description: "Program for aspiring computer educators.",
        ratings: 4.7,
        price: 10400,
        duration: "12 Months",
        src: "",
    },
    {
        id: "GTG006",
        name: "Advanced Diploma in Financial Accounting (ADFA)",
        description: "Course on advanced financial accounting and Tally.",
        ratings: 4.9,
        price: 15000,
        duration: "12 Months",
        src: "",
    },
    {
        id: "GTG007",
        name: "Advanced Diploma in Hardware & Networking (ADHN)",
        description: "Technical program on hardware and networking.",
        ratings: 4.6,
        price: 15000,
        duration: "12 Months",
        src: "",
    },
    {
        id: "GTG008",
        name: "Advanced Diploma Course in Multimedia (ADCM)",
        description: "Creative program for graphic designers and video editors.",
        ratings: 4.8,
        price: 15000,
        duration: "12 Months",
        src: "",
    },
    {
        id: "GTG009",
        name: "Diploma Course in Mobile Repairing & Maintenance",
        description: "Essential course for mobile hardware repair.",
        ratings: 4.5,
        price: 15000,
        duration: "12 Months",
        src: "",
    },
    {
        id: "GTG010",
        name: "Advanced Diploma in Accounting (ADA)",
        description: "Short-term course on practical accounting skills.",
        ratings: 4.4,
        price: 5600,
        duration: "6 Months",
        src: "",
    },
    {
        id: "GTG011",
        name: "Advanced Diploma in Information Technology (ADIT)",
        description: "Comprehensive program on IT and software development.",
        ratings: 4.7,
        price: 13500,
        duration: "12 Months",
        src: "",
    },
    {
        id: "GTG012",
        name: "Advanced Diploma in Hardware (ADH)",
        description: "Short-term course on computer hardware troubleshooting.",
        ratings: 4.3,
        price: 5600,
        duration: "6 Months",
        src: "",
    },
    {
        id: "GTG013",
        name: "Advanced Diploma in Networking (ADN)",
        description: "Program on network setup and security.",
        ratings: 4.6,
        price: 5600,
        duration: "6 Months",
        src: "",
    },
    {
        id: "GTG014",
        name: "Diploma in C/C++ Programming",
        description: "Programming course on C and C++.",
        ratings: 4.5,
        price: 5600,
        duration: "6 Months",
        src: "",
    },
    {
        id: "GTG015",
        name: "Certificate Course in C Programming",
        description: "Introduction to the C programming language.",
        ratings: 4.4,
        price: 3500,
        duration: "3 Months",
        src: "",
    },
    {
        id: "GTG016",
        name: "Certificate Course in C++ Programming",
        description: "Short course on object-oriented programming with C++.",
        ratings: 4.5,
        price: 3500,
        duration: "3 Months",
        src: "",
    },
    {
        id: "GTG017",
        name: "Certificate Course in Aided Designing (CCAD)",
        description: "Program on computer-aided design for architects and engineers.",
        ratings: 4.6,
        price: 3500,
        duration: "3 Months",
        src: "",
    },
    {
        id: "GTG018",
        name: "Certificate Course in English Typing (CCET)",
        description: "Typing course to improve speed and accuracy in English.",
        ratings: 4.3,
        price: 2300,
        duration: "3 Months",
        src: "",
    },
    {
        id: "GTG019",
        name: "Certificate Course in Hindi Typing (CCHT)",
        description: "Typing course for proficiency in Hindi.",
        ratings: 4.2,
        price: 3500,
        duration: "6 Months",
        src: "",
    },
    {
        id: "GTG020",
        name: "Certificate Course in Financial Accounting (CCFA)",
        description: "Foundational course in financial accounting basics.",
        ratings: 4.5,
        price: 3500,
        duration: "3 Months",
        src: "",
    },
    {
        id: "GTG021",
        name: "Certificate Course in Desktop Publishing (CCDTP)",
        description: "Quick program on desktop publishing tools.",
        ratings: 4.6,
        price: 2400,
        duration: "2 Months",
        src: "",
    },
    {
        id: "GTG022",
        name: "Certificate Course in AutoCad",
        description: "AutoCAD-focused course for drafting and design.",
        ratings: 4.8,
        price: 3500,
        duration: "3 Months",
        src: "",
    },
    {
        id: "GTG023",
        name: "Course on Computer Concepts (CCC)",
        description: "Beginner course on fundamental computer concepts.",
        ratings: 4.3,
        price: 2400,
        duration: "2 Months",
        src: "",
    },
    {
        id: "GTG024",
        name: "Basic Computer Course (BCC)",
        description: "Introduction to basic computer operations.",
        ratings: 4.2,
        price: 1500,
        duration: "1 Month",
        src: "",
    },
];


