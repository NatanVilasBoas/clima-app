import instance from "../common/config/api";

const APIKEY = process.env.REACT_APP_ACCUWEATHER_API_KEY

const wheaterService = {
  buscarLocalCode: async (search) => {
    const response = await instance.get(`/locations/v1/cities/search?apikey=${APIKEY}&q=${search}&language=pt-br`);

    return response.data;
  },

  buscarClima: async (keyCity) => {
    const response = await instance.get(`currentconditions/v1/${keyCity}?apikey=${APIKEY}&language=pt-br&details=true`)

    return response.data
  }
}

export default wheaterService;