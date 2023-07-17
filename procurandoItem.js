const nomes = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const nomeseMedias = [nomes, medias];

function exibeNomeENota (aluno){
    if (nomeseMedias[0].includes(aluno)) {
        const indice = nomeseMedias[0].indexOf(aluno);
        const mediaAluno = nomeseMedias[1][indice];
        console.log(`O aluno ${aluno}, tirou a média de: ${mediaAluno}.` );
        } else{
            console.log(`O aluno ${aluno} não esta cadastrado`)
            
        
    }
}

exibeNomeENota('Artur')