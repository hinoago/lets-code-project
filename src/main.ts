/*import {getPopulacaoBrasileira, getRegiao} from '../utils/request';

getPopulacaoBrasileira().then(populacao =>{
    console.log(`Exemplo 1\nPopulação brasileira: ${populacao}`);
}).catch(err =>{
    console.log(err);
});

getRegiao(1).then(regiao =>{
    console.log(`Exemplo 2\nPopulação região norte: ${regiao}`);
})
*/


export { }

console.log(`Escolha uma das regiões do console:\n`,
  `0. Brasil\n`,
  `1. Norte\n`,
  `2. Norderte\n`,
  `3. Sudeste\n`,
  `4. Sul\n`,
  `5. Centro-Oeste\n`)

const opcao = parseInt(String(prompt("Escolha uma das regiões do console")))

switch (opcao) {
  case 0:
    //função com população filtrada
    break;
  case 1:

    break;
  case 2:

    break;
  case 3:

    break;
  case 4:

    break;
  case 5:

    break;

  default:
    alert("Informe uma opção válida!")
}
