import React,{useEffect, useState} from 'react';

import './App.css';
import Users from './Components/Users/Users';

function App() {

  const [users, setUsers] = useState([]);
  const [member, setMember] = useState([]);

  useEffect(()=>{
    fetch('https://randomuser.me/api?results=100')
    .then(res => res.json())
    .then(data => {setUsers(data.results);
      // console.log(data.results)
    })
  }, [])

  const addmember = (name) => {
      const newMember = [...member, name];
      setMember(newMember);
  }
  return (
    <div className="App">
      <h1>Team Builder</h1>
      <h4>Added New Name: {member}</h4>
      {
        users.map(user => <Users user={user} addmember={addmember}></Users> )
      }
    </div>
  );
}

export default App;
