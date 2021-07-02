import React, { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const MainQuiz = () => {

  const animation = useAnimation();
  const [contenRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px'
  })
  useEffect(() => {
    if(inView){
      animation.start('visible')
    }
  },[animation,inView])
    return (
        <div id="test" className="quiz">
            <div className="grid">
              <div className="quiz__text">
                <h1>The most common topics in psychological test?</h1>
                <p>
                  Discover the world of psychological test. Find out how online
                  counselling can help you with your topic.
                </p>
              </div>
              <motion.div className="quiz__list"
                ref={contenRef} 
                animate={animation}
                initial='hidden'
                variants={{
                  visible: {
                    opacity: 1,
                    y:0,
                    transition: { duration: 1, linear: 2}
                  },
                  hidden: {
                    opacity: 0,
                    y: 100
                  }
                }}
              >
                <div className="quiz__list--item" >
                  <div className="wrap-quiz">
                    <h3>Psychological self-test for depression</h3>
                    <p>
                      Discover the world of psychological counselling. Find out how
                      online counselling can help you with your topic.
                    </p>
                    <a href="/#">Let's test now</a>
                  </div>
                </div>
                <div className="quiz__list--item" >
                  <div className="wrap-quiz">
                    <h3>Psychological self-test for anxious</h3>
                    <p>
                      Discover the world of psychological counselling. Find out how
                      online counselling can help you with your topic.
                    </p>
                    <a href="/#">Let's test now</a>
                  </div>
                </div>
                <div className="quiz__list--item" >
                  <div className="wrap-quiz">
                    <h3>Psychological self-test for stress</h3>
                    <p>
                      Discover the world of psychological counselling. Find out how
                      online counselling can help you with your topic.
                    </p>
                    <a href="/#">Let's test now</a>
                    
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
    )
}

export default MainQuiz
