/*import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width="100" />
          <h3>{userData.name}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;*/

import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUsers([]);

        try {
            const data = await fetchUserData(username, location, minRepos);
            setUsers(data);
        } catch (err) {
            setError("Looks like we can't find any users matching your criteria");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-component p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="username"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    value={location}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                />
                <input
                    type="number"
                    name="minRepos"
                    placeholder="Minimum repositories"
                    value={minRepos}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {users.length > 0 && (
                <div className="user-info mt-4">
                    {users.map(user => (
                        <div key={user.id} className="border rounded p-4 mb-4">
                            <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
                            <h2>{user.name || user.login}</h2>
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Public Repos: {user.public_repos}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;

