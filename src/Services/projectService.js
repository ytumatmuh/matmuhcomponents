import axios from 'axios';

const BASE_API_URL = 'https://api.matmuh.yildizskylab.com/api/projects';

/**
 * Tüm projeleri alır.
 */
export const getProjects = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getProjects`);
    return response.data.data || []; // API'den gelen data yoksa boş dizi döner
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; // Hata durumunda boş bir dizi döner
  }
};

/**
 * Belirli bir projenin detaylarını alır.
 * @param {string} id - Proje ID'si
 */
export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getProjectById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching project by ID:', error);
    throw error; // Hata durumunda hata fırlatılır
  }
};
