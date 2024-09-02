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
                        <h1 className = "text-6xl">Dostlarınız için 
                            <br/>
                            en iyi<br/>veteriner kliniği</h1>
                        <p className="font-normal text-2xl pt-8 text-blue-950">Sağlıklı patiler - neşeli veteriner hekimler</p>
                    </div>
                    <div className="h-96 md:min-h-screen w-full xl:h-auto xl:pt-28">
                        <div className="hero-img">
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
     );
}
 
export default Home;