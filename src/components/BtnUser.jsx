import React, { useState, useEffect } from "react";

function BtnUser() {
  const [user, setUser] = useState([]);

  const URI_API = "https://randomuser.me/api/";

  
    const handleGenerateUser = async () => {
        const response = await fetch(URI_API);
        const data = await response.json();
        setUser(data.results);
        console.log(data.results);
        
    };

    useEffect(() => {
        handleGenerateUser();
    },[setUser])


  return (
    <section>
      <button onClick={handleGenerateUser}  className="border rounded-md py-2 px-4 cursor-pointer bg-blue-500 text-white">
        Generar un usuario
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {user.map((item) => {
    return (
      <div key={item.login.uuid} className="bg-gray-100 rounded-lg p-4">
        <img src={item.picture.large} alt="user" className="w-45 rounded-lg mb-2" />
        <p className="text-lg font-bold">{item.name.first} {item.name.last}</p>
        <p className="text-gray-600">{item.email}</p>
        <p className="text-gray-600">{item.phone}</p>
      </div>
    );
  })}
</div>

    </section>
  );
}

export default BtnUser;
