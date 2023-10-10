const form = document.getElementById('formulario');
const nomes = [];
const sobrenomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    adicionaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputSobrenome = document.getElementById('sobrenome-contato');
    const inputNumero = document.getElementById('numero-telefone');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputSobrenome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;

inputNome.value = '';
inputSobrenome.value = '';
inputNumero.value = '';
}

function atualizaTabela() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}

function adicionaTabela() {
    const numeros = adicionaTabela();
}