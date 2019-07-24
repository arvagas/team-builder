import React, { useState, useEffect } from 'react'

const Form = ({team, setTeam, memberToEdit}) => {
    const [user, setUser] = useState({name:'', email:'', role:''})

    function handleSubmit(event) {
        event.preventDefault()
        setTeam([...team, user])
    }

    function handleChange(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value }
        setUser(updatedUser)
    }

    useEffect(() => {
        if (memberToEdit !== null) setUser(memberToEdit)
    })

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <legend>Add Team Member</legend>
            <label>
                Name:
                <input type="text" name="name" placeholder='Name:' value={user.name} onChange={handleChange}/>
            </label>

            <label>
                Email:
                <input type="text" name="email" placeholder='Email:' value={user.email} onChange={handleChange}/>
            </label>

            <label>
                Role:
                <input type="text" name="role" placeholder='Role:' value={user.role} onChange={handleChange}/>
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form