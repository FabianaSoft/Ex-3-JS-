function guardaPessoa() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var ano = document.getElementById("ano").value;
    var pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        ano: ano,
        concatenarNomes: function() {
            return this.nome + " " + this.sobrenome;
        }
    }
    document.getElementById("resultado").innerHTML = pessoa.concatenarNomes();
    
}