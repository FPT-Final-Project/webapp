import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useHistory } from 'react-router-dom';

const MainQuiz = () => {
  const history = useHistory();

  const animation = useAnimation();
  const [contenRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });
  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }

    return () => animation.stop();
  }, [animation, inView]);

  const directTest = () => {
    history.push('/login');
  };

  return (
    <div id="test" className="quiz">
      <div className="grid">
        <div className="quiz__text">
          <div className="quiz__text--big">The most common topics in psychological test?</div>
          <div className="quiz__text--small">
            Discover the world of psychological test. Find out how online
            counselling can help you with your topic.
          </div>
        </div>
        <motion.div
          className="quiz__list"
          ref={contenRef}
          animate={animation}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, linear: 2 },
            },
            hidden: {
              opacity: 0,
              y: 100,
            },
          }}
        >
          <div className="quiz__list--item">
            <div className="wrap-quiz">
              <div className="wrap-quiz__big">Psychological self-test for Depression</div>
              <div className="wrap-quiz__small">
                Discover the world of psychological counselling. Find out how
                online counselling can help you with your topic.
              </div>
              <button className="test-btn" onClick={directTest}>Let's test now</button>
            </div>
          </div>
          <div className="quiz__list--item">
            <div className="wrap-quiz">
              <div className="wrap-quiz__big">Psychological self-test for anxious</div>
              <div className="wrap-quiz__small">
                Discover the world of psychological counselling. Find out how
                online counselling can help you with your topic.
              </div>
              <button className="test-btn" onClick={directTest}>Let's test now</button>
            </div>
          </div>
          <div className="quiz__list--item">
            <div className="wrap-quiz">
              <div className="wrap-quiz__big">Psychological self-test for stress</div>
              <div className="wrap-quiz__small">
                Discover the world of psychological counselling. Find out how
                online counselling can help you with your topic.
              </div>
              <button className="test-btn" onClick={directTest}>Let's test now</button>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MainQuiz;
