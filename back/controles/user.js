const Vendas = require('./models/index')

module.exports = app => {
    app.get('/usuario', function(req, res){
        res.send("rota GET de usuário");
    });
    app.post('/usuario', function(req, res){
        const vendas = req.body
        Vendas.adiciona(vendas,res)
    });
    app.patch('/altera/usuario/:id',(req,res) => {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Vendas.altera(id, valores, res)

    })
}