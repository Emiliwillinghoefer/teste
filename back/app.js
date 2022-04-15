const customExpress = require('./config/costumExpress');
const conexao = require('./controles/infra/conexao')
const Tabelas = require('./controles/infra/tabelas')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    }
    else {
        console.log('conectado com sucesso')
        Tabelas.init(conexao)
        const app = customExpress();
        app.listen(3000, function(){
            console.log("app executando na porta 3000");
        });
    }
})

