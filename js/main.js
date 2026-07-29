const password = document.getElementById("password");
const overlay = document.getElementById("overlay");
const site = document.getElementById("site");
const box = document.getElementById("password-box");

password.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        unlock();
    }
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



