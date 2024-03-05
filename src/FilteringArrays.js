import React from 'react'

export default function FilteringArrays() {

    const filteredProfessions=[
        {
            id: 0,
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
          }, {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
          }, {
            id: 2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
          }, {
            name: 'Percy Lavon Julian',
            profession: 'chemist',  
          }, {
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
          }

    ];
    //apply the filter
const chemist = filteredProfessions.filter(person=>person.profession==='chemist');

//map over the filter
const listItems = chemist.map(person =>
    <li>
       <p>
         <b>{person.name}:</b>
         {' ' + person.profession + ' '}
         known for {person.accomplishment}
       </p>
    </li>
  );
    return (
        <>
        <ul>
            {listItems}
        </ul>
        
        </>
    )
};
