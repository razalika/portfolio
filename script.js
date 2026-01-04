// ===============================
// 1. Animation au chargement
// ===============================
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ===============================
// 2. Scroll fluide pour le menu
// ===============================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// 3. Animation sur la photo
// ===============================
const photo = document.querySelector(".photo");

if (photo) {
    photo.addEventListener("mouseenter", () => {
        photo.style.transform = "scale(1.1)";
        photo.style.transition = "0.3s";
    });

    photo.addEventListener("mouseleave", () => {
        photo.style.transform = "scale(1)";
    });
}

// ===============================
// 4. Message de bienvenue élégant
// ===============================
const homeSection = document.querySelector("#home");

if (homeSection) {
    const message = document.createElement("p");
    message.textContent = "Bienvenue sur mon portfolio 👋";
    message.style.fontSize = "18px";
    message.style.color = "#555";
    message.style.marginTop = "15px";

    homeSection.querySelector(".left").appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 4000);
}
