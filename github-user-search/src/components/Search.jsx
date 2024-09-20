/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [repos, setRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (searchParams) => {
        setLoading(true);
        setError(null);
        setUserData([]);
        try {
            const data = await fetchUserData(searchParams);
            setUserData(data);
        } catch (error) {
            setError('Looks like we can’t find any users.');
        } finally {
            setLoading(false);
        }
    };

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

            {/* Display multiple users */}
            {userData.length > 0 && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userData.map((user) => (
                        <div key={user.id} className="p-4 bg-white shadow-lg rounded-lg">
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <p className="text-xl font-semibold text-center">{user.login}</p>
                            <p className="text-gray-600 text-center">
                                {user.location || 'Location not available'}
                            </p>
                            <p className="text-gray-600 text-center">
                                Repositories: {user.public_repos || 'N/A'}
                            </p>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center mt-4 text-blue-500 hover:underline"
                            >
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;

