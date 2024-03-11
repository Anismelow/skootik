import React, { useState } from 'react';

function UserSearchForm({ onSubmit }) {
  const [numUser, setNumUser] = useState(0);
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ numUser, gender, nationality });
  };

  return (
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
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline"
      >
        GET USERS
      </button>
    </form>
  );
}

export default UserSearchForm;
