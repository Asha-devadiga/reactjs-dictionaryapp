
import './App.css';

import {React ,useState } from 'react';
import Axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { FcSpeaker} from 'react-icons/fc';

function App() {

  const[data, setData]= useState(" ");
  const[searchword,setSearchWord]= useState(" ");

}

function getMeaning() {
  Axios.get (
    'https://api.dictionaryapi.dev/api/v2/entries/en/<word>'
  )
  .then((response)=> {
    setData(response.data[0]);
  });
}

function getPronounciation() {
  const pronoun=new getWord(data(e.target.value));
  pronoun.getWord();
}


function playAudio() {
  const audio = new Audio(data.phonetics[0].audio);
  audio.play();
}

return (
  <div className='App'>
    <h1>Dictionary</h1>
    <div className='searchBox'>
      <input 
      type='text'
      placeholder='Search..'
      onChange= {(e)=> {
        setsearchWord(e.target.value);
      }}
      />
    <button
    onClick={()=>{
      getMeaning();
    }}
    >
      <FaSearch size='10px' />
    </button>
    </div>
    {data && (
      <div className='showresults'>
        <h2>
          {data.word}{' '}
          <button
           onClick={()=>{
             playAudio();
           }}
           >
             <FcSpeaker size='20px' />

           </button>
        </h2>
    <h4> Definition</h4>
    <p>{data.meanings[0].definition[0].definition}</p>
  </div>
    )
    }
  </div>
    );
}

export default App;
