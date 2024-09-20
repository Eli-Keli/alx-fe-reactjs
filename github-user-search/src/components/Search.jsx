/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';


const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (username) => {
        setLoading(true);
        setError(null);
        setUserData(null);
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit} className="flex items-center space-x-3">
                <input
                    type="text"
                    placeholder="Search GitHub user"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            {loading && <p className="mt-4 text-blue-500">Loading...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}

            {userData && (
                <div className="mt-8 p-4 bg-white shadow-lg rounded-lg">
                    <img
                        src={userData.avatar_url}
                        alt={userData.login}
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                    />
                    <p className="text-xl font-semibold text-center">{userData.name || 'N/A'}</p>
                    <p className="text-gray-600 text-center">@{userData.login}</p>
                    <a
                        href={userData.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-4 text-blue-500 hover:underline"
                    >
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
