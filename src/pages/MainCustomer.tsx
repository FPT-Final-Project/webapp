import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const MainCustomer = () => {

    const animation = useAnimation();
    
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px'
    })

    useEffect(() => {
        if(inView) {
            animation.start("visible");
        }
    },[animation,inView])

    return (
        <div id="aboutus" className="customer">
            <div className="grid">
              <div className="customer__wrap">
                <motion.div className="customer__wrap--text" 
                ref={contentRef}
                animate={animation}
                initial='hidden'
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, linear: 2},
                    },
                    hidden: {
                        opacity: 0,
                        y: -100,
                    },
                }}>
                  <h1>Our Customer Say something about us</h1>
                  <p className="description">
                    ‘’ Psychology is the study of mind and behavior. It encompasses
                    the biological influences, social pressures. It encompasses the
                    biological influences, social pressures. ’’ <br />
                    <br />
                    <span>John Husband</span>
                  </p>
                </motion.div>
                <motion.div className="customer__wrap--image" 
                ref={contentRef}
                animate={animation}
                initial='hidden'
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, linear: 2},
                    },
                    hidden: {
                        opacity: 0,
                        y: -100,
                    },
                }}
                 ></motion.div>
              </div>
            </div>
          </div>
    )
}

export default MainCustomer
