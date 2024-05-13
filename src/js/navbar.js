import { Link } from 'react-router-dom';
import { useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';

const Navbar = () => {

    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY > 100){
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll",setFixed)
    const goTop = () => {
        window.scrollTo({
          top: (0, 0),
          behavior: "smooth",
    });
};

    return (
        <nav className={fix ? 'navbar fixed' : 'navbar'}>
            <div className="links">
                <Link to="/" class="text-decoration-none"><h1 className="icon" onClick={goTop}></h1></Link>
                <Link to="/" class="text-decoration-none"><h1 onClick={goTop}>Esenyurt Veteriner</h1></Link>
                <ul className="">
                    <a href="#home" className="text-decoration-none">Ana Sayfa</a>
                    <a href="#servis" className="text-decoration-none">Servisler</a>
                    <a href="#moreAbout" className="text-decoration-none">Hakkımızda</a>
                    <a href="#contact" className="text-decoration-none">İletişim</a>
                </ul>
            </div>
        </nav>

    );
}
 
export default Navbar;
