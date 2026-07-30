const password = document.getElementById("password");
console.log(password);
const overlay = document.getElementById("overlay");
const site = document.getElementById("site");
const box = document.getElementById("password-box");
const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("content");

const pages = {
    about: `
        <h1>about</h1>
        <p>
            who i am and what i do
        </p>
    `,

    music: `
        <h1>music</h1>
        <p>
            my projects, production, and audio work
        </p>
    `,

    cool: `
        <h1>cool stuff</h1>
        <p>
            cars, tech, random things
        </p>
    `
};

// DO NOT RELEASE SITE WITHOUT SETTING TO FALSE
const construction = true;
const enablePassword = true;

document.getElementById("content").innerHTML = pages.about;

if (password) {
    password.addEventListener("keydown", function (e) {
        console.log(e.key);

        if (e.key === "Enter") {
            unlock();
        }
    });
}

if(!enablePassword) {
    overlay.style.opacity = "0";

    setTimeout(() => {
        overlay.style.visibility = "hidden";
    }, 0)
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => {
            t.classList.remove("active");
        });

        tab.classList.add("active");

        const page = tab.dataset.page;

        content.innerHTML = pages[page];
    });
});

function unlock() {
    const input = password.value;
    if(input === "slipperysalami") {
        if (construction) {
            window.location.href = "construction.html";
        }

        overlay.style.opacity = "0";

        setTimeout(() => {
            overlay.style.visibility = "hidden";
        }, 0);
    } else {
        password.select();
        box.classList.add("error");

        setTimeout(()=>{
            box.classList.remove("error");
        },350);
    }
}



