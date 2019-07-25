import React, { useState, useEffect } from 'react'

import FormCSS from './styles/StyledForm'
import LegendCSS from './styles/StyledLegend'

const Form = ({team, setTeam, memberToEdit, setMemberToEdit, editMember}) => {
    const [user, setUser] = useState({name:'', email:'', role:''})

    function handleSubmit(event) {
        event.preventDefault()
        if (memberToEdit === null) {
            // setTeam grabs ALL of the old team data, and then appends new user
            setTeam([...team, user])
            // Resets user inputs 
            setUser({name:'', email:'', role:''})
        }
        else {
            // Runs function from App.js
            editMember(user)
            // Resets memberToEdit to default value of null, reset user inputs
            setMemberToEdit(null)
            setUser({name:'', email:'', role:''})
        }
    }

    function handleChange(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value }
        setUser(updatedUser)
    }

    useEffect(() => {
        // If there is something inside memberToEdit other than null, user inputs are filled with data from memberToEdit
        if (memberToEdit !== null) setUser(memberToEdit)
    },[memberToEdit])

    return (
        <FormCSS onSubmit={event => handleSubmit(event)}>
            <LegendCSS>{memberToEdit === null ? `Add` : `Edit`} Team Member</LegendCSS>
            <label>
                Name:
                <input type="text" name="name" placeholder='John Doe' value={user.name} onChange={handleChange}/>
            </label>

            <label>
                Email:
                <input type="text" name="email" placeholder='example@gmail.com' value={user.email} onChange={handleChange}/>
            </label>

            <label>
                Role:
                <input type="text" name="role" placeholder='Supreme Overlord' value={user.role} onChange={handleChange}/>
            </label>
            <button>Submit</button>
        </FormCSS>
    )
}

export default Form