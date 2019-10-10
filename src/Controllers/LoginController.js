module.exports = {
    show(req,res){
        if(req.query.user == 'syscoin' && req.query.password == 'meEscolhe' ){
            return  res.json({"mensagem": "Meu nome completo é Caio Oliveira. Eu quero essa vaga!"});
          } else {
              return res.json({"mensagem": "Credenciais erradas."});
          }
    }

};