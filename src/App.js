import React from 'react'

import './styles/main.css';

import backgroundImage from './assets/background.png'
import pokedex from './assets/pokedex.png'

// import background from './assets/background.png'

// function App() {
//   return (
//     <div className="App">
//       <img src={background} alt="" className='image' />
//     </div>
//   );
// }

export default function App(){
  return (
    <div className='w-[100vw] h-[100vh] bg-no-repeat bg-cover bg-grass' style={{ backgroundImage: `url(${backgroundImage})`}}>
      <img src={pokedex} alt="" className='my-auto mx-auto h-[90vh] sticky-top-0 pt-20' />
    </div>
  );
};