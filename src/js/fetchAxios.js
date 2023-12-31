import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40207022-3419c72a3f77a39584f0c1b04';

// const getData = {
//   key: `${API_KEY}&`,
//   q: `${name}`,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: 'true',
//   page: 1,
//   per_page: 40,
// };

// async function fetchImage() {
//   try {
//     const data = await axios.get(`${BASE_URL}?${getData}`);

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function fetchImage(name, page = 1, limit = 40) {
  try {
    const data = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${limit}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}

export { fetchImage };
