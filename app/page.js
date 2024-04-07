'use client';

import {useState} from 'react';

import Hdr from './flashlite-components/Hdr';
import AddSet from './flashlite-components/AddSet';
import SetList from './flashlite-components/SetList';

function Home() {

  const DEFAULT_IMAGE = "https://www.pngall.com/wp-content/uploads/4/Flashlight-PNG-Clipart.png";

  const DEFAULT_SETS = [
    {
      id: "e1",
      img: DEFAULT_IMAGE,
      title: "Web Programming Midterm Review",
      numOfTerms: 37,
      creator: "bailey_greer77"
    },
    {
      id: "e2",
      img: DEFAULT_IMAGE,
      title: "History Test",
      numOfTerms: 95,
      creator: "mrpeanutma"
    },
    {
      id: "e3",
      img: DEFAULT_IMAGE,
      title: "Biology Terms",
      numOfTerms: 48,
      creator: "jry39286"
    }
  ];
  
  const [signedIn, setSignedIn] = useState(); 
  
  if (signedIn) { 
    return ( 
      <div> 
        <Hdr signedIn={true} /> 
        <p>Featured Sets</p>
        <AddSet />
        <SetList items={DEFAULT_SETS} /> 
      </div>
    )
  } else { 
    return ( 
      <div>         
        <Hdr signedIn={false} />
        <p>Featured Sets</p>
        <SetList items={DEFAULT_SETS} />
      </div>
    )
      
  }
}
export default Home;
