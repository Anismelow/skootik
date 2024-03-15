/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'; // Importar useState desde React

// Definir UserDetails fuera de UserList
function UserDetails({ user }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // Formato: DD/MM/YYYY
  };

  return (
    <div>
      <div>
        <button className='bg-blue-300 py-2 px-4 border rounded-md text-center' onClick={toggleShowMore}>
          {showMore ? 'Ocultar detalles' : 'Mostrar más datos'}
        </button>
      </div>
      {showMore && (
        <div className='mas_datos flex mt-10 flex-col w-fit'>
          <h2 className='text-2xl text-center font-bold'>User Details</h2>
          <p className='text-lg mb-2 mt-4'><span className='font-bold'>Name:</span> {user.name.first} {user.name.last}</p>
          <p className='text-lg mb-2'><span className='font-bold'>Gender:</span> {user.gender}</p>
          <p className='text-lg mb-2'><span className='font-bold'>Email:</span> {user.email}</p>
          <p className='text-lg mb-2'><span className='font-bold'>Phone:</span> {user.phone}</p>
          <p className='text-lg mb-2'><span className='font-bold'>Location:</span> {user.location.city}, {user.location.state}, {user.location.country}</p>
          <p className='text-lg mb-2'><span className='font-bold'>DOB:</span>  {formatDate(user.dob.date)}</p>
          <p className='text-lg mb-2'><span className='font-bold'>Age:</span> {user.dob.age}</p>
        </div>
      )}
    </div>
  );
}

function UserList({ users }) {
  return (
    <div className="container flex mt-40 flex-wrap justify-center">
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img src={user.picture.large} alt={user.name.first} className="w-full" />
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
            {/* Renderizar UserDetails con el usuario actual */}
            <UserDetails user={user} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default UserList;
