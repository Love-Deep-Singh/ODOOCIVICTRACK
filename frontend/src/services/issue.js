import axios from 'axios';

export const createIssue = async (data) => {
  const response = await axios.post('/issues', data);
  return response.data;
};

export const getNearbyIssues = async ({ lat, lng, distance  }) => {
    console.log("Fetching nearby issues for coordinates:", { lat, lng, distance });
  const response = await axios.get('http://localhost:3000/api/issues/nearby', {
    params: {
      lat,
      lng,
      distance,

    },
  });
  console.log("Nearby issues fetched:", response.data);
  return response.data;
};