import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      
  }, []);

  return (
    
    <ul>
      {listOfUsers.map(user => (
        <li key={user.id} className='list'>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;