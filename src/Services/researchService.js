import axios from 'axios';

const BASE_API_URL = 'https://api.matmuh.yildizskylab.com/api/researches';

/**
 * Tüm araştırmaları alır.
 */
export const getResearches = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getResearches`);
    return response.data.data || []; // API'den gelen data yoksa boş dizi döner
  } catch (error) {
    console.error('Error fetching researches:', error);
    return []; // Hata durumunda boş bir dizi döner
  }
};

/**
 * Belirli bir araştırmanın detaylarını alır.
 * @param {string} id - Araştırma ID'si
 */
export const getResearchById = async (id) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getResearchById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching research by ID:', error);
    throw error; // Hata durumunda hata fırlatılır
  }
};
