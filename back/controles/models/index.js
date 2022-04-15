const res = require('express/lib/response');
const conexao = require('../infra/conexao');

class Vendas{
    adiciona(variavel, res){
       
        

       /* const nomeValido = variavel.nome.length >= 3

        const validacoes = [
            {
                nome: 'cliente nome',
                valido: nomeValido,
                mensagem: 'Nome do cliente deve conter mais de 3 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => campo.valido)

        if(erros.length > 0){
            res.status(400).json(erros)
        }
        else{
            conexao.query(sql, variavel, (erro, resultados) =>{
                if(erro){
                    res.status(400).json(erro);
                }
                else{
                    res.status(200).json(resultados);
                }
            })
        }*/
        const sql = 'INSERT INTO Usuarios SET ?';
        conexao.query(sql, variavel, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(200).json(resultados);
            }

        })
    }
    lista(res) {
        const sql = 'SELECT * FROM Usuarios'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }
    buscaPorNome(nome, res) {
        const sql = `SELECT * FROM Usuarios WHERE nome=${nome}`

        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
        })
    }
    altera(id, valores, res) {
             
        const sql = 'UPDATE Usuarios SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }
    
}

module.exports = new Vendas