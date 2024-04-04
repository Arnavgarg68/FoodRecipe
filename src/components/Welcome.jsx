import React from 'react'
import {useTypewriter , Cursor} from 'react-simple-typewriter'
export default function Welcome() {
    const [text] = useTypewriter({
        words:["Toh aaj khane me kya h!!",'Food is Love !!','Khana aur maa perfect !!'],
        // words:["Bhai",'Bhen','Perfect'],
        loop:{},
    }) ;
  return (
    <div className='welcome-main-body'>
      <div className="welcome-inner-main-body">
        <div className="welcome-interaction">
        <h1>
            {text}
            <Cursor/>
        </h1>
        <div className="welcome-actual-inputarea">
            <input type="text" id="welcome-search-recipe" placeholder='Enter your recipe name here' spellCheck="false"/>
            <button id="welcome-search-recipe-button">Search</button>
        </div>
        </div>
      </div>
    </div>
  )
}
