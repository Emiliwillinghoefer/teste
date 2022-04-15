class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarUsuario()
        this.criarProdutos()
    }

    criarUsuario() {
        const sql = 'CREATE TABLE IF NOT EXISTS Usuarios (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, endereco varchar(40), email varchar(50) NOT NULL, numero  int NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
    criarProdutos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, descrição varchar(40), valor float NOT NULL, estoque int NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
    
    criarRegistro() {//não implementada
        const sql = 'CREATE TABLE IF NOT EXISTS Registros (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, endereço varchar(40), email varchar(20) NOT NULL, numero  int NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas