export default function Input({ click, change }) {
    return (
        <div className="input">
            <div className="input-area">
                <input className="input-text" id="input-1" type="text" placeholder="Meme Text" onChange={e=>change(e, 'topText')} />
                <input className="input-text" id="input-2" type="text" placeholder="Meme Text" onChange={e=>change(e, 'bottomText')} />
            </div>
            <button className="submit" onClick={click}>Get a new meme</button>
        </div>
    )
}