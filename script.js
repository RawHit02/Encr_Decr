function encrypt() {
    var password = document.getElementById("secretKey").value;
    if (password === "123456") {
        var message = document.getElementById("inputText").value;
        var encodedMessage = btoa(message);
        document.getElementById("resultLabel").textContent = "⭐ Code Is ENCRYPTED ✔";
        document.getElementById("outputText").value = encodedMessage;
    } else if (password === "") {
        alert("Error! Please Enter Secret Key");
    } else {
        alert("Invalid Secret Key");
    }
}

function decrypt() {
    var password = document.getElementById("secretKey").value;
    if (password === "123456") {
        var encodedMessage = document.getElementById("inputText").value;
        var decodedMessage = atob(encodedMessage);
        document.getElementById("resultLabel").textContent = "⭐ Code Is DECRYPTED ✔";
        document.getElementById("outputText").value = decodedMessage;
    } else if (password === "") {
        alert("Error! Please Enter Secret Key");
    } else {
        alert("Invalid Secret Key");
    }
}

function reset() {
    document.getElementById("inputText").value = "";
    document.getElementById("secretKey").value = "";
    document.getElementById("resultLabel").textContent = "";
    document.getElementById("outputText").value = "";
}
