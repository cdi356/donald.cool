const password = document.getElementById("password");
const overlay = document.getElementById("overlay");
const site = document.getElementById("site");
const box = document.getElementById("password-box");
const tabs = document.querySelectorAll(".tab");

// DO NOT RELEASE SITE WITHOUT SETTING TO FALSE
const devMode = false;

password.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        unlock();
    }
});

if(devMode){
    overlay.style.opacity = "0";

    setTimeout(() => {
        overlay.style.visibility = "hidden";
    }, 0);
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => {
            t.classList.remove("active");
        });

        tab.classList.add("active");

    });
});

function unlock() {
    const input = password.value;
    if(input === "bloom") {
        overlay.style.opacity = "0";

        setTimeout(() => {
            overlay.style.visibility = "hidden";
        }, 250);

    } else {
        password.select();
        box.classList.add("error");

        setTimeout(()=>{
            box.classList.remove("error");
        },350);
    }
}



