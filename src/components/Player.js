import React from 'react';

const Player = ({ player }) => {
  // console.log(player);
  return (
    <div className='player-section'>
      {player.map((play) => {
        const { id, img, name, role } = play;
        return (
          <div className='players' key={id}>
            <div className='image-container'>
              <img src={img} alt='' />
            </div>
            <div className='name-container'>
              <h2>{name}</h2>
              <h5>{role}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Player;
