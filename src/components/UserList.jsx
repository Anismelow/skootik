import React from 'react';

function UserList({ users }) {
  return (
    <div className="container flex mt-40 flex-wrap justify-center">
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img src={user.picture.thumbnail} alt={user.name.first} className="w-full" />
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
  );
}

export default UserList;
