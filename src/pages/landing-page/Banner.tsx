import { motion } from 'framer-motion';

const Banner = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="banner">
      <div className="banner__text">
        <motion.div
          className="banner__text--upper"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0 }}
        >
          welcome to psycare
        </motion.div>
        <motion.div
          className="banner__text--big"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
        >
          Psychological
        </motion.div>
        <motion.div
          className="banner__text--big link"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.7 }}
        >
          Counselling
        </motion.div>
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          className="banner__text--para"
        >
          Psychology is the study of mind and behavior. It encompasses
          the biological influences, social pressures.
        </motion.div>
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.3 }}
        >
          <a href="/login" id="book_app">Book An Appointment</a>
        </motion.div>
      </div>
      <motion.div
        variants={fadeRight}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5, delay: 0 }}
        className="banner__slider"
      />
    </div>
  );
};

export default Banner;
