/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { motion } from 'framer-motion';
import _ from 'lodash';

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  // Behavior Smooth
  const handleClickNav = (e: any) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 70,
      // Vị trí hiện tại trừ đi thanh navbar
    });
  };

  // Animation
  const [navbar, setNavbar] = useState(false);

  const changeBackgroundNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackgroundNav);

  return (
    <motion.div
      className={navbar ? 'wrap__nav activeNav' : 'wrap__nav'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <nav className="header__nav">
        <div className="wrap__logo">
          <a href="#home" onClick={handleClickNav} className="logo" />
        </div>
        <ul className="nav__list">
          <li className="nav__item"><a href="#home" onClick={handleClickNav}>Home</a></li>
          <li className="nav__item"><a href="#service" onClick={handleClickNav}>Services</a></li>
          <li className="nav__item"><a href="#test" onClick={handleClickNav}>Psy-Test</a></li>
          <li className="nav__item"><a href="#aboutus" onClick={handleClickNav}>About Us</a></li>
        </ul>
        {
          _.isEmpty(user)
            ? (
              <>
                <ul className="nav__login">
                  <li className="nav__item-login login"><a href="/login">Login</a></li>
                  <li className="nav__item-login register">
                    <a href="/register">Register</a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="nav__login">
                  <li className="nav__item-login register">
                    <a href="/app/dashboard">Go to App</a>
                  </li>
                </ul>
              </>
            )
        }
        {/* =====Mobile====== */}
        <label htmlFor="nav__mobile-input" className="nav__hamburger">
          <span>Menu</span>
          <i className="fas fa-bars" />
        </label>

        <input type="checkbox" name="" className="nav__input" id="nav__mobile-input" />
        <label htmlFor="nav__mobile-input" className="nav__overlay" />

        <div className="nav__mobile">
          <div className="exit">
            <div className="exit__logo" />
            <label htmlFor="nav__mobile-input" className="exit__btn">
              <i className="fas fa-times" />
            </label>
          </div>
          <ul className="nav__hamburger-list">
            <li className="nav__hamburger-item ham_under">
              <a href="#home">Home</a>
            </li>
            <li className="nav__hamburger-item ham_under">
              <a href="#service">Services</a>
            </li>
            <li className="nav__hamburger-item ham_under">
              <a href="#test">Psy-Test</a>
            </li>
            <li className="nav__hamburger-item ham_under">
              <a href="#aboutus">About Us</a>
            </li>
            {
              !user
                ? (
                  <>
                    <li className="nav__hamburger-item ham_login">
                      <a href="/login">Login</a>
                    </li>
                    <li className="nav__hamburger-item ham_register">
                      <a href="/register">Register</a>
                    </li>
                  </>
                )
                : (
                  <>
                    <li className="nav__hamburger-item ham_register">
                      <a href="/app/dashboard">Go to App</a>
                    </li>
                  </>
                )
            }
          </ul>
        </div>

      </nav>
    </motion.div>
  );
};

export default Navbar;
