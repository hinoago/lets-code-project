import { getPopulacaoBrasileira, getRegiao } from '../utils/request';
import { graph } from '../utils/graph';

const container = document.getElementById("container");
const button = document.getElementById("btn_find");
const option = <HTMLInputElement> document.getElementById("option");

if(button == null || option == null){
  throw new Error("Botão não encontrado");
}

button.addEventListener("click", () =>{
  if(container == null){
    return;
  }
  
  let leng = container.children.length;
  for(let i = 0; i < leng; i++){
    container.children[0].remove();
  }

  const value = option.value;
  telaInicial(parseInt(value));
  option.value = "";
})

function telaInicial(input: number){
  if(container != null){
    const formater: Intl.NumberFormat = new Intl.NumberFormat();

    switch (input) {
      case 0:
      getPopulacaoBrasileira().then(populacao =>{
        const pop = document.createElement("p");
        pop.textContent = "População: " + formater.format(populacao);
        container.appendChild(graph(100));
        container.appendChild(pop);
      });
        break;
    
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        getRegiao(input).then(regiao =>{
          getPopulacaoBrasileira().then(populacao =>{
            if(container != null){
              const total = Math.round((regiao/populacao)*100);
              container.appendChild(graph(total));
              const pop = document.createElement("p");
              pop.textContent = "População: " + formater.format(regiao) + "(" + total.toString() + "%)";
              container.appendChild(pop);
            }
          });
      });
        break;

      default:
        alert("Informe uma opção válida!")
    }
  }
}

