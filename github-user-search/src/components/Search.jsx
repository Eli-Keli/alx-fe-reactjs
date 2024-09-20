/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, repos });
  };

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Input */}
        <div>
          <input
            type="text"
            placeholder="Search GitHub user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Location Input */}
        <div>
          <input
            type="text"
            placeholder="Location (e.g., Nairobi)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Minimum Repos Input */}
        <div>
          <input
            type="number"
            placeholder="Minimum Repositories"
            value={repos}
            onChange={(e) => setRepos(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

