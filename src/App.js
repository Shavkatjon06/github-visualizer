import React, { useState } from 'react';
import fetchUserData from './utils/fetch.service.js';
import ProfileCard from './components/profile.card.js';
import RepoChart from './components/repos.chart.js';
import NotFound from './components/not.found.js';

const App = () => {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const recentSearches = ["Shavkatjon06", "azimjohn"]

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchUserData(username);
      setProfile(data.profile);
      setRepos(data.repos);
      setUsername('')
    } catch (err) {
      setError('User not found')
      setProfile(null)
      setRepos([])
      setUsername('')
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">GitHub Profile Visualizer</h1>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="p-2 border rounded-md outline-none"/>
        <button disabled={loading} onClick={handleSearch} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md">
          Search
        </button>
      </div>
      {recentSearches.length > 0 && (
        <ul className='flex gap-2 items-center my-2'>
          {recentSearches.map((search, index) => (
            <li key={index} className="mb-1 cursor-pointer text-blue-500 hover:underline"
                onClick={() => setUsername(search)}>
              {search}
            </li>
          ))}
        </ul>
      )}
      {error && <NotFound />}
      {profile && (
        <div className={`w-full max-w-xl ${loading && 'blur-sm'}`}>
          <ProfileCard {...profile} />
          <h2 className="text-2xl font-bold mt-6 mb-4">Top Repositories</h2>
          <RepoChart repos={repos} />
        </div>
      )}
    </div>
  );
};

export default App