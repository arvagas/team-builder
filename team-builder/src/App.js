import React, { useState } from 'react'

import Form from './Form'
import { TeamList } from './TeamList'

import Container from './styles/StyledContainer'
import Card from './styles/StyledCard'

function App() {
  const [team, setTeam] = useState(TeamList)
  const [memberToEdit, setMemberToEdit] = useState(null)

  function editMember(user) {
    team.map((person, index) => {
      if (person === memberToEdit) team[index] = user
    })
  }

  return (
    <Container>
      <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} editMember={editMember}/>
      {team.map((person, index) => (
        <Card key={index}>
          <h1>{person.name}</h1>
          <h3>{person.email}</h3>
          <p>{person.role}</p>
          <button onClick={() => setMemberToEdit(person)}>Edit</button>
        </Card>
      ))}
    </Container>
  )
}

export default App;
