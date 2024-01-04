import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from '../../website/assets/images/Muskaan-logo.png';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { ImYoutube2 } from "react-icons/im";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={4} xs={12}>
              <div className="footer-box text-center">
                <picture>
                  {/* <source srcSet={require('../assets/images/Muskaan-logo.webp')} type="image/webp" />
                  <source srcSet={require('../assets/images/Muskaan-logo.avif')} type="image/avif" /> */}
                  <img loading="lazy" src={require('../assets/images/Muskaan-logo.png')} alt="Muskaan ngo"
                    className="img-fluid" style={{ width: "25%" }} width='92' height='92' />
                </picture>
                <p>We have been actively working on this journey with members of denotified tribes and the urban poor since 1998.</p>
                <hr />
                <ul className="socials">
                  <li><a href="https://www.facebook.com/MuskaanBhopalNGO/" target="_blank" aria-label="Instagram Profile"><GrFacebookOption />
                  </a></li>
                  <li><a href="https://www.instagram.com/muskaanbhopal" target="_blank" aria-label="Instagram Profile"><FaInstagram />
                  </a></li>
                  <li><a href="https://www.youtube.com/@muskaanbhopal" target="_blank" aria-label="YouTube Channel">
                    <ImYoutube2 />
                  </a></li>
                  {/* <li><a href="https://www.facebook.com/ " target="_blank" aria-label="Instagram Profile"><GrFacebookOption />
                  </a></li> */}
                </ul>
              </div>
            </Col>
            <Col sm={8} >
              <Row className='pt-4'>
                <Col sm={3} xs={6} className='links-footer'>
                  <p style={{ fontSize: '18px' }}><strong>Work</strong></p>
                  <ul className='p-0'>
                    <li><Link to="/work/education" onClick={scrollToTop}>Education</Link></li>
                    <li><Link to="/work/liveLihoods" onClick={scrollToTop}>Livelihoods</Link></li>
                    <li><Link to="/work/sustainable-living" onClick={scrollToTop}>Sustainable Livings</Link></li>
                    <li><Link to="/work/publication" onClick={scrollToTop}>Publication</Link> </li>
                  </ul>
                </Col>
                <Col sm={3} xs={6} className='links-footer'>
                  <p style={{ fontSize: '18px' }}><strong>About US</strong></p>
                  <ul className='p-0'>
                    <li><Link to="/about-us/history" onClick={scrollToTop}>History</Link></li>
                    <li><Link to="/about-us/mission/" onClick={scrollToTop}>Mission</Link></li>
                    <li><Link to="/about-us/our-team/" onClick={scrollToTop}>Our Team</Link> </li>
                    <li><Link to="/about-us/financial/" onClick={scrollToTop}>Accounts</Link></li>
                    <li><Link to="" onClick={scrollToTop}>Disclaimer</Link></li>
                    <li><Link to="" onClick={scrollToTop}>Privacy Policy</Link></li>
                  </ul>
                </Col>
                <Col sm={6} xs={12}>
                  <p style={{ fontSize: '18px' }}><strong>Corporate address</strong></p>
                  <p>Muskaan, Plot No. 264-65, Behind Canara Bank, Neelbad, Bhopal, India – 462 044</p>
                  <p><strong>Connect with us</strong></p>
                  <p>
                    Email: publications@muskaan.org</p> 
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="copyright">
        <Container>
          <Row>
            <Col sm={8}>© 2023 Muskaan. All Rights Reserved</Col>
            <Col sm={4} className="text-right">Powered by <a href="https://www.synques.in/" target='_blank'>SynQues</a></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
