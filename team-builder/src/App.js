import React, { useState } from 'react'

import Form from './Form'
import { TeamList } from './TeamList'

import './App.css'

function App() {
  const [team, setTeam] = useState(TeamList)

  return (
    <div className="App">
      <Form team={team} setTeam={setTeam} />
      {console.log('Team: ', team)}
      {team.map(person => (
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
