/* eslint-disable no-unused-vars */
import axios from "axios";

const GITHUB_API_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    // Build the query string
    let query = username ? `${username}` : "";

    // Append location and repos count if provided
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+minRepos:>=${minRepos}`;

    const response = await axios.get(`${GITHUB_API_URL}${query}`);

    return response.data.items; // API returns an array of users
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};
