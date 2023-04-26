import axios from 'axios'

export const getNotas = async (user) => {
  const headers = {
    'Content-Type': 'text/plain',
    "Access-Control-Allow-Origin": "*"
};
    const resposta = await axios.get(
      `https://localhost:7023/Desempenho/${user}`,
      {
        headers
      }
    );
    if (!resposta.data)
      throw new Error(resposta.data.exception.errorMessage);
    return resposta.data;
  };


export default getNotas;
