module.exports = {
    show(req,res){
        if(req.query.user == 'syscoin' && req.query.password == 'meEscolhe' ){
            return  res.status(200).json({"mensagem": "Meu nome completo é Caio Oliveira. Eu quero essa vaga!"});
          } else {
              return res.status(200).json({"mensagem": "Credenciais erradas."});
          }
    }

};