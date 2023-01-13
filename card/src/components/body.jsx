import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
export default function Body() {
    return(
        <main className="card-body">
            <div className="card-intro">
                <span className="card-title">Laura Smith</span>
                <span className="card-subtitle">Frontend Developer</span>
                <span className="card-annotation">laurasmith.website</span>
            </div>
            <div className="card-links">
                <button className="btn card-email"><FaEnvelope className='mail-icon' />Email</button>
                <button className="btn card-linkedin"><FaLinkedin className='linkedin-icon' />LinkedIn</button>
            </div>
            <div className="card-content">
                <span className="content-heading-1">About</span>
                <span className="content-1">
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
                    I try to keep up with security and best practices, and am always looking for new things to learn.
                </span>
                <span className="content-heading-2">Interests</span>
                <span className="content-2">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                    Travel geek. Pop culture ninja. Coffee fanatic.
                </span>
            </div>
        </main>
    )
}