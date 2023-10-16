import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key':"9daea5803cmshe5063eb50a9e7dap1e30ebjsnf67c469cec1c",
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export  const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
