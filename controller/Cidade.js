const Cidade = require('../../model/Cidade');

class CidadeController{
    criarCidade(Nome, SiglaEstado, KmQd){
        if(
            Nome ===undefined
            || SiglaEstado === undefined
            || KmQd === undefined
        ){
            throw new Error('Nome, estado e quilometragem são obrigatórios');
        }
        return new Cidade(Nome, SiglaEstado, KmQd);
    }

    buscarPorId(Id){

        if(id === undefined){
            throw new Error('Id é obrigatorio');
        }
        const cidade = Cidade.cidades.findIndex(u => u.Id === Id);

        if(cidades === -1) {
            throw new Error('Cidade não encontrada');
        }

        return cidade;
    }

    alterarCidade(Id, Nome, SiglaEstado, KmQd){
        if(
            Id === undefined||
            Nome === undefined ||
            SiglaEstado === undefined ||
            KmQd === undefined 
        ){
            throw new Error('O id da cidade é obrigatório.');
        }
        const index = this.buscar(Id);
        const cidade = new Cidade(Id, Nome, SiglaEstado, KmQd);
        Cidade.cidades[index] = cidade;
        return cidade;

    }
    deletarCidade(id){
        if(id === undefined){
            throw new Error('Deletar um ID é necessário');
        }
        
        const index = this.buscarPorId(id);
        Cidade.cidades.splice(index, 1);
        }
        listarCidades(){
            return Cidade.cidades;
        }
    
}

module.exports = CidadeController;