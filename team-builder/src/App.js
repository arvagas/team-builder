import React, { useState } from 'react'

import Form from './Form'
import './App.css'

function App() {
  const [team, setTeam] = useState([
  {
    name: 'Adnan',
    email: 'adnan@lambda.com',
    role: 'Front-End',
  },
  {
    name: 'Darien',
    email: 'darien@lambda.com',
    role: 'UI',
  },
  {
    name: 'Jade',
    email: 'jade@lambda.com',
    role: 'Back-End',
  },
  {
    name: 'Joshua',
    email: 'joshua@lambda.com',
    role: 'Front-End',
  },
  {
    name: 'Landry',
    email: 'landry@lambda.com',
    role: 'Front-End',
  },
  {
    name: 'Luis',
    email: 'luis@lambda.com',
    role: 'Back-End',
  },
  {
    name: 'Zachary',
    email: 'zachary@lambda.com',
    role: 'Back-End',
  },
])

  return (
    <div className="App">
      <Form team={team} setTeam={setTeam} />
      {console.log('Team: ', team)}
      {team.map((person, index) => (
        <div key={person.name}>
          <h1>{person.name}</h1>
          <h3>{person.email}</h3>
          <p>{person.role}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
