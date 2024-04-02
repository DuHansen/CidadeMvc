class Cidade{
    static cidades = [];

    
    constructor(Id, Nome, SiglaEstado, KmQd){
    this.Id = Id;
    this.Nome = Nome;
    this.SiglaEstado = SiglaEstado;
    this.KmQd = KmQd;

    if(!Id){
        let generateId = 0;
        for(const cidade of Cidade.cidades){
            if(cidades.Id > Id){
                generateId = cidade.Id;
            }
        }
        this.Id = generateId + 1
        Cidade.cidades.push(this);
    }else{
        this.Id = Id;
    }
}}
module.exports = Cidade;
Cidade.cidades.push(new Cidade( 1, 'Joinville', 'sc', 56));