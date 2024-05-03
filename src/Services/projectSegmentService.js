// AnnouncementService.js
import axios from 'axios';

const API_URL = 'https://matmuhbackend.onrender.com/api/projects/getProjects/3';

const getSegmentProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data || []; // Return an empty array if response.data.data is falsy
  } catch (error) {
    console.error('Error fetching Projects:', error);
    return []; // Return an empty array in case of error
  }
};

export default getSegmentProjects;
