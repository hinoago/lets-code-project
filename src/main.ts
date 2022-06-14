import {getPopulacaoBrasileira, getRegiao} from '../utils/request';

getPopulacaoBrasileira().then(populacao =>{
    console.log(`Exemplo 1\nPopulação brasileira: ${populacao}`);
}).catch(err =>{
    console.log(err);
});

getRegiao(1).then(regiao =>{
    console.log(`Exemplo 2\nPopulação região norte: ${regiao}`);
})