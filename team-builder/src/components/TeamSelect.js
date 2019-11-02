import React from 'react'

import styled from 'styled-components'

const TeamSelectCSS = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    margin: 20px;
`

const TeamSelect = ({teamList}) => {

    return (
        <TeamSelectCSS>
            {teamList.map(team => (
                <div>
                    <p>{team[0].name}'s Team</p>
                </div>
            ))}
        </TeamSelectCSS>
    )
}

export default TeamSelect