import React from 'react';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@src/styles.ts";
import { github } from "@src/assets";
import { SectionWrapper } from "@src/hoc";
import { projects } from "@src/constants";
import { fadeIn, textVariant } from "@src/utils/motion";

interface Props {

}
const ProjectCard = ({name, description, tags, image, source_code_link, index }: Props) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt options={{
            max: 45,
            scale: 1,
            speed: 450
        }}
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
            <div className="relative w-full h-[230px]">
                <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div onClick={() => window.open(source_code_link, "_blank")}
                         className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img src={github}
                             alt="github"
                             className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="flex items-center justify-start mt-4 flex-wrap gap-2">
                {tags.map(tag => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}

            </div>
        </Tilt>

        </motion.div>
    );
}

const Works = () => {
 return (
  <>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My Work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
          <motion.p variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-x-3xl leading-[30px]"
          >
              - 첫 번째 개발자로 입사하여 2명 또는 혼자서 띵고에 필요한 모든 Front 서비스 기획/개발/배포
              - php 개발로 운영되고 있던 서비스를 프로토타입 삼아 React로 기존 서비스를 구축
              - 속도 13초를 1초로 개선 하였고, 마케팅 광고로 cpc cpm 관련 추가하여 마케팅 데이터도 추가(애널리틱스)
              - 타 부서와 효율적인 협업과 커뮤니케이션을 위해 업무 요청 프로세스를 도입하여 협업하였습니다.

          </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`}
                           {...project}
                            index={index}
              />
          ))}
      </div>
  </>
 );
}

export default SectionWrapper(Works, "");