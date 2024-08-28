document.getElementById("encryptBtn").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        document.getElementById("outputMessage").innerText = "Por favor ingrese un texto para encriptar.";
        return;
    }

    const encryptedText = encryptText(inputText);
    localStorage.setItem("encryptedText", encryptedText);
    window.location.href = "encriptador.html";
});

document.getElementById("decryptBtn").addEventListener("click", function() {
    const inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        document.getElementById("outputMessage").innerText = "Por favor ingrese un texto para desencriptar.";
        return;
    }

    const decryptedText = decryptText(inputText);
    document.getElementById("outputMessage").innerText = decryptedText ? decryptedText : "Ningún mensaje fue encontrado";
});

document.getElementById("copyBtn").addEventListener("click", function() {
    const textToCopy = document.getElementById("encryptedText").innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Texto copiado al portapapeles");
    });
});

function encryptText(text) {
    return btoa(text); // Encriptación básica usando base64
}

function decryptText(text) {
    try {
        return atob(text);
    } catch (e) {
        return null;
    }
}

window.onload = function() {
    const encryptedText = localStorage.getItem("encryptedText");
    if (encryptedText) {
        const encryptedTextElement = document.getElementById("encryptedText");
        if (encryptedTextElement) {
            encryptedTextElement.innerText = encryptedText;
        }
    }
};

