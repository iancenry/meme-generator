# eme Generator
This is the server side code of a teleegram bot that utilizes openai's chatgpt to reply to telegram messages.

![Screenshot_20230321-234327_Telegram](https://user-images.githubusercontent.com/77986239/226741297-2d4929d7-7cf4-4582-baae-5cb143fd4192.jpg)

## Quick Setup
1. Fork then clone the project into local machine 🍴
1. Run `npm install` in the root folder to install all the necessary dependencies 👩‍💻
1. Happy coding 💻
**NB** Add your own telegram token and openai api key.

* Dependencies used: ``dotenv``, ``express``, ``node-telegram-bot-api``, ``openai``

[Bot Link](t.me/exurbiaBot)  -  Working bot upon request due to openai API limit. \
[Reference documentation](https://core.telegram.org/bots) \
[Node Telegram Bot Api Github](https://github.com/yagop/node-telegram-bot-api)





 event listeners onClick, onChange, onMouseEnter -e.g.,  onChange={handleChangeFunction}
   - code example
	   ```jsx
	    const [meme, setMeme] = React.useState({topText: "", bottomText:"", randomImage: ""})
	    function handleChange(event){
     		 const {name, value} = event.target
     		 setMeme(prevMemeData => ({...prevMemeData, [name]: value}))
  	    }
	    
            <input 
                type="text" 
                id="top-text"
                placeholder="Top-text" 
                className="form-input"
                onChange={handleChange}
                name ="topText"
                value={meme.topText}
            ></input>
	```
## NB
            computed properties [event.target.name]: event.target.value -you can turn a dynamic string(like something saved in a variable) and use it as property name for an object
	    Controlled inputs/components and single source of truth - Refer to (link to Boxes repo)
	    side effects 
		- If we were to do this without effect, everytime the component renders we
would call fetch which will set the meme data whcih will update state and therefore causing react to rerender the component and the process will keep repeating
and this will cause an infinte loop of component rendering
```js
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
```
