function calcularMedia() {
    const matricula = document.getElementById('matricula').value;
    const nome = document.getElementById('nome').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const media = calculo(nota1, nota2, nota3, nota4);
    mostrarResultado(nome, matricula, media);
}

function calculo(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}

function mostrarResultado(nome, matricula, media) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>O aluno(a) ${nome} com matrícula ${matricula} tem ${media.toFixed(1)} de média.</p>`;
}
