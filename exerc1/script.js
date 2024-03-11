function conta(x) {
    if (x <= 99) {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += x + 1 + '  -  ';
        conta(x + 1);
        
    }
}

function startCounting() {
    const numInput = document.getElementById('numInput');
    const num = parseInt(numInput.value);
    const outputDiv = document.getElementById('output');

    if (!isNaN(num)) {
        outputDiv.innerHTML = ''; // Clear previous output
        conta(num);
    } else {
        alert("Please enter a valid number.");
    }
}