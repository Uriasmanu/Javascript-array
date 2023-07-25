const alunos = ['ana Julia','Caio vinicius','BIA silva'];
const medias = [10, 7.5, 5 ];

const reprovados = alunos.filter((aluno, indice) => {
    return (medias[indice] < 7); // retorna true 
});

console.log(reprovados);
