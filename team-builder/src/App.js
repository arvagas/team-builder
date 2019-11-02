import React, { useState } from 'react'

import Form from './components/Form'
import TeamSelect from './components/TeamSelect'
import { Lambda, Arvingers } from './data/TeamList'

import Container from './styles/StyledContainer'
import Card from './styles/StyledCard'

function App() {
  const [teamList, setTeamList] = useState([Lambda, Arvingers])
  const [team, setTeam] = useState(Lambda)
  const [memberToEdit, setMemberToEdit] = useState(null)

  function editMember(user) {
    // For each person in team, check to see if they match memberToEdit (we check memberToEdit because it contains the original values before data is edited in form)
    // Grab the index as well to know the location of person in array
    team.map((person, index) => {
      if (person === memberToEdit) {
        // If true, create a copy of team; where person was matched, have its place equal to user; setTeam as the copy of team with edits
        const copyTeam = [...team]
        copyTeam[index] = user
        setTeam(copyTeam)
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
      <TeamSelect teamList={teamList}/>
    </Container>
  )
}

export default App;
