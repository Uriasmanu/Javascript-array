const notas = [10, 6.5, 8, 7.5];
let n = notas.length;
let sum = 0;


for(let i = 0; i<n; i++){
    sum += notas[i];
}

const media = sum/n;

console.log(media);