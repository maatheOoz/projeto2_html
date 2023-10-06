const form = document.getElementById('form');
const nomes = [];
const sobrenomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputSobrenome = document.getElementById('sobrenome-contato');
    const inputNumero = document.getElementById('numero-telefone');

    if (numeros.includes(inputNumero.value)) {
        alert(`O número: ${inputNumero.value} já está atribuído a um outro contato`);
    } else {
        numeros.push(inputNumero.value);
        nomes.push(parseFloat(inputNome.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputSobrenome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

inputNome.value = '';
inputSobrenome.value = '';
inputNumero.value = '';
}

function atualizaTabela() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}
