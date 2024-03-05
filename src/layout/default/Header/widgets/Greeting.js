import React, { useState, useEffect } from 'react';

function Greeting({name}) {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 4 && currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <div>
      <h4 style={{ color: 'black' }}>{greeting}, {name}</h4>
    </div>
  );
}

export default Greeting;
