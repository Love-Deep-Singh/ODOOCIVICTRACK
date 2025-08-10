import axios from 'axios';

const token = localStorage.getItem('token');
export const createIssue = async (data, token) => {
  const response = await axios.post('http://localhost:3000/api/issues', data, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
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
export const getIssueById = async (id) => {
  console.log("Fetching issue by ID:", id);
  const response = await axios.get(`http://localhost:3000/api/issues/${id}`);
  console.log("Issue fetched:", response.data);
  return response.data;
}
export const updateStatus = async (id, status,reportedBy) => {
  console.log("Updating issue status:", { id, status });
  const response = await axios.patch(`http://localhost:3000/api/issues/${id}/status`, { status,reportedBy }, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  console.log("Issue status updated:", response.data);
  return response.data;
}