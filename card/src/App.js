import img from './assets/card.png';
import Body from './components/body';
import Footer from './components/footer';

export default function App() {
    return (
        <div className="card">
            <img className='card-img' src={img}></img>
            <Body />
            <Footer />
        </div>
    )
}