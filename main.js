const form = document.getElementById('form-lista');
const imgTel = '<img src="./images/logo.png" alt="Telefone" />';
const nomeContato = [];
const numeroContato = [];

let linhas = '';

form.addEventListener('submit', function(e) {

        e.preventDefault();

        adicionaLinha();
        atualizaTabela();
        atualizaNumeroContatos();
    }
);

function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-telefone');


    if(nomeContato.includes(inputNomeContato.value)) {

        alert(`O Contato: ${inputNomeContato.value} já foi adicionado!!`);

    } else {
        
        nomeContato.push(inputNomeContato.value);
        numeroContato.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${imgTel}</td>`
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
};

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaNumeroContatos() {

    const contatos = adicionaTotalContatos(); 

    document.getElementById('total-contato').innerHTML = numeroContato.length;
};

function adicionaTotalContatos() {

    let adicionaContatos = 0;

    for(i = 0; i < numeroContato.length; i++) {
        adicionaContatos += numeroContato[i];
    }
    
    return adicionaContatos;
};