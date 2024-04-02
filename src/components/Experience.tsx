import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {motion} from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import {styles} from "@src/styles.ts";
import {experiences} from "@src/constants";
import {SectionWrapper} from "@src/hoc";
import {fadeIn, textVariant} from "@src/utils/motion.ts";
import React from "react";

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement contentStlye={{ background: "#1d1836", color: "#fff"}}
                             contentArrowStyle={{borderRight: '7px solid #232631'}}
                             date={experience.date}
                             iconStyle={{background: experience.iconBg}}
                             icon={
        <div className="flex items-center justify-center w-full h-full ">
            <img src={experience.icon}
                 alt={experience.company_name}
                 className="w-[60%] h-[60%] object-contain"
            />
        </div>
                             }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        </div>
    </VerticalTimelineElement>
)
const Experience = () => {
 return (
     <>
         <motion.div variants={textVariant()}>
             <p className={`${styles.sectionSubText}`}>Introduction</p>
             <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
         </motion.div>
        <div className="mt-20 flex flex-col">
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </VerticalTimeline>
        </div>
     </>
 );
}

export default SectionWrapper(Experience, "work");