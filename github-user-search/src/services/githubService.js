// services/githubService.js
import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

// Fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    // Make GET request to GitHub API to fetch user data
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`, // Include API key if necessary
      },
    });
    return response.data; // Return the user data
  } catch (error) {
    console.error('Error fetching user data:', error); // Log error if the request fails
    throw error; // Propagate the error to be handled by the calling function
  }
};

/*import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
    const query = `${username ? `user:${username}` : ''}${location ? ` location:${location}` : ''}${minRepos ? ` repos:>${minRepos}` : ''}`;
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items; // Return the array of user data
};*/





