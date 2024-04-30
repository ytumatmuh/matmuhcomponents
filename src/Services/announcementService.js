// AnnouncementService.js
import axios from 'axios';

const API_URL = 'https://matmuhbackend.onrender.com/api/announcements/getAnnouncements';

const getAnnouncements = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data; // Extracting the data from the response
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return []; // Return an empty array in case of error
  }
};

export default getAnnouncements;
