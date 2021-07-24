const Footer = () => (
  <footer className="footer">
    <div className="grid">
      <div className="footer__contain">
        <div className="footer__contain--logo">
          <a href="#home" className="logoup" />
        </div>
        <div className="footer__list">
          <div className="footer__list--item">
            <div className="footer__title">Site Map</div>
            <a href="/#home">Home</a>
            <a href="/#services">Services</a>
            <a href="/#test">Psy-Test</a>
            <a href="/#contact">About Us</a>
          </div>
          <div className="footer__list--item">
            <div className="footer__title">Services</div>
            <a href="/#">Our Services</a>
            <a href="/#">Get In Touch</a>
            <a href="/#">Advertising</a>
            <a href="/#">Term of Services</a>
          </div>
          <div className="footer__list--item">
            <div className="footer__title">Contact</div>
            <a href="/#">Our Services</a>
            <a href="/#">Get In Touch</a>
            <a href="/#">Advertising</a>
            <a href="/#">Term of Services</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;