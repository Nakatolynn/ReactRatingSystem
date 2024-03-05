import React from 'react'

function RenderingList({port,size}) {
    const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
      ];

      
const listItems= people.map(person=><li>{person}</li>)
    return (
        <>
          <ul>
            {listItems}

          </ul>
        </>
    )
}

export default RenderingList
