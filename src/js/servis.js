import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import {motion as m} from "framer-motion";


const servis = () => {
    return (
        <m.div
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.75,ease:"easeOut"}}
        >
                <div id="servis" class="container-fluid bg-white pt-5">
                <div class="container py-5">
                    <div class="d-flex flex-column text-center mb-5 pt-16">
                        <h4 class="text-secondary mb-3">Servislerimiz</h4>
                        <h1 class="display-4 m-0 pb-16"><span class="text-primary"></span>Evcil Hayvan Servisleri</h1>
                    </div>
                    <div class="row pb-3">
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div id="servisler" class="d-flex flex-column text-center bg-indigo-100 mb-2 p-3 p-sm-5 rounded-5">
                                <h3 class="flaticon-food display-3 font-weight-normal text-secondary mb-3"></h3>
                                <h3 class="mb-3">Evcil Hayvan Beslenmesi</h3>
                                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                                <a class="text-uppercase font-weight-bold no-underline" href="">Daha Fazla</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4 md:pt-10">
                            <div id="servisler" class="d-flex flex-column text-center  bg-green-100 mb-2 p-3 p-sm-5 rounded-5">
                                <h3 class="flaticon-grooming display-3 font-weight-normal text-secondary mb-3"></h3>
                                <h3 class="mb-3">Evcil Hayvan Bakımı</h3>
                                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                                <a class="text-uppercase font-weight-bold" href="">Daha Fazla</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div id="servisler" class="d-flex flex-column text-center bg-cyan-100 mb-2 p-3 p-sm-5 rounded-5">
                                <h3 class="flaticon-vaccine display-3 font-weight-normal text-secondary mb-3"></h3>
                                <h3 class="mb-3">Evcil Hayvan Tedavisi</h3>
                                <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo</p>
                                <a class="text-uppercase font-weight-bold" href="">Daha Fazla</a>
                            </div>
                        </div>
                    </div>
                    <div className="tumServisler1">
                        <Link to="/tumServis" className="tumServisler">Tüm Servisler</Link>
                    </div>
                </div>
            </div>
        </m.div>
    );
}
 
export default servis;