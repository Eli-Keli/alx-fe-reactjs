/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

const App = () => {
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

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">GitHub User Search</h1>
            <Search onSearch={handleSearch} />

            {loading && <p className="mt-4 text-blue-500">Loading...</p>}
            {error && <p className="mt-4 text-red-500">{error}</p>}

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

export default App;
