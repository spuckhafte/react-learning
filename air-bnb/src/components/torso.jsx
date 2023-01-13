import logo from '../assets/logo.png'
import stock from '../assets/stock.png'

export default function Torso() {
    return (
        <div className='torso'>
            <nav className="navbar">
                <img src={logo} />
            </nav>
            <div className="stock-img">
                <img src={stock}></img>
            </div>
            <div className='text'>
                <span className='one'>Online Experiences</span><br></br>
                <span className='two'>Join unique interactive activities led by<br/>one-of-a-kind hosts—all without leaving<br /> home.</span>
            </div>
        </div>
    )
}