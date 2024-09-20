/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
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
            setError('Looks like we can’t find the user.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">GitHub User Search</h1>
            <Search onSearch={handleSearch} />

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

export default App;
