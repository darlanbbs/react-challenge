import axios from "axios";

export const getData = async () => {
  const response = await axios.get("https://app.olimpiadas.app/teste");
  if (!response.data.success)
    return `Erro ao buscar dados da API: ${response.data.error}`;
  return response.data.data;
};
