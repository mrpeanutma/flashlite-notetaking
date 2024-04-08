'use client';

// import {useState} from 'react';

import Hdr from '../flashlite-components/Hdr';
import AddSet from '../flashlite-components/AddSet';
import './page.css';

function Home() {

  return (
    <div className='page'>
        <Hdr signedIn={true}/>
        <AddSet />
    </div>
  );
}

{/* <Hdr signedIn={true}/> */}

export default Home;