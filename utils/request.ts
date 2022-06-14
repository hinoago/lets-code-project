interface Localidade{
  localidade: string;
  horario: string;
  projecao: Projecao
}

interface Projecao{
  populacao: number;
}

export const getPopulacaoBrasileira = async () =>{
  const response = await fetch('https://servicodados.ibge.gov.br/api/v1/projecoes/populacao');
  const pais: Localidade = await response.json();
  return pais.projecao.populacao;
}

export const getRegiao = async (regiao: number) =>{
  if(regiao != 0){
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/${regiao}`);
    const reg: Localidade = await response.json();
    return reg.projecao.populacao;
  }else{
    throw new Error("Valor de região inválido");
  }
}