const notas = [10, 6.5, 8, 9.5];

const notaAtualizada = notas.map( (nota) =>{
    // Se a nota +1 for maior ou igual a 10 ele recebe 10 se não nota soma +1
    return nota +1 >= 10 ? 10 : nota +1;
});

console.log(notaAtualizada);