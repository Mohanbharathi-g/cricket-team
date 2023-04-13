import React from 'react';

const category = ({ teamMates, filterPlayer }) => {
  console.log(filterPlayer);
  return (
    <div className='category-section'>
      <div className='list-container'>
        {teamMates.map((mates, index) => {
          return (
            <button key={index} onClick={() => filterPlayer(mates)}>
              {mates}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default category;

// import React from 'react';

// const category = ({ team, filterPlayer }) => {
//   // console.log(team);
//   return (
//     <div className='category-section'>
//       <div className='list-container'>
//         {team.map((india, index) => {
//           return (
//             <button key={index} onClick={filterPlayer(india)}>
//               {india}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default category;
