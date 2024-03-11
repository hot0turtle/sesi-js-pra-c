function calculateSquare() {
    const numberInput = document.getElementById('number');
    const outputDiv = document.getElementById('output');

    const num = parseInt(numberInput.value);

    if (!isNaN(num)) {
        const result = quad(num);

        outputDiv.innerHTML = `O quadrado de ${num} é: ${result}`;
    } else {
        alert("Por favor, insira um número válido.");
    }
}

function quad(x) {
    return x * x;
}