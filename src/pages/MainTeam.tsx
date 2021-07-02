import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const MainTeam = () => {

  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px'
  })

  useEffect(()=>{
    if(inView){
      animation.start('visible');

    } 
  },[animation,inView])
    return (
        <div className="team">
            <div className="grid">
              <div className="team__text">
                <h1>The Best Team Doctor For You</h1>
                <p>
                  Psychology is the study of mind and behavior. It encompasses the
                  biological influences, social pressures.
                </p>
              </div>
              <div className="team__list">
              <motion.div  ref={contentRef} animate={animation} initial='hidden'
                variants = {{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {duration: 1, linear: 2, delay: 0.3}
                  },
                  hidden: {
                    opacity: 0,
                    y: 100,
                  }
                }} 
                className="team__list--item" >
                  <div className="doctor__image1" />
                  <div className="doctor__title">Dr. Refer David</div>
                  <div className="doctor__description">
                    Over 15 years of intensive work experience in the field of
                    psychology, mental health
                  </div>
                </motion.div>
                <motion.div ref={contentRef} animate={animation} initial='hidden'
                variants = {{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {duration: 1, linear: 2}
                  },
                  hidden: {
                    opacity: 0,
                    y: 100,
                  }
                }}
                className="team__list--item"  >
                  <div className="doctor__image2" />
                  <div className="doctor__title">Dr. John Edison</div>
                  <div className="doctor__description">
                    More than 10 years of experience in the field anxious,
                    depression
                  </div>
                </motion.div>
                <motion.div  ref={contentRef} animate={animation} initial='hidden'
                variants = {{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {duration: 1, linear: 2, delay: 0.3}
                  },
                  hidden: {
                    opacity: 0,
                    y: 100,
                  }
                }}
                className="team__list--item" >
                  <div className="doctor__image3" />
                  <div className="doctor__title">Dr. Alice Sarah</div>
                  <div className="doctor__description">
                    Over 10 years of experience in the field of psychology, mental
                    health.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
    )
}

export default MainTeam
