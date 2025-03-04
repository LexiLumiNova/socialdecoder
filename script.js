JavaScript
// script.js

// Function to decode SSN
function decodeSSN(ssn) {
    // Remove dashes from SSN
    ssn = ssn.replace(/-/g, "");

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
    // Generate random area number, group number, and serial number
    const areaNumber = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    const groupNumber = Math.floor(Math.random() * 100).toString().padStart(2, "0");
const serialNumber = Math.floor(Math.random() * 10000).toString().padStart(4, "0");

return `${areaNumber}-${groupNumber}-${serialNumber}`;
}
// Add event listener for form submission
document.getElementById("decode-btn").addEventListener("click", (e) => {
e.preventDefault();
const ssn = document.getElementById("ssn").value;
const decodedSSN = decodeSSN(ssn);
const jewishGematriaValue = jewishGematria(decodedSSN.areaNumber);
const simpleEnglishGematriaValue = simpleEnglishGematria(decodedSSN.groupNumber);
const advancedEnglishGematriaValue = advancedEnglishGematria(decodedSSN.serialNumber);

// Display results
document.getElementById("results").innerHTML = `
<h2>Decoded SSN:</h2>
<p>Area Number: ${decodedSSN.areaNumber}</p>
<p>Group Number: ??</p>
<p>Serial Number: ????</p>

<h2>Gematria Values:</h2>
<p>Jewish Gematria: ${jewishGematriaValue}</p>
<p>Simple English Gematria: ${simpleEnglishGematriaValue}</p>
<p>Advanced English Gematria: ${advancedEnglishGematriaValue}</p>
`;
});

// Add event listener for random SSN generation
document.getElementById("random-ssn-btn").addEventListener("click", () => {
const randomSSN = generateRandomSSN();
document.getElementById("ssn").value = randomSSN;
});
