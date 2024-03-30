import React from 'react';

import { styles} from "../styles";
import ComputerCanvas from "./canvas/Computers";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto ">
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex-row items-start gap-5 flex`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm <span className="text-[#915eff]">Eunji</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I developer 3D visuals
                    </p>
                </div>
            </div>
            {/*<ComputerCanvas/>*/}
        </section>
    );
}

export default Hero;