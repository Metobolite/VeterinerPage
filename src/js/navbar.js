import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';

// const Navbar = () => {

//     const [fix, setFix] = useState(false)

//     function setFixed() {
//         if (window.scrollY > 100){
//             setFix(true)
//         } else {
//             setFix(false)
//         }
//     }

//     window.addEventListener("scroll",setFixed)
//     const goTop = () => {
//         window.scrollTo({
//           top: (0, 0),
//           behavior: "smooth",
//     });
// };

//     return (
//         <nav className={fix ? 'navbar fixed' : 'navbar'}>
//             <div className="links">
//                 <Link to="/" class="text-decoration-none"><h1 className="icon" onClick={goTop}></h1></Link>
//                 <Link to="/" class="text-decoration-none"><h1 onClick={goTop}>Esenyurt Veteriner</h1></Link>
//                 <ul className="">
//                     <a href="#home" className="text-decoration-none">Ana Sayfa</a>
//                     <a href="#servis" className="text-decoration-none">Servisler</a>
//                     <a href="#moreAbout" className="text-decoration-none">Hakkımızda</a>
//                     <a href="#contact" className="text-decoration-none">İletişim</a>
//                 </ul>
//             </div>
//         </nav>

//     );
// }
 
// export default Navbar;

const Navbar = () => {
    const [fix, setFix] = useState(false);

    function setFixed() {
        if (window.scrollY > 100) {
            setFix(true);
        } else {
            setFix(false);
        }
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", setFixed);
        return () => window.removeEventListener("scroll", setFixed);
    }, []);

    const goTop = () => {
        if (window.location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.location.href = '/';
        }
    };

    return (
        <nav className={fix ? 'navbar fixed' : 'navbar'}>
            <div className="navbar1">
                <div className="links">
                    <Link to="/" class="text-decoration-none"><h1 className="icon" onClick={goTop}></h1></Link>
                    <Link to="/" class="text-decoration-none"><h1 onClick={goTop}>Esenyurt Veteriner</h1></Link>
                    <ul className="">
                        <a href="#home" className="text-decoration-none">Ana Sayfa</a>
                        <a href="#servis" className="text-decoration-none">Servisler</a>
                        <a href="#moreAbout" className="text-decoration-none">Hakkımızda</a>
                        <a href="#contact" className="text-decoration-none">İletişim</a>
                    </ul>
                    <button onClick={handleClick}
                        className={`flex flex-col justify-center items-center md:hidden pl-20 ${isOpen ? 'hidden' : 'flex'}`}>
                        <span className={`bg-black block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : '-translate-y-0.5'}`} >
                        </span>
                        <span className={`bg-black block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
                        </span>
                        <span className={`bg-black block transition-all duration-300 ease-out 
                                        h-0.5 w-6 rounded-sm ${isOpen ? 'opacity-0' : 'translate-y-0.5'}`} >
                        </span>
                    </button>

                    <div className={isOpen ? 'mobile-nav-open' : 'mobile-nav-close'}>
                        <div className="buttonMobile">
                            <button onClick={handleClick}
                            className={`flex flex-col justify-center items-center md:hidden ${isOpen ? 
                                'flex' : 'hidden'
                                }`}
                                >
                                    <span className={`bg-black block transition-all duration-300 ease-out 
                                                    h-0.5 w-6 rounded-sm ${isOpen ? 
                                                    'rotate-45 translate-y-1' : 'opacity-0'
                                                    }`} >
                                    </span>
                                    <span className={`bg-black block transition-all duration-300 ease-out 
                                                    h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 
                                                    'opacity-0' : 'opacity-0'
                                                    }`} >
                                    </span>
                                    <span className={`bg-black block transition-all duration-300 ease-out 
                                                    h-0.5 w-6 rounded-sm ${isOpen ? 
                                                    '-rotate-45 -translate-y-1' : 'opacity-0'
                                                    }`} >
                                    </span>
                                </button>
                        </div>
                            <div>
                                <div className="flex flex-row items-center">
                                    <Link to="/" class="text-decoration-none"><h1 className="icon" onClick={() => {goTop(); handleClick()}}></h1></Link>
                                    <Link to="/" class="text-decoration-none"><h1 onClick={() => {goTop(); handleClick()}}>Esenyurt Veteriner</h1></Link>
                                </div>
                                <li className="flex">
                                    <a href="#home" className="text-decoration-none" onClick={handleClick}>Ana Sayfa</a>
                                    <a href="#servis" className="text-decoration-none" onClick={handleClick}>Servisler</a>
                                    <a href="#moreAbout" className="text-decoration-none" onClick={handleClick}>Hakkımızda</a>
                                    <a href="#contact" className="text-decoration-none" onClick={handleClick}>İletişim</a>
                                </li>
                            </div>
                        </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;