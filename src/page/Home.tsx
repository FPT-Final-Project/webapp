import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import './Sass/index.scss'
// import './Sass/indexResponsive.scss'
// import './home.css'
// import './homeResponsive.css'
import MainServices from './MainServices';
import MainConnect from './MainConnect';
import MainQuiz from './MainQuiz';
import MainTeam from './MainTeam';
import MainChart from './MainChart';
import MainCustomer from './MainCustomer';
import Footer from './Footer'


const Home = () => {

  const fadeLeft = {
    hidden: {opacity : 0, x: -100},
    visible: {opacity: 1, x: 0}
  }
  const fadeRight = {
    hidden: { opacity: 0, x: 300},
    visible: { opacity: 1, x: 0}
  }
  
    return (
        <div>
        
        <motion.div className="total" initial={{opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 2 }}>
          {/* Header */}
          <div id="home" className="header">
            <div className="grid">
              {/* Navbar */}
              <Navbar/>
              
                <div className="banner">
                  <div className="banner__text">
                    <motion.p className="banner__text--upper" variants={fadeLeft} initial='hidden' animate='visible' transition={{duration: 1, delay: 0}}>
                      welcome to psycare
                    </motion.p>
                    <motion.p className="banner__text--big" variants={fadeLeft} initial='hidden' animate='visible' transition={{duration: 1, delay: 0.2}}  >
                      Psychological
                    </motion.p>
                    <motion.p className="banner__text--big link" variants={fadeLeft} initial='hidden' animate='visible' transition={{duration: 1, delay: 0.4}}>
                      Counselling
                    </motion.p>
                    <motion.p 
                     variants={fadeLeft}
                     initial='hidden'
                     animate='visible'
                     transition={{duration: 1, delay: 0.8}}
                     className="banner__text--para">
                      Psychology is the study of mind and behavior. It encompasses
                      the biological influences, social pressures.
                    </motion.p>
                    <motion.div
                      variants={fadeLeft}
                      initial='hidden'
                      animate='visible'
                      transition={{duration: 1, delay: 1}}>
                      <a href="/#" id="book_app">Book An Appointment</a>
                    </motion.div>
                  </div>
                  <motion.div 
                  variants={fadeRight}
                  initial='hidden'
                  animate='visible'
                  transition={{duration: 1.5, delay: 0}}
                  className="banner__slider"></motion.div>
                </div>
            </div>
          </div>
          {/* Main */}
          {/* =======Services */}
          <MainServices/>
          {/* =======Connect============== */}
          <MainConnect/>
          {/* =======QuizTest */}
          <MainQuiz/>
          {/* =======Team */}
          <MainTeam/>
          {/* ==========Chart======= */}
          <MainChart/>
          {/* =======Customer */}
          <MainCustomer/>
          {/* FOoter */}
          <Footer/>
        </motion.div>
      </div>
    )
}

export default Home
