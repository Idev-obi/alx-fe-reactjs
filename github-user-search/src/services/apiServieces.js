// services/apiService.js
const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
const BASE_URL = 'https://api.github.com';

export const fetchUser = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
};
