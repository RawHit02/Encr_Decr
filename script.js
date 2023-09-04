       function caesarEncrypt(message, key) {
            var encryptedMessage = "";
            for (var i = 0; i < message.length; i++) {
                var charCode = message.charCodeAt(i);
                if (charCode >= 65 && charCode <= 90) { // Uppercase letters
                    encryptedMessage += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
                } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
                    encryptedMessage += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
                } else {
                    encryptedMessage += message.charAt(i);
                }
            }
            return encryptedMessage;
        }

        function caesarDecrypt(encryptedMessage, key) {
            return caesarEncrypt(encryptedMessage, 26 - key); // Decryption is just encryption with the inverse key
        }

        function encrypt() {
            var password = document.getElementById("secretKey").value;
            if (password === "123456") {
                var message = document.getElementById("inputText").value;
                var key = parseInt(document.getElementById("cipherKey").value);
                var encodedMessage = caesarEncrypt(message, key);
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
                var key = parseInt(document.getElementById("cipherKey").value);
                var decodedMessage = caesarDecrypt(encodedMessage, key);
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
            document.getElementById("cipherKey").value = "";
            document.getElementById("resultLabel").textContent = "";
            document.getElementById("outputText").value = "";
        }
