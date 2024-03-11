function calculateIdealWeight() {
    const genderInput = document.getElementById('gender');
    const heightInput = document.getElementById('height');
    const outputDiv = document.getElementById('output');

    const gender = genderInput.value.toUpperCase();
    const height = parseFloat(heightInput.value.replace(',', '.'));

    if ((gender === 'M' || gender === 'F') && !isNaN(height)) {
        const idealWeight = (gender === 'M') ? idealHomem(height) : idealMulher(height);

        outputDiv.innerHTML = `Seu peso ideal é: ${idealWeight.toFixed(2)} kilos.`;
    } else {
        alert("Por favor, insira valores válidos.");
    }
}

function idealHomem(pAltH) {
    return (72.7 * pAltH) - 58;
}

function idealMulher(pAltF) {
    return (62.1 * pAltF) - 44.7;
}