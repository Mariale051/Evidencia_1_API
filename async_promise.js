const axios = require('axios');

const url = 'https://www.fruityvice.com/api/fruit/all';

axios.get(url)
  .then((response) => {
    const frutas = response.data;

      console.log('Lista de Frutas:');
      frutas.forEach((fruta, index) => {
        console.log(`  ${index + 1}. Nombre: ${fruta.name}`);
        console.log('     °°°°°°°°°°°°°');
      });
    })
  .catch((error) => {
    console.error('Error', error);
  });
