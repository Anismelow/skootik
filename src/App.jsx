import React, { useState, useEffect } from 'react';

function App() {
  const [manyUsers, setManyUsers] = useState([]);
  const [numUser, setNumUser] = useState(0);

  const URL_API_USERS = `https://randomuser.me/api/?results=${numUser}`;
  const URL_API = `https://randomuser.me/api/`;

  const handleManyUsers = async () => {
    try {
      const response = await fetch(URL_API_USERS);
      const data = await response.json();
      setManyUsers(data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleUser = async () => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      setManyUsers([data.results[0]]);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleManyUsers();
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Random Users</h1>

        <section className='flex justify-around'>

        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="number"
            value={numUser}
            onChange={(e) => setNumUser(e.target.value)}
            className="border rounded-md py-2 px-4 mr-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
          >
            GET USERS
          </button>
        </form>


        <button
          onClick={handleUser}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"        >
          GENERATE ONE USER
        </button>

        </section>

        <div className="container flex mt-40 flex-wrap justify-center">
  {manyUsers.length > 0 ? (
    manyUsers.map((user, index) => (
      <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img
          src={user.picture.thumbnail}
          alt={user.name.first}
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {user.name.first} {user.name.last}
          </div>
          <p className="text-gray-700 text-base">
            {user.email}
          </p>
        </div>
      </div>
    ))
  ) : (
    <p>Loading...</p>
  )}
</div>
      </div>
    </>
  );
}

export default App;
