import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GitHubInfoCard = ({ username }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [username]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={user.avatar_url} alt={user.login} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-gray-700 text-base">
          {user.bio}
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Followers: {user.followers}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Following: {user.following}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Repos: {user.public_repos}
        </span>
      </div>
    </div>
  );
};

export default GitHubInfoCard;
