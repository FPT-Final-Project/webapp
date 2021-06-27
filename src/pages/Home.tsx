import React from 'react';
import './home.css';
import './homeResponsive.css'

const Home = () => {
  return (
      <div>
      <a href="/#" className="button__top">
        <i className="fas fa-arrow-up" />
      </a>
      <div className="total">
        {/* Header */}
        <div id="home" className="header">
          <div className="grid">
            {/* Navbar */}
            
            <div className="wrap__nav">
              <nav className="header__nav">
                <div className="logo">
                  <h1>PsyCare.</h1>
                </div>
                <ul className="nav__list">
                  <li className="nav__item"><a href="#home">Home</a></li>
                  <li className="nav__item"><a href="#services">Services</a></li>
                  <li className="nav__item"><a href="#test">Psy-Test</a></li>
                  <li className="nav__item"><a href="#contact">About Us</a></li>
                </ul>
                <ul className="nav__login">
                  <li className="nav__item-login login"><a href="/login">Login</a></li>
                  <li className="nav__item-login register">
                    <a href="/register">Register</a>
                  </li>
                </ul>
                {/* =====Mobile====== */}
                <label htmlFor="nav__mobile-input" className="nav__hamburger">
                  <span>Menu</span><i className="fas fa-bars" />
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
                      <a href="#services">Services</a>
                    </li>
                    <li className="nav__hamburger-item ham_under">
                      <a href="#test">Psy-Test</a>
                    </li>
                    <li className="nav__hamburger-item ham_under">
                      <a href="#contact">About Us</a>
                    </li>
                    <li className="nav__hamburger-item ham_login">
                      <a href="/#">Login</a>
                    </li>
                    <li className="nav__hamburger-item ham_register">
                      <a href="/#">Register</a>
                    </li>
                  </ul>
                </div>
                
              </nav>
            </div>
            <div className="banner">
              <div className="banner__text">
                <div className="text">
                  <p id="text_upper">
                    welcome to psycare
                  </p>
                  <p className="text_big" >
                    Psychological
                  </p>
                  <p className="text_big link">
                    Counselling
                  </p>
                  <p id="text_para">
                    Psychology is the study of mind and behavior. It encompasses
                    the biological influences, social pressures.
                  </p>
                  <div>
                    <a href="/#" id="book_app">Book An Appointment</a>
                  </div>
                </div>
                <div className="slider__image" />
              </div>
            </div>
          </div>
        </div>
        {/* Main */}
        {/* =======Services */}
        <div id="services" className="main__service">
          <div className="grid">
            <div className="main__service-text">
              <h1>The Best Services For You</h1>
              <p>
                Psychology is the study of mind and behavior. It encompasses the
                biological influences, social pressures.
              </p>
            </div>
            <div className="main__service-list">
              <div className="main__service-image"  />
              <div className="main__service-item" >
                <div className="services__item">
                  <div className="wrap__icon">
                    <div className="icon">
                      {/* <img src="./assets/brain.svg" /> */}
                      <svg id="Capa_1" enableBackground="new 0 0 512 512" height={512} viewBox="0 0 512 512" width={512} xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="m467.5 218.79c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-27.225h37.882c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-16.361c0-2.651-1.052-5.193-2.926-7.068l-28.917-28.941c-1.875-1.877-4.42-2.932-7.074-2.932h-16.365v-37.848c0-5.523-4.477-10-10-10s-10 4.477-10 10v37.848h-27.23v-37.848c0-5.523-4.477-10-10-10s-10 4.477-10 10v37.848h-27.202v-35.836c0-33.32-27.11-60.427-60.434-60.427-27.264 0-50.959 18.428-58.186 44.029-20.782 2.112-40.037 11.3-54.896 26.343-16.78 16.99-26.021 39.501-26.021 63.386 0 11.853 2.34 23.593 6.827 34.476-14.037 7.459-26.081 18.186-35.211 31.443-11.437 16.608-17.483 36.079-17.483 56.309 0 37.241 20.362 70.644 52.689 87.78-4.482 10.863-6.82 22.593-6.82 34.448 0 23.885 9.241 46.396 26.021 63.386 14.858 15.043 34.113 24.231 54.895 26.343 7.226 25.618 30.923 44.057 58.187 44.057 33.323 0 60.434-27.107 60.434-60.427v-35.864h27.202v37.876c0 5.523 4.477 10 10 10s10-4.477 10-10v-37.876h27.23v37.876c0 5.523 4.477 10 10 10s10-4.477 10-10v-37.876h16.365c2.652 0 5.195-1.053 7.071-2.929l28.917-28.913c1.875-1.875 2.929-4.419 2.929-7.071v-16.39h37.88c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-27.196h37.882c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-27.224h37.882c5.523 0 10-4.477 10-10s-4.477-10-10-10h-37.882v-27.196zm-248.028 273.21c-16.589 0-31.194-10.201-37.343-24.932 7.294-1.306 14.406-3.525 21.245-6.663 9.939-4.563 18.828-10.808 26.419-18.562 3.863-3.947 3.796-10.278-.15-14.142-3.947-3.863-10.277-3.796-14.142.15-5.875 6-12.762 10.837-20.469 14.375-8.144 3.736-16.776 5.807-25.659 6.167-38.072-.628-69.004-32.056-69.004-70.182 0-12.047 3.095-23.917 8.95-34.329 1.412-2.509 1.673-5.505.717-8.22-.955-2.716-3.035-4.888-5.706-5.961-30.27-12.157-49.83-41.093-49.83-73.715 0-32.631 19.557-61.555 49.824-73.686 5.946-3.215 7.613-7.941 5.001-14.175-5.859-10.442-8.956-22.326-8.956-34.366 0-38.126 30.932-69.554 69.004-70.182 8.827.359 17.466 2.432 25.657 6.166 7.721 3.544 14.603 8.385 20.456 14.389 1.96 2.01 4.56 3.02 7.162 3.02 2.516 0 5.035-.944 6.979-2.839 3.955-3.855 4.035-10.187.18-14.141-7.576-7.771-16.47-14.031-26.458-18.616-6.86-3.127-13.962-5.341-21.221-6.646 6.149-14.719 20.754-24.91 37.344-24.91 22.295 0 40.434 18.136 40.434 40.427v122.603h-31.132l-26.531-26.528c2.824-5.155 4.33-10.963 4.33-17.004 0-9.476-3.69-18.385-10.393-25.086-13.832-13.83-36.34-13.831-50.173 0-6.701 6.701-10.392 15.61-10.392 25.085s3.69 18.384 10.392 25.085c6.916 6.915 16.001 10.373 25.086 10.373 5.86 0 11.716-1.448 16.995-4.325l29.472 29.469c2.133 1.909 4.49 2.886 7.071 2.929h35.274v42.956h-62.667c-4.332-14.694-17.948-25.455-34.039-25.455-19.552 0-35.458 15.905-35.458 35.455 0 19.565 15.906 35.483 35.458 35.483 16.094 0 29.712-10.773 34.041-25.483h62.665v42.956h-35.274c-.268 0-.498.014-.71.034-2.318.164-4.591 1.124-6.364 2.897l-29.473 29.493c-13.46-7.335-30.702-5.324-42.078 6.05-6.708 6.708-10.398 15.624-10.392 25.107.006 9.469 3.701 18.364 10.392 25.036 6.918 6.917 16.004 10.374 25.09 10.374 9.082 0 18.164-3.456 25.073-10.364 6.701-6.682 10.396-15.576 10.402-25.045.004-6.05-1.503-11.866-4.332-17.028l26.535-26.553h31.129v122.631c.002 22.292-18.136 40.428-40.431 40.428zm-32.899-352.501c0 4.133-1.61 8.019-4.533 10.942-6.036 6.035-15.855 6.035-21.891 0-2.923-2.923-4.533-6.809-4.533-10.942s1.61-8.02 4.533-10.942c6.036-6.034 15.856-6.034 21.891 0 2.923 2.922 4.533 6.808 4.533 10.942zm-7.888 116.487c0 8.537-6.947 15.483-15.486 15.483-8.523 0-15.458-6.946-15.458-15.483 0-8.521 6.935-15.455 15.458-15.455 8.539 0 15.486 6.933 15.486 15.455zm7.888 116.523c-.003 4.121-1.609 7.991-4.533 10.906-6.036 6.034-15.856 6.035-21.901-.01-2.914-2.905-4.521-6.775-4.523-10.896-.003-4.135 1.607-8.024 4.533-10.95 6.035-6.033 15.855-6.034 21.889-.001.001.001.002.002.003.004 0 0 .001.001.001.001 2.925 2.926 4.534 6.813 4.531 10.946zm223.045.144-23.058 23.056h-106.655v-29.634h90.073c5.523 0 10-4.477 10-10v-55.218c0-5.523-4.477-10-10-10s-10 4.477-10 10v45.218h-80.073v-180.15h80.073v45.104c0 5.523 4.477 10 10 10s10-4.477 10-10v-55.104c0-5.523-4.477-10-10-10h-90.073v-29.662h106.652l23.061 23.081z" />
                          <path d="m369.979 245.958c-5.523 0-10 4.477-10 10v.028c0 5.523 4.477 9.986 10 9.986s10-4.491 10-10.014-4.478-10-10-10z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="title">AI-enabled Diagnostics</div>
                  <div className="description">
                    Embedding AI into diagnostics removes opportunities for human
                    error and saves clinical labs time and money.
                  </div>
                </div>
                <div className="services__item">
                  <div className="wrap__icon">
                    <div className="icon">
                      {/* <img src="./assets/test.svg" /> */}
                      {/* <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 512 512" x="0px" y="0px" width={512} height={512} xmlns:xml="http://www.w3.org/XML/1998/namespace" xmlSpace="preserve" version="1.1"> */}
                      <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 512 512" x="0px" y="0px" width={512} height={512}  xmlSpace="preserve" version="1.1">
                        <g id="XMLID_1203_">
                          <g id="XMLID_1116_">
                            <g id="XMLID_386_">
                              <path id="XMLID_387_" d="M 171.759 128 h 14.518 c 5.522 0 10 -4.477 10 -10 s -4.478 -10 -10 -10 h -14.518 c -1.266 0 -2.296 -1.03 -2.296 -2.296 V 96 h 12.993 c 5.522 0 10 -4.477 10 -10 s -4.478 -10 -10 -10 h -12.993 v -9.704 c 0 -1.266 1.03 -2.296 2.296 -2.296 h 14.518 c 5.522 0 10 -4.477 10 -10 s -4.478 -10 -10 -10 h -14.518 c -12.294 0 -22.296 10.002 -22.296 22.296 v 39.408 C 149.463 117.998 159.465 128 171.759 128 Z" />
                              <path id="XMLID_388_" d="M 239.254 108 h -17.167 c -5.522 0 -10 4.477 -10 10 s 4.478 10 10 10 h 17.167 c 14.337 0 26 -11.664 26 -26 s -11.663 -26 -26 -26 h -1.167 c -3.309 0 -6 -2.691 -6 -6 s 2.691 -6 6 -6 h 11.512 c 5.522 0 10 -4.477 10 -10 s -4.478 -10 -10 -10 h -11.512 c -14.337 0 -26 11.664 -26 26 s 11.663 26 26 26 h 1.167 c 3.309 0 6 2.691 6 6 S 242.563 108 239.254 108 Z" />
                              <path id="XMLID_389_" d="M 129.254 44 h -33 c -5.522 0 -10 4.477 -10 10 s 4.478 10 10 10 h 6.5 v 54 c 0 5.523 4.478 10 10 10 s 10 -4.477 10 -10 V 64 h 6.5 c 5.522 0 10 -4.477 10 -10 S 134.777 44 129.254 44 Z" />
                              <path id="XMLID_390_" d="M 288.754 64 h 6.5 v 54 c 0 5.523 4.478 10 10 10 s 10 -4.477 10 -10 V 64 h 6.5 c 5.522 0 10 -4.477 10 -10 s -4.478 -10 -10 -10 h -33 c -5.522 0 -10 4.477 -10 10 S 283.232 64 288.754 64 Z" />
                              <path id="XMLID_895_" d="M 120.462 168 h -40 c -5.522 0 -10 4.477 -10 10 v 40 c 0 5.523 4.478 10 10 10 h 40 c 5.522 0 10 -4.477 10 -10 v -40 C 130.462 172.477 125.985 168 120.462 168 Z M 110.462 208 h -20 v -20 h 20 V 208 Z" />
                              <path id="XMLID_896_" d="M 323.626 218 c 0 2.63 1.069 5.21 2.93 7.07 s 4.44 2.93 7.07 2.93 s 5.21 -1.07 7.069 -2.93 c 1.87 -1.86 2.931 -4.44 2.931 -7.07 c 0 -2.63 -1.061 -5.21 -2.931 -7.07 c -1.859 -1.86 -4.43 -2.93 -7.069 -2.93 c -2.63 0 -5.21 1.07 -7.07 2.93 C 324.695 212.79 323.626 215.37 323.626 218 Z" />
                              <path id="XMLID_897_" d="M 293.629 208 h -133.5 c -5.522 0 -10 4.477 -10 10 s 4.478 10 10 10 h 133.5 c 5.522 0 10 -4.477 10 -10 S 299.152 208 293.629 208 Z" />
                              <path id="XMLID_941_" d="M 120.462 272 h -40 c -5.522 0 -10 4.477 -10 10 v 40 c 0 5.523 4.478 10 10 10 h 40 c 5.522 0 10 -4.477 10 -10 v -40 C 130.462 276.477 125.985 272 120.462 272 Z M 110.462 312 h -20 v -20 h 20 V 312 Z" />
                              <path id="XMLID_982_" d="M 120.462 376 h -40 c -5.522 0 -10 4.477 -10 10 v 40 c 0 5.523 4.478 10 10 10 h 40 c 5.522 0 10 -4.477 10 -10 v -40 C 130.462 380.477 125.985 376 120.462 376 Z M 110.462 416 h -20 v -20 h 20 V 416 Z" />
                              <path id="XMLID_983_" d="M 246.004 416 h -85.875 c -5.522 0 -10 4.477 -10 10 s 4.478 10 10 10 h 85.875 c 5.522 0 10 -4.477 10 -10 S 251.527 416 246.004 416 Z" />
                              <path id="XMLID_1111_" d="M 486.004 79.59 c -8.791 -5.076 -19.033 -6.423 -28.836 -3.796 c -9.805 2.627 -17.999 8.915 -23.073 17.706 l -9.625 16.67 l 0 0.001 l 0 0.001 l -13.465 23.323 V 34 c 0 -18.748 -15.252 -34 -34 -34 h -336 c -18.748 0 -34 15.252 -34 34 v 444 c 0 18.748 15.252 34 34 34 h 336 c 18.748 0 34 -15.252 34 -34 V 287 c 0 -0.454 -0.041 -0.897 -0.1 -1.335 l 79.383 -137.495 l 9.625 -16.671 C 510.389 113.353 504.15 90.067 486.004 79.59 Z M 462.345 95.112 c 4.644 -1.246 9.495 -0.606 13.659 1.798 c 8.596 4.963 11.551 15.993 6.588 24.589 l -4.625 8.011 l -31.177 -18 l 4.625 -8.011 C 453.82 99.335 457.7 96.356 462.345 95.112 Z M 340.627 367.39 l -31.177 -18 l 127.34 -220.56 l 31.177 18 L 340.627 367.39 Z M 303.717 369.173 l 22.644 13.074 l -27.213 20.988 L 303.717 369.173 Z M 391.004 478 c 0 7.72 -6.28 14 -14 14 h -336 c -7.72 0 -14 -6.28 -14 -14 V 34 c 0 -7.72 6.28 -14 14 -14 h 336 c 7.72 0 14 6.28 14 14 v 134 c 0 0.042 0.006 0.082 0.006 0.123 L 307.944 312 H 160.129 c -5.522 0 -10 4.477 -10 10 s 4.478 10 10 10 h 136.268 l -9.267 16.05 c -0.652 1.13 -1.077 2.377 -1.251 3.67 l -9.786 72.95 c -0.539 4.018 1.4 7.963 4.911 9.99 c 1.554 0.897 3.279 1.34 4.999 1.34 c 2.164 0 4.319 -0.702 6.108 -2.082 l 58.283 -44.95 c 1.033 -0.797 1.9 -1.789 2.553 -2.918 l 38.057 -65.916 V 478 Z" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="title">Quiz Test</div>
                  <div className="description">
                    Embedding AI into diagnostics removes opportunities for human
                    error and saves clinical labs time and money.
                  </div>
                </div>
                <div className="services__item">
                  <div className="wrap__icon">
                    <div className="icon">
                      {/* <img src="./assets/video-call.svg" alt="" /> */}
                      <svg id="Capa_1" enableBackground="new 0 0 512 512" height={512} viewBox="0 0 512 512" width={512} xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <g id="Page-1_61_">
                            <g id="_x30_62---Video-Call">
                              <path id="Shape_298_" d="m375.467 0h-238.934c-18.851 0-34.133 15.282-34.133 34.133v443.733c0 18.851 15.282 34.133 34.133 34.133h238.933c18.851 0 34.133-15.282 34.133-34.133v-443.733c.001-18.851-15.281-34.133-34.132-34.133zm-53.829 17.067-10.94 11.674c-3.233 3.436-7.74 5.387-12.459 5.393h-84.48c-4.717 0-9.224-1.952-12.45-5.393l-10.94-11.674zm-202.171 17.066c0-9.426 7.641-17.067 17.067-17.067h30.438l21.879 23.339c6.461 6.876 15.473 10.782 24.909 10.795h84.48c9.436-.013 18.448-3.918 24.909-10.795l21.879-23.339h30.438c9.426 0 17.067 7.641 17.067 17.067v401.067c0 9.426-7.641 17.067-17.067 17.067h-238.933c-9.426 0-17.067-7.641-17.067-17.067v-401.067zm256 460.8h-238.934c-9.426 0-17.067-7.641-17.067-17.067v-13.278c5.166 3.071 11.057 4.709 17.067 4.745h238.933c6.01-.035 11.901-1.673 17.067-4.745v13.278c0 9.426-7.641 17.067-17.066 17.067z" />
                              <path id="Shape_297_" d="m162.133 384h187.733c14.138 0 25.6-11.462 25.6-25.6v-17.067c-.067-38.419-28.488-70.889-66.56-76.041 6.384-7.759 10.974-16.833 13.44-26.573 15.223-.968 27.24-13.307 27.806-28.551s-10.503-28.439-25.613-30.534v-.434c0-37.703-30.564-68.267-68.267-68.267s-68.267 30.564-68.267 68.267v.435c-15.11 2.094-26.179 15.29-25.613 30.534s12.583 27.583 27.806 28.551c2.457 9.711 7.025 18.761 13.38 26.505-38.29 4.933-66.981 37.502-67.046 76.109v17.066c.001 14.138 11.463 25.6 25.601 25.6zm42.923-187.042c20.958 1.152 53.308-.111 68.378-14.814 7.802 11.72 20.127 19.668 34.022 21.939v17.783c0 28.277-22.923 51.2-51.2 51.2s-51.2-22.923-51.2-51.2zm59.733 92.587c8.579-1.064 16.875-3.761 24.439-7.945h.905v21.854c-.001 2.555-1.147 4.976-3.123 6.596-1.981 1.613-4.577 2.261-7.083 1.766l-15.215-3.046zm-42.922-7.945h1.408c7.561 4.177 15.85 6.87 24.422 7.936l-.051 19.166-15.582 3.115c-2.511.513-5.119-.131-7.104-1.752s-3.136-4.048-3.136-6.611zm136.533 59.733v17.067c0 4.713-3.82 8.533-8.533 8.533h-85.333l.111-40.764 11.947 2.381c7.518 1.5 15.312-.448 21.24-5.309s9.366-12.122 9.369-19.788v-21.171c29.362 4.239 51.164 29.385 51.199 59.051zm-25.344-132.266c-.001 5.424-3.42 10.258-8.533 12.066v-24.132c5.113 1.807 8.532 6.642 8.533 12.066zm-76.8-81.067c28.263.033 51.167 22.937 51.2 51.2v7.518c-12.62-3.859-22.38-13.919-25.856-26.65-1.047-4.178-5.043-6.92-9.318-6.395s-7.488 4.153-7.493 8.46c.083 3.196-1.315 6.251-3.789 8.277-10.027 8.986-36.975 10.573-55.945 9.472v-.682c.029-28.265 22.936-51.172 51.201-51.2zm-76.8 81.067c.001-5.424 3.42-10.258 8.533-12.066v24.132c-5.113-1.808-8.532-6.643-8.533-12.066zm-25.856 132.266c.035-29.667 21.837-54.813 51.2-59.051v21.171c-.018 7.674 3.417 14.948 9.353 19.811s13.745 6.797 21.265 5.269l12.186-2.441-.137 40.841h-85.333c-4.713 0-8.533-3.82-8.533-8.533v-17.067z" />
                              <path id="Shape_296_" d="m76.279 175.283c-2.193-.565-4.521-.234-6.47.918s-3.361 3.032-3.923 5.226c-8.204 32.133-8.204 65.812 0 97.946.969 3.77 4.367 6.407 8.26 6.409.719-.001 1.436-.09 2.133-.265 2.194-.563 4.074-1.974 5.226-3.923s1.483-4.277.918-6.47c-7.498-29.344-7.498-60.102 0-89.446.565-2.193.234-4.521-.918-6.47s-3.032-3.362-5.226-3.925z" />
                              <path id="Shape_295_" d="m40.764 312.661c1.061 2.894 3.599 4.991 6.642 5.486 3.042.495 6.115-.689 8.038-3.097s2.399-5.667 1.243-8.524c-18.693-49.029-18.693-103.223 0-152.252 1.155-2.857.68-6.116-1.243-8.524s-4.996-3.592-8.038-3.097-5.581 2.592-6.642 5.486c-20.219 52.977-20.219 111.545 0 164.522z" />
                              <path id="Shape_294_" d="m435.721 285.517c.698.175 1.414.264 2.133.265 3.893-.002 7.291-2.638 8.26-6.409 8.204-32.133 8.204-65.812 0-97.946-1.178-4.567-5.835-7.314-10.402-6.135-4.567 1.178-7.314 5.835-6.135 10.402 7.498 29.344 7.498 60.102 0 89.446-1.166 4.562 1.584 9.205 6.144 10.377z" />
                              <path id="Shape_293_" d="m460.211 317.559c4.397 1.69 9.332-.502 11.025-4.898 20.219-52.977 20.219-111.545 0-164.523-1.061-2.894-3.599-4.991-6.642-5.486-3.042-.495-6.115.689-8.038 3.097s-2.399 5.667-1.243 8.524c18.693 49.029 18.693 103.223 0 152.252-.814 2.113-.756 4.462.163 6.532s2.622 3.689 4.735 4.502z" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="title">Call Video</div>
                  <div className="description">
                    Embedding AI into diagnostics removes opportunities for human
                    error and saves clinical labs time and money.
                  </div>
                </div>
                <div className="services__item">
                  <div className="wrap__icon">
                    <div className="icon">
                      {/* <img src="./assets/medical.svg" alt="" /> */}
                      <svg id="Layer_1" enableBackground="new 0 0 512 512" height={512} viewBox="0 0 512 512" width={512} xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="m464 32h-40v-8c0-13.233-10.766-24-24-24s-24 10.767-24 24v8h-240v-8c0-13.233-10.766-24-24-24s-24 10.767-24 24v8h-40c-17.645 0-32 14.355-32 32v336c0 17.645 14.355 32 32 32h112c4.418 0 8-3.582 8-8s-3.582-8-8-8h-112c-8.822 0-16-7.178-16-16v-272h448v272c0 8.822-7.178 16-16 16h-88c-4.418 0-8 3.582-8 8s3.582 8 8 8h88c17.645 0 32-14.355 32-32 0-14.641 0-319.924 0-336 0-17.645-14.355-32-32-32zm-72-8c0-4.411 3.589-8 8-8s8 3.589 8 8v40c0 4.411-3.589 8-8 8s-8-3.589-8-8zm-288 0c0-4.411 3.589-8 8-8s8 3.589 8 8v40c0 4.411-3.589 8-8 8s-8-3.589-8-8zm-72 88v-48c0-8.822 7.178-16 16-16h40v16c0 13.233 10.766 24 24 24s24-10.767 24-24v-16h240v16c0 13.233 10.766 24 24 24s24-10.767 24-24v-16h40c8.822 0 16 7.178 16 16v48z" />
                          <path d="m392 336c0-26.468-21.533-48-48-48s-48 21.532-48 48c0 23.741 17.329 43.5 40 47.321v44.679c0 37.495-30.505 68-68 68s-68-30.505-68-68v-44.455c35.948-3.994 64-34.549 64-71.545v-72c0-17.645-14.355-32-32-32-4.418 0-8 3.582-8 8s3.582 8 8 8c8.822 0 16 7.178 16 16v72c0 30.879-25.122 56-56 56s-56-25.121-56-56v-72c0-8.822 7.178-16 16-16 4.418 0 8-3.582 8-8s-3.582-8-8-8c-17.645 0-32 14.355-32 32v72c0 36.996 28.052 67.551 64 71.545v44.455c0 46.317 37.682 84 84 84s84-37.683 84-84v-44.679c22.671-3.821 40-23.58 40-47.321zm-80 0c0-17.645 14.355-32 32-32s32 14.355 32 32c0 14.883-10.214 27.426-24 30.987v-17.152c4.774-2.771 8-7.928 8-13.835 0-8.822-7.178-16-16-16s-16 7.178-16 16c0 5.907 3.226 11.063 8 13.835v17.152c-13.786-3.561-24-16.104-24-30.987z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="title">Make An Apointment</div>
                  <div className="description">
                    Embedding AI into diagnostics removes opportunities for human
                    error and saves clinical labs time and money.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =======Connect============== */}
        <div className="main__connect">
          <div className="grid">
            <div className="main__connect-text">
              <h1>We connect you with top psychologists online</h1>
            </div>
            <div className="main__connect-list">
              <div className="main__connect-item image"  />
              <div className="main__connect-item" >
                <h2>
                  These are the things you expect from us when consulting online
                </h2>
                <div className="connect-subitem">
                  <h3>From the comfort of your own home</h3>
                  <p>
                    Psychological counselling online via video, audio &amp; text chat
                  </p>
                </div>
                <div className="connect-subitem">
                  <h3>No waiting</h3>
                  <p>Initial contact with your psychologist within 24h</p>
                </div>
                <div className="connect-subitem">
                  <h3>From the comfort of your own home</h3>
                  <p>
                    Psychological counselling online via video, audio &amp; text chat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =======About us */}
        {/* <div id="about" class="main__aboutus">
      <h1>ABOUT US</h1>
    </div> */}
        {/* =======Contact */}
        {/* <div id="contact" class="main__contact">
      <h1>CONTACT</h1>
    </div> */}
        {/* =======QuizTest */}
        <div id="test" className="main__quiz">
          <div className="grid">
            <div className="main__quiz-text">
              <h1>The most common topics in psychological test?</h1>
              <p>
                Discover the world of psychological test. Find out how online
                counselling can help you with your topic.
              </p>
            </div>
            <div className="main__quiz-list">
              <div className="main__quiz-item" >
                <div className="wrap-quiz">
                  <h3>Psychological self-test for depression</h3>
                  <p>
                    Discover the world of psychological counselling. Find out how
                    online counselling can help you with your topic.
                  </p>
                  <a href="/#">Let's test now</a>
                </div>
              </div>
              <div className="main__quiz-item" >
                <div className="wrap-quiz">
                  <h3>Psychological self-test for depression</h3>
                  <p>
                    Discover the world of psychological counselling. Find out how
                    online counselling can help you with your topic.
                  </p>
                  <a href="/#">Let's test now</a>
                </div>
              </div>
              <div className="main__quiz-item" >
                <div className="wrap-quiz">
                  <h3>Psychological self-test for depression</h3>
                  <p>
                    Discover the world of psychological counselling. Find out how
                    online counselling can help you with your topic.
                  </p>
                  <a href="/#">Let's test now</a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =======Team */}
        <div className="main__team">
          <div className="grid">
            <div className="main__service-text">
              <h1>The Best Team Doctor For You</h1>
              <p>
                Psychology is the study of mind and behavior. It encompasses the
                biological influences, social pressures.
              </p>
            </div>
            <div className="main__team-list">
              <div className="main__team-item" >
                <div className="doctor__image1" />
                <div className="doctor__title">Dr. Refer David</div>
                <div className="doctor__description">
                  Over 15 years of intensive work experience in the field of
                  psychology, mental health
                </div>
              </div>
              <div className="main__team-item" >
                <div className="doctor__image2" />
                <div className="doctor__title">Dr. John Edison</div>
                <div className="doctor__description">
                  More than 10 years of experience in the field anxious,
                  depression
                </div>
              </div>
              <div className="main__team-item" >
                <div className="doctor__image3" />
                <div className="doctor__title">Dr. Alice Sarah</div>
                <div className="doctor__description">
                  Over 10 years of experience in the field of psychology, mental
                  health.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==========Chart======= */}
        <div className="main__chart">
          <div className="grid">
            <div className="main__chart-list">
              <div className="main__chart-item" />
              <div className="main__chart-item" />
              <div className="main__chart-item" />
            </div>
          </div>
        </div>
        {/* =======Customer */}
        <div id="contact" className="main__customer">
          <div className="grid">
            <div className="main__customer-wrap">
              <div className="main__customer-text" >
                <h1>Our Customer Say something about us</h1>
                <p className="description">
                  ‘’ Psychology is the study of mind and behavior. It encompasses
                  the biological influences, social pressures. It encompasses the
                  biological influences, social pressures. ’’ <br />
                  <br />
                  <span>John Husband</span>
                </p>
              </div>
              <div className="main__customer-image"  />
            </div>
          </div>
        </div>
        {/* FOoter */}
        <footer className="footer">
          <div className="grid">
            <div className="footer__contain">
              <div className="footer__logo">
                <h1>PsyCare.</h1>
              </div>
              <div className="footer__list">
                <div className="footer__item">
                  <h3>Site Map</h3>
                  <p>Home</p>
                  <p>Services</p>
                  <p>About Us</p>
                  <p>Contact</p>
                </div>
                <div className="footer__item">
                  <h3>Services</h3>
                  <p>Our Services</p>
                  <p>Get In Touch</p>
                  <p>Advertising</p>
                  <p>Term of Services</p>
                </div>
                <div className="footer__item">
                  <h3>Contact</h3>
                  <p>Our Services</p>
                  <p>Get In Touch</p>
                  <p>Advertising</p>
                  <p>Term of Services</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;