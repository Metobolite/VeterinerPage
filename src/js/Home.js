import {motion as m} from "framer-motion";

const Home = () => {
    return (
        <m.div 
        initial={{y:"100%"}}
        animate={{y:"0%"}}
        transition={{duration:0.75,ease:"easeOut"}}
        >
            <div id="home" className="home">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1>Dostlarınız için 
                            <br/>
                            en iyi veteriner kliniği</h1>
                        <p className="font-normal text-2xl pt-8 text-blue-950">Sağlıklı patiler - neşeli veteriner hekimler</p>
                    </div>
                    <div className="h-96 w-full md:h-auto">
                        <div className="hero-img">
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
     );
}
 
export default Home;