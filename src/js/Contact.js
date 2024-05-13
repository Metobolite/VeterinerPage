import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div id="contact" className="contactAll">
            <div className="contactText">
                <h1 className="font-bold text-blue-950 mb-0 md:text-6xl">Randevunuzu 
                    <br/>
                    bugün planlayın</h1>
                <br />
                <h2 className="font-normal text-blue-950 mb-0">Bize Buradan Ulaşabilirsiniz</h2>
                <div className="contactInfo">
                    <Link to="/tumContact" className="tumContact">Bizimle iletişime geçin 🡪</Link>
                </div>
            </div>
        </div>    
     );
}
 
export default Contact;