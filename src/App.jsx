import React, { useState } from "react";

function App() {
  const [manyUsers, setManyUsers] = useState([]);
  const [numUser, setNumUser] = useState(0);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [page, setPage] = useState(1);

  const URL_API_USERS = `https://randomuser.me/api/?results=${numUser}&gender=${gender}&nat=${nationality}&page=${page}`;

  const handleManyUsers = async () => {
    try {
      const response = await fetch(URL_API_USERS);
      const data = await response.json();
      setManyUsers(data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPage(1);
    await handleManyUsers(); // Espera a que se completen la carga de los usuarios
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Random Users</h1>

        <form onSubmit={handleSubmit} className="mb-4 flex justify-center">
          <input
            type="number"
            value={numUser}
            onChange={(e) => setNumUser(e.target.value)}
            className="border rounded-md py-2 px-4 mr-2"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border rounded-md py-2 px-4 mr-2"
          >
            <option value="">Any gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            className="border rounded-md py-2 px-4 mr-2"
          >
            <option value="">Any nationality</option>
            <option value="AU">Australia</option>
            <option value="BR">Brazil</option>
            <option value="CA">Canada</option>
            <option value="CH">Switzerland</option>
            <option value="DE">Germany</option>
            <option value="DK">Denmark</option>
            <option value="ES">Spain</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
          </select>
          <button
            type="submit" // Agregamos el tipo submit al botón para enviar el formulario
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
          >
            GET USERS
          </button>
        </form>

        <div className="container flex mt-40 flex-wrap justify-center">
          {manyUsers.length > 0 ? (
            manyUsers.map((user, index) => (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden shadow-lg m-4"
              >
                <img
                  src={user.picture.thumbnail}
                  alt={user.name.first}
                  className="w-full"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {user.name.first} {user.name.last}
                  </div>
                  <p className="text-gray-700 text-base">{user.email}</p>
                  <p className="text-gray-700 text-base">
                    {user.location.city}, {user.location.country}
                  </p>
                  <p className="text-gray-700 text-base">{user.phone}</p>
                  <p className="text-gray-700 text-base">{user.dob.age} years</p>
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
