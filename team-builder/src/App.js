import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [team, setTeam] = useState([
  {
    name: 'Adnan',
    placeholder: 'yes',
  },
  {
    name: 'Arvin',
    placeholder: 'yes',
  },
  {
    name: 'Darien',
    placeholder: 'yes',
  },
  {
    name: 'Jade',
    placeholder: 'yes',
  },
  {
    name: 'Joshua',
    placeholder: 'yes',
  },
  {
    name: 'Landry',
    placeholder: 'yes',
  },
  {
    name: 'Luis',
    placeholder: 'yes',
  },
  {
    name: 'Mike',
    placeholder: 'yes',
  },
  {
    name: 'Zachary',
    placeholder: 'yes',
  },
])

  return (
    <div className="App">
      {team.map(person => (
        <div>{person.name}</div>
      ))}
    </div>
  );
}

export default App;
