import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';

import Category from './components/Category';

import data from './data';

const App = () => {
  const [player, setplayer] = useState(data);

  const filterPlayer = (category) => {
    if (category === 'All') {
      setplayer(data);
    } else {
      const updatePlayer = data.filter((player) => {
        return player.category === category;
      });

      setplayer(updatePlayer);
    }
  };

  const teamMates = [
    'All',
    ...new Set(
      data.map((list) => {
        return list.category;
      })
    ),
  ];

  // console.log(teamMates);
  return (
    <div className='main-section'>
      <h1>India</h1>
      <Category teamMates={teamMates} filterPlayer={filterPlayer} />

      <Player player={player} />
    </div>
  );
};

export default App;
