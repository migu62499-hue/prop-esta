let messageIndex = 0;

const messages = [
    "¿Segura?",
    "Piénsalo bien",
    "Ándale 😅",
    "No seas así",
    "Última oportunidad"
];

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.textContent = messages[messageIndex];

    if (messages[messageIndex] === "Última oportunidad") {

        // 🔒 desactivar botón NO
        noButton.style.display = "none";

        // 🔥 botón YES pantalla completa
        yesButton.style.position = "fixed";
        yesButton.style.top = "0";
        yesButton.style.left = "0";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";
        yesButton.style.fontSize = "60px";
        yesButton.style.borderRadius = "0";
        yesButton.style.zIndex = "99999";
        yesButton.style.pointerEvents = "auto"; // 👈 clave
        yesButton.textContent = "SÍ ";
    } else {
        const currentSize = parseFloat(
            window.getComputedStyle(yesButton).fontSize
        );

        yesButton.style.fontSize = (currentSize * 3) + "px";
    }

    messageIndex++;
}

function handleYesClick() {
    console.log("SÍ presionado"); // prueba
    window.location.href = "/yes";
}
