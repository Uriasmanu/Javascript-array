/*const nomes = ['João', 'Juliana', 'Caio', 'Ana'];
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

exibeNomeENota('Artur')*/

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");