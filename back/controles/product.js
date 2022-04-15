const Vendas = require('./models/index')

module.exports = app => {
    app.get('/produto', function(req, res){
        res.send("rota GET de produto");
    });
    app.post('/produto', function(req, res){
       
        const vendas = req.body
        Vendas.adiciona(vendas)
        res.send('rota POST produto');
    });
}