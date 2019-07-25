import React, { useState } from 'react'

import Form from './Form'
import { TeamList } from './TeamList'

import Container from './styles/StyledContainer'
import Card from './styles/StyledCard'

function App() {
  const [team, setTeam] = useState(TeamList)
  const [memberToEdit, setMemberToEdit] = useState(null)

   
  function editMember(user) {
    // For each person in team, check to see if they match memberToEdit
    team.map((person, index) => {
      if (person === memberToEdit) {
        // If true, create a copy of team; where person was matched, have its place equal to user; setTeam as the copy of team with edits
        const copy = team
        copy[index] = user
        setTeam(copy)
      }
    })
  }

  return (
    <Container>
      <Form team={team} setTeam={setTeam} memberToEdit={memberToEdit} setMemberToEdit={setMemberToEdit} editMember={editMember}/>
      {/* For each person in team, create a card component, then create elements that contains person's data */}
      {team.map((person, index) => (
        <Card key={index}>
          <h1>{person.name}</h1>
          <h3>{person.email}</h3>
          <p>{person.role}</p>
          {/* On click, setMemberToEdit as the person associated with the edit button */}
          <button onClick={() => setMemberToEdit(person)}>Edit</button>
        </Card>
      ))}
    </Container>
  )
}

export default App;
