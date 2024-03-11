function searchValue() {
    const values = [];

    for (let i = 1; i <= 10; i++) {
        const inputValue = document.getElementById(`value${i}`).value;
        const value = parseInt(inputValue);

        if (!isNaN(value)) {
            values.push(value);
        } else {
            alert(`Por favor, insira um valor válido para o ${i}º campo.`);
            return;
        }
    }

    const searchInput = document.getElementById('searchValue');
    const outputDiv = document.getElementById('output');

    const searchValue = parseInt(searchInput.value);

    if (!isNaN(searchValue)) {
        const occurrences = values.reduce((count, val) => val === searchValue ? count + 1 : count, 0);

        outputDiv.innerHTML = `O número foi achado ${occurrences} vezes.`;
    } else {
        alert("Por favor, insira um valor válido para a busca.");
    }
}