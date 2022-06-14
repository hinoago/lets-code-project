import {getPopulacaoBrasileira, getRegiao} from '../utils/request';
/*
getPopulacaoBrasileira().then(populacao =>{
    console.log(`Exemplo 1\nPopulação brasileira: ${populacao}`);
}).catch(err =>{
    console.log(err);
});

getRegiao(1).then(regiao =>{
    console.log(`Exemplo 2\nPopulação região norte: ${regiao}`);
})
*/
const regioes = {
  1:'Norte',
  2:'Nordeste',
  3:'Sudeste',
  4:'Sul',
  5:'Centro-Oeste'
}

const opcao = parseInt(String(prompt("Escolha uma das regiões do console")))

telaInicial(opcao)

function telaInicial(input: number){

  switch (input) {
    case 0:
      getPopulacaoBrasileira().then(populacao =>{
        console.log('-------------------------------------')
        console.log(`População brasileira: ${populacao}`);
        console.log('-------------------------------------')
    }).catch(err =>{
        console.log(err);
    });
      break;
  
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      getRegiao(input).then(regiao =>{
        console.log('-------------------------------------')
        console.log(`População da região ${regioes[input]}: ${regiao}`);
        console.log('-------------------------------------')
    })
      break;
    default:
      alert("Informe uma opção válida!")
  }
}

