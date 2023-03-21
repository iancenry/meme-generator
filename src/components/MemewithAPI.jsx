import React from 'react'

const MemewithAPI = () => {
  const [allMemes, setAllMemes] = React.useState()
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  })

  /*fetch memes from the API and assign them once to allMemes*/
  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
  }, [])

  const getMemeImage = (event) => {
    event.preventDefault()
    let randomNum = Math.floor(Math.random() * allMemes.length)
    let randomUrl = allMemes[randomNum].url
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: randomUrl }))
  }

  function handleChange(event) {
    const { name, value } = event.target
    setMeme((prevMemeData) => ({ ...prevMemeData, [name]: value }))
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
          name="topText"
          value={meme.topText}
        ></input>
        <input
          type="text"
          id="bottom-text"
          placeholder="Bottom text"
          className="form-input"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        ></input>
        <button className="btn" onClick={getMemeImage}>
          Get a new meme image 🎰
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme--image" /> <br />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default MemewithAPI

//search what is the pre tag in html
  // if fails try - const [allMemes, setAllMemes] = React.useState([])

