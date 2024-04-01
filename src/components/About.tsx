import React from 'react';
import { Tilt } from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "@src/styles.ts";
import {services} from "@src/constants";
import {fadeIn, textVariant} from "@src/utils/motion.ts";

import { SectionWrapper } from "@src/hoc";

interface Props {
    title?: string;
    index?: number;
    icon: string;
}
const ServiceCard = ({title, index, icon}: Props) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                //     options={{
                //     max: 45,
                //     scale: 1,
                //     speed: 450
                // }}
                     className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
            {title}
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText}`}>Introduction</p>
                <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
            </motion.div>
            <motion.p variants={fadeIn('', '', 0.1, 1)}
                      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                - 첫 번째 개발자로 입사하여 2명 또는 혼자서 띵고에 필요한 모든 Front 서비스 기획/개발/배포
                - php 개발로 운영되고 있던 서비스를 프로토타입 삼아 React로 기존 서비스를 구축
                - 속도 13초를 1초로 개선 하였고, 마케팅 광고로 cpc cpm 관련 추가하여 마케팅 데이터도 추가(애널리틱스)
                - 타 부서와 효율적인 협업과 커뮤니케이션을 위해 업무 요청 프로세스를 도입하여 협업하였습니다.
            </motion.p>

            <div className="grid mt-20 gap-10 grid-cols-2">

                {services.map((service: Props, index: number) => (
                    <ServiceCard key={service.title} index={index} {...service}/>
                ))}

            </div>
        </>
    );
}

export default SectionWrapper(About, "about");