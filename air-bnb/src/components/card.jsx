import { FaStar } from 'react-icons/fa';
import user from '../assets/user.png';

export default function Card(props) {
    const { img, rating, totalReviews, country, title, price, openSpots } = props
    return (
        <div className='card'>
            <div className='open-spots'>{openSpots === "0" ? "SOLD OUT" : "ONLINE"}</div>
            <img className='dp' src={require(`../assets/${img}`)} alt="can't show" />
            <div className='rating'>
                <span className='rate'><FaStar className='star'/>{rating}</span>
                <span className='total'>({totalReviews})</span>
                <span className='country'> {country}</span>
            </div>
            <div className='info'>
                <div className='learn'>{title}</div>
                <div className='price'>From ${price}</div>
            </div>
        </div>
    )
}