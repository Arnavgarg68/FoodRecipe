import React, { useState } from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BarLoader from 'react-spinners/FadeLoader'
import Card from './Card';
import axios from 'axios';
export default function Welcome() {
  const [text] = useTypewriter({
    words: ["Toh aaj khane me kya h!!", 'Food is Love !!', 'Khana aur maa perfect !!'],
    // words:["Bhai",'Bhen','Perfect'],
    loop: {},
  });
  const [inputfield, setInputfield] = useState("");
  const [loader, setLoader] = useState(false);
  const [norecipe, setNorecipe] = useState(false);
  const [fetcheddata, setFetcheddata] = useState([]);
  const handlechange = (e) => {
    setInputfield(e.target.value);
  }
  const handleKeyPress =(e)=>{
    if(e.key=='Enter'){
      handlesearch()
    }
  }
  const handlesearch = async () => {
    const searchfield = document.getElementById("welcome-search-recipe");
    if(!searchfield.value){
      alert("Search is empty");
      return;
    }
    setLoader(true);
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/recipe?query=${inputfield}`,{
        headers: {
          'X-Api-Key': 'sK7jt/zqnnq2hsgj+AQosQ==qUag6oj5lDLmmspe'
        }
      });
      if(!response.data.length){
        setNorecipe(true);
      }
      else{
        setNorecipe(false);
      }
      setFetcheddata(response.data)
      setLoader(false);
    } catch (error) {
      setLoader(false);
    }
  }
  return (
    <>

      <div className='welcome-main-body'>
        <div className="welcome-inner-main-body">
          <div className="welcome-interaction">
            <h1>
              {text}
              <Cursor />
            </h1>
            <div className="welcome-actual-inputarea">
              <input type="text" id="welcome-search-recipe" placeholder='Enter your recipe name here .....' spellCheck="false" value={inputfield} onChange={handlechange} onKeyDown={handleKeyPress} title='english recipe only' autoFocus/>
              <button id="welcome-search-recipe-button" onClick={handlesearch}>Search</button>
            </div>
          </div>
        </div>
        {
          loader?(
            <div className="loader-react">
              <BarLoader  color="orange" radius={8}/>
            </div>
          ) : 
          (
            <div>
              {
                  norecipe?(
                    <div className="welcome-norecipe-error">No recipe found</div>
                  ):(
                    <div className="welcome-cards-layout">
                      {
                        fetcheddata.map((recipe, index) => (
                          <Card key={index} title={recipe.title} ingredients={recipe.ingredients} servings={recipe.servings} instructions={recipe.instructions} />
                        ))
                      }
                    </div>)
              }
            </div>
          )
          
          
        }
      </div>

    </>
  )
}
