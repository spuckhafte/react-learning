import Input from "./input"
import { useEffect, useState } from "react"


export default function Body() {
    let [meme, setMeme] = useState({
        "topText": "",
        "bottomText": "",
        "url": ""
    })

    let [memeData, setMemeData] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setMemeData([...data.data.memes]))
    }, [])

    function clicked() {
        let memeUrl = memeData[Math.floor(Math.random() * memeData.length)].url;
        console.log(memeUrl)
        setMeme(prevMeme => {
            return {  
                ...prevMeme, 
                "url": memeUrl 
            }
        })
    }

    function changeText(e, side) {
        console.log(side)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [side]: e.target.value
            }
        })
    }

    return (
        <div className="body">
            <Input click={clicked} change={changeText}/>
            <div className="meme">
                {meme.topText && <div className="meme-text" id="top">{meme.topText}</div>}
                {meme.url !== '' && <img className="meme-img" src={meme.url} alt="didn't load :(" draggable="false" />}
                {meme.bottomText && <div className="meme-text" id="bottom">{meme.bottomText}</div>}
            </div>
        </div>
    )
}