import axios from 'axios';

const BASE_API_URL = 'https://api.matmuh.yildizskylab.com/api/announcements';

/**
 * Tüm duyuruları alır.
 */
export const getAnnouncements = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getAnnouncements`);
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return [];
  }
};

/**
 * Belirli bir duyurunun detaylarını alır.
 * @param {string} id - Duyuru ID'si
 */
export const getAnnouncementById = async (id) => {
  try {
    const response = await axios.get(`${BASE_API_URL}/getAnnouncementById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching announcement by ID:', error);
    throw error;
  }
};
