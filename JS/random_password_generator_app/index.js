function generatePassword() {
    const passwordLength = Number(document.getElementById("lengthField").value);
    const includeLowercase = document.getElementById("lowercaseChkbx").checked;
    const includeUppercase = document.getElementById("uppercaseChkbx").checked;
    const includeNumbers = document.getElementById("numbersChkbx").checked;
    const includeSymbols = document.getElementById("symbolsChkbx").checked;
    const lowercaseChars = "abcdefghijrlmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += `${includeLowercase ? lowercaseChars : ""}`;
    allowedChars += `${includeUppercase ? uppercaseChars : ""}`;
    allowedChars += `${includeNumbers ? numberChars : ""}`;
    allowedChars += `${includeSymbols ? symbolChars : ""}`;

    if (passwordLength > 0 && allowedChars.length !== 0) {
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
            document.getElementById("copyButton").style.display="inline-block";
        }
    } else if (passwordLength <= 0) {
        password = `(password length myst be at least 1)`;
    } else if (allowedChars.length === 0) {
        password = `(at least one set of characters needs to be selected)`;
    }
    document.getElementById("result").innerText = password;
}

function copyPassword(){
    let password = document.getElementById("result").textContent;
    navigator.clipboard.writeText(password);    
}
