// AnnouncementService.js
import axios from 'axios';

const API_URL = 'https://matmuhbackend.onrender.com/api/announcements/getAnnouncements/2';

const getAnnouncements = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data || []; // Return an empty array if response.data.data is falsy
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return []; // Return an empty array in case of error
  }
};

export default getAnnouncements;
