import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    const profile = await axios.get(`https://api.github.com/users/${username}`)
    const repos = await axios.get(`https://api.github.com/users/${username}/repos`)
    return { profile: profile.data, repos: repos.data }
  } catch (error) {
    throw new Error('Failed to fetch GitHub data');
  }
}

export default fetchUserData