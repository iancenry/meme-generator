import memeData from "../memeData"
import React from "react"

const Meme = () => {
    const [allMemeImages] = React.useState(memeData)
    const [meme, setMeme] = React.useState({topText: "", bottomText:"", randomImage: ""})
     
    /*get a random meme image from memeData.js then set it to our meme state var 'randomImage'*/
    const getMemeImage =(event)=>{
        event.preventDefault();
        const memesArray = allMemeImages.data.memes
        let randomNum = Math.floor(Math.random() * memesArray.length)
        let randomUrl = memesArray[randomNum].url
        setMeme(prevMeme => ({...prevMeme, randomImage: randomUrl}))
    }
    /*handle the form inputs that will be our meme texts*/
    function handleChange(event){
      const {name, value} = event.target
      setMeme(prevMemeData => ({...prevMemeData, [name]: value}))
    }
  

  return (
    <main>
        <form>
            <input 
                type="text" 
                id="top-text"
                placeholder="Top-text" 
                className="form-input"
                onChange={handleChange}
                name ="topText"
                value={meme.topText}
                ></input>
            <input 
                type="text"
                id="bottom-text" 
                placeholder="Bottom text" 
                className="form-input"
                onChange={handleChange}
                name ="bottomText"
                value={meme.bottomText}
                ></input>
            <button className="btn" onClick={getMemeImage}>Get a new meme image  🎰</button>
        </form>
        <div className="meme">
               <img src={meme.randomImage} alt=""  className='meme--image'/> <br />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

    </main>
  )
}

export default Meme
