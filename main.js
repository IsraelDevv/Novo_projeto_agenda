function adicionarContato() {
    // Obter valores do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    // Validar se ambos os campos foram preenchidos
    if (nome && telefone) {
        // Criar uma nova linha na tabela
        var tabela = document.getElementById('tabelaContatos');
        var novaLinha = tabela.insertRow(-1);

        // Adicionar células com os dados do contato
        var celulaNome = novaLinha.insertCell(0);
        celulaNome.textContent = nome;

        var celulaTelefone = novaLinha.insertCell(1);
        celulaTelefone.textContent = telefone;

        // Limpar os campos do formulário após adicionar o contato
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    } else {
        alert('Por favor, preencha ambos os campos antes de cadastrar o contato.');
    }
}
