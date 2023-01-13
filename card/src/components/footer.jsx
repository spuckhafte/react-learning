import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithubSquare, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="card-footer">
            <span className='brand github'><FaGithubSquare /></span>
            <span className='brand instagram'><FaInstagramSquare /></span>
            <span className='brand facebook'><FaFacebookSquare /></span>
            <span className='brand twitter'><FaTwitterSquare /></span>
        </footer>
    )
}