function adicionarItem(){
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value; 
    var quantidade = document.getElementById("quantidade").value; 

    //validar se os inputs nao estao vazios
    if(!nome || !valor || !quantidade ){
        alert("preencha todos os inputs")
        return;
    }

    //CRIAR A LINHA DA TABELA E PREENCHER COM O VALOR DIGITADO
    //primeira linha da tabela [0]
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    var novalinha = tabela.insertRow(tabela.rows.length);

    var celulaNome = novalinha.insertCell(0)
    var celulaValor = novalinha.insertCell(1)
    var celulaQuantidade = novalinha.insertCell(2)

    celulaNome.innerHTML = nome;
    celulaValor.innerHTML = valor
    celulaQuantidade.innerHTML = quantidade

    document.getElementById("nome").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
}

function exportarParaExcel(){
    var tabela = document.getElementById ("tabela");
    var nomeArquivo = "tabela_de_produtos.xlsx";
    var wb = XLSX.utils.table_to_book(tabela,{sheet: "Tabela de produtos"});
    XLSX.writeFile(wb, nomeArquivo);
}