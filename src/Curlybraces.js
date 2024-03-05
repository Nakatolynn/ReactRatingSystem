import React from 'react'

export default function Curlybraces() {
    const person = {
        name: 'Gregorio Y. Zara',
        theme: {
          backgroundColor: 'pink',
          color: 'purple'
        },
        profession:'Computer scientist'
      };
    return (
        <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <h2>{person.profession}</h2>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    )
}


