import React, { useState } from 'react';
import UserSearchForm from './components/UserSearchForm';
import UserList from './components/UserList';

function App() {
  const [manyUsers, setManyUsers] = useState([]);

  const handleSearchSubmit = async ({ numUser, gender, nationality }) => {
    const URL_API_USERS = `https://randomuser.me/api/?results=${numUser}&gender=${gender}&nat=${nationality}&page=1`;
    try {
      const response = await fetch(URL_API_USERS);
      const data = await response.json();
      setManyUsers(data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Random Users</h1>
        <UserSearchForm onSubmit={handleSearchSubmit} />
        <UserList users={manyUsers} />
      </div>
    </>
  );
}

export default App;
