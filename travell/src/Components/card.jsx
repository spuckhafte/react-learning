import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Card({ country, location, duration, info }) {
    console.log(country)
    return(
        <div className="card">
            <img src={require(`../assets/${country}.png`)} alt="didn't reload :(" />
            <div className='content'>
                <div className="address">
                    <span className="country"><FaMapMarkerAlt className='icon-loc'/> {country}</span>
                    <span className="maps">View on Google Maps</span>
                </div>
                <div className="location">{location}</div>
                <div className="description">
                    <span className="duration">{duration}</span>
                    <span className="info">{info}</span>
                </div>
            </div>
        </div>
    )
}