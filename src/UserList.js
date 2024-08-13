import React, { useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch('https://my-api-lemon.vercel.app/api/users');
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <div>
      <h1>User List</h1>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>
      <button onClick={clearUsers}>Clear Users</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;