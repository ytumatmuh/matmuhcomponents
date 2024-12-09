import axios from 'axios';

const BASE_API_URL = 'https://api.matmuh.yildizskylab.com/api/lectures';

/**
 * Tüm dersleri alır.
 */
export const getLectures = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getLectures`);
    return response.data.data || []; // API'den gelen data yoksa boş dizi döner
  } catch (error) {
    console.error('Error fetching lectures:', error);
    return []; // Hata durumunda boş bir dizi döner
  }
};

/**
 * Belirli bir dersin detaylarını alır.
 * @param {string} id - Ders ID'si
 */
export const getLectureById = async (id) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getLectureById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lecture by ID:', error);
    throw error; // Hata durumunda hata fırlatılır
  }
};
