import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MainConnect = () => {
  const animation = useAnimation();

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);
  return (
    <div className="connect">
      <div className="grid">
        <div className="connect__text">
          <div className="connect__text--big">We connect you with top psychologists online</div>
        </div>
        <div className="connect__list">
          <motion.div
            className="connect__list__item image"
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, linear: 2, delay: 0.2 },
              },
              hidden: {
                opacity: 0,
                x: -100,
              },
            }}
          />
          <div className="connect__list__item">
            <motion.div
              className="connect__list__item--text"
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, linear: 2 },
                },
                hidden: {
                  opacity: 0,
                  x: 150,
                },
              }}
            >
              These are the things you expect from us when consulting online
            </motion.div>
            <motion.div
              className="connect__list__item--sub"
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1, linear: 2 },
                },
                hidden: {
                  opacity: 0,
                  x: 200,
                },
              }}
            >
              <div className="connect__title">From the comfort of your own home</div>
              <div className="connect__description">
                Psychological counselling online via video, audio &amp; text chat
              </div>
            </motion.div>
            <motion.div
              className="connect__list__item--sub"
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1.2, linear: 2 },
                },
                hidden: {
                  opacity: 0,
                  x: 200,
                },
              }}
            >
              <div className="connect__title">No waiting</div>
              <div className="connect__description">Initial contact with your psychologist within 24h</div>
            </motion.div>
            <motion.div
              className="connect__list__item--sub"
              ref={contentRef}
              animate={animation}
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1.4, linear: 2 },
                },
                hidden: {
                  opacity: 0,
                  x: 200,
                },
              }}
            >
              <div className="connect__title">From the comfort of your own home</div>
              <div className="connect__description">
                Psychological counselling online via video, audio &amp; text chat
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainConnect;
