
// script.js

// Function to decode SSN
function decodeSSN(ssn) {
    // Extract area number, group number, and serial number
    const areaNumber = ssn.substring(0, 3);
    const groupNumber = ssn.substring(3, 5);
    const serialNumber = ssn.substring(5, 9);

    return { areaNumber, groupNumber, serialNumber };
}

// Function to calculate Jewish Gematria
function jewishGematria(number) {
    // Convert number to Hebrew characters
    const hebrewCharacters = number.toString().split("").map((digit) => {
        return String.fromCharCode(1488 + parseInt(digit));
    });

    // Calculate Gematria value
    let gematriaValue = 0;
    for (const character of hebrewCharacters) {
        gematriaValue += character.charCodeAt(0) - 1488;
    }

    return gematriaValue;
}

// Function to calculate Simple English Gematria
function simpleEnglishGematria(number) {
    // Convert number to words
    const words = number.toString().split("").map((digit) => {
        return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][parseInt(digit)];
    });

    // Calculate Gematria value
    let gematriaValue = 0;
    for (const word of words) {
        for (const letter of word) {
            gematriaValue += letter.toLowerCase().charCodeAt(0) - 96;
        }
    }

    return gematriaValue;
}

// Function to calculate Advanced English Gematria
function advancedEnglishGematria(number) {
    // Convert number to words
    const words = number.toString().split("").map((digit) => {
        return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][parseInt(digit)];
    });

    // Calculate Gematria value using Pythagorean system
    let gematriaValue = 0;
    for (const word of words) {
        for (const letter of word) {
            const letterValue = letter.toLowerCase().charCodeAt(0) - 96;
            gematriaValue += letterValue;
            if (letterValue >= 10) {
                gematriaValue += letterValue % 10 + Math.floor(letterValue / 10);
            }
        }
    }

    return gematriaValue;
}

// Function to generate random SSN
function generateRandomSSN() {
    const areaNumber = Math.floor(Math.random() * 999).toString().padStart(3, "0");
    const groupNumber = Math.floor(Math.random() * 99).toString().padStart(2, "0");
    const serialNumber = Math.floor(Math.random() * 9999).toString().padStart(4, "0");

    document.getElementById("area-number").value = areaNumber;
    document.getElementById("group-number").value = groupNumber;
    document.getElementById("serial-number").value = serialNumber;
}

// Add event listener for random SSN generation
document.getElementById("random-ssn-btn").addEventListener("click", generateRandomSSN);

// Add event listener for form submission
document.getElementById("decode-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const areaNumber = document.getElementById("area-number").value;
    const groupNumber = document.getElementById("group-number").value;
    const serialNumber = document.getElementById("serial-number").value;
    const ssn = `${areaNumber}${groupNumber}${serialNumber}`;

    const decodedSSN = decodeSSN(ssn);
    const jewishGematriaValue = jewishGematria(ssn);
    const simpleEnglishGematriaValue = simpleEnglishGematria(ssn);
    const advancedEnglishGematriaValue = advancedEnglishGematria(ssn);

    // Display results
    document.getElementById("results").innerHTML = `
    <h2>Decoded SSN:</h2>
    <p>Area Number: ${decodedSSN.areaNumber}</p>
    <p>Group Number: ${decodedSSN.groupNumber}</p>
    <p>Serial Number: ${decodedSSN.serialNumber}</p>

    <h2>Gematria Values:</h2>
    <p>Jewish Gematria: ${jewishGematriaValue}</p>
    <p>Simple English Gematria: ${simpleEnglishGematriaValue}</p>
    <p>Advanced English Gematria: ${advancedEnglishGematriaValue}</p>
    `;
});
