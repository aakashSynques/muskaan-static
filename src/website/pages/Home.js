import React, { useState } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import video1 from '../assets/video/video1.mp4'
import video2 from '../assets/video/video2.mp4'
import video3 from '../assets/video/video3.mp4'
import { Helmet } from "react-helmet";
const Home = React.memo(() => {
  const [slider, setslider] = useState(0);

  const handleSelect = (selectedIndex) => {
    setslider(selectedIndex);
  };
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Muskaan - Home</title>
        <meta name="twitter:title" content='Home' />
        <meta name="description" content="muskaan ngo" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <Carousel activeIndex={slider} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <picture>
            <source srcSet={require('../assets/images/sliderImg/muskaan-banner1.webp')} type="image/webp"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" />
            <link rel="preload" fetchpriority="high" as="image" href={require('../assets/images/sliderImg/muskaan-banner1.jpg')} />
            <img rel="preload" fetchpriority="high" as="image" data-src={require('../assets/images/sliderImg/muskaan-banner1.webp')}
              srcset={require('../assets/images/sliderImg/muskaan-banner1.jpg')}
              alt="Description" 
              className="d-block w-100 slider-img" loading="lazy"
            />

          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet={require('../assets/images/sliderImg/slider2.webp')} type="image/webp" className="d-block w-100 slider-img" />
            <source srcSet={require('../assets/images/sliderImg/muskaan-banner.avif')} type="image/avif" className="d-block w-100 slider-img" />
            <img rel="preload" fetchpriority="low" as="image" src={require('../assets/images/sliderImg/slider2.webp')} alt="Muskaan ngo"
              className="d-block w-100 slider-img" />
          </picture>
        </Carousel.Item>
      </Carousel>

      {/* About section */}
      <Container className='p70'>
        <Row>
          <Col sm={6}>
            <div className='about-section section-title pe-lg-5 pt-4 pe-md-0'>
              <h2 >About Us</h2>
              <p>At Muskaan, we are committed to empowering children and young individuals from marginalized communities through education. Our approach encourages and enables them to explore and address the realities of their own lives as well as of other vulnerable people around them. We adopt these critical learning processes in our formal school and out-of-school community spaces, as libraries and learning centres.</p>
              <p>Muskaan operates at the grassroots level in informal urban settlements and villages in order to nurture the potential of people across various age groups and life-stages. We try to focus on individual journeys of community members while drawing strength from collective pursuits. A key aspect of our undertaking is to strengthen leadership within marginalized communities, enabling them to spearhead and guide interventions at community level.</p>
              <Link to="/about-us"><Button className='btn btn-danger'>Learn more</Button> </Link>
            </div>
          </Col>
          <Col sm={6}>
            <div className="about-image about-one-img d-none d-sm-block">
              <picture>
                <source srcSet={require('../assets/images/about1.webp')} type="image/webp" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                <link rel="preload" as="image" href={require('../assets/images/about1.jpg')} />
                <img data-src={require('../assets/images/about1.jpg')}
                  srcset={require('../assets/images/about1.jpg')}
                  sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="Description" width='100%' height='auto'
                  className="shadow d-none d-sm-block img-fluid" fetchpriority="low"
                />
              </picture>

              <img data-src={require('../assets/images/about2.jpg')}
                srcset={require('../assets/images/about2.webp')}
                sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="Description" width='auto' height='auto'
                className="shadow imh-fluid" fetchpriority="low" />
            </div>
          </Col>
        </Row>
      </Container>
      <section className="about-section bd-bottom shape circle padding mt-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center section-title">
              <h2>Our Work</h2>
              <p>We work in a wide range of areas to maximize the impact we can create.</p>
            </Col>
          </Row>

          <Row>
            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/education.png')}
                    srcset={require('../assets/images/workimge/education.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="Description"
                    width='100%' height='auto'
                    className="img-fluid" fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>EDUCATION</h3>
                <p>More than 90% of children of marginalized communities do not finish school.</p>
                <Link to='/work/education' className='text-dark'>
                  Read More
                </Link>
              </div>
            </Col>

            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/capable.png')}
                    srcset={require('../assets/images/workimge/capable.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="empowering-children-and-youth"
                    className="img-fluid" width='100%' height='auto' fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>EMPOWERING CHILDREN AND YOUTH</h3>
                <p>We believe that with the kind of energy that youth contains.</p>
                <Link to='/work/education' className='text-dark'>
                  Read More
                </Link>
              </div>
            </Col>

            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/life.png')}
                    srcset={require('../assets/images/workimge/life.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="ISSUES OF DIGNITY AND SURVIVAL"
                    className="img-fluid" width='100%' height='auto' fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>ISSUES OF DIGNITY AND SURVIVAL</h3>
                <p>The current atmosphere demands documentation that proves the.</p>
                <Link to='/work/issues-of-dignity-and-survival' className='text-dark'>
                  Read More
                </Link>
              </div>
            </Col>

            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/livelyhood-2.png')}
                    srcset={require('../assets/images/workimge/livelyhood-2.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="liveLihoods"
                    className="img-fluid" width='100%' height='auto' fetchpriority="low" />
                </picture>

                <h3 className='f-w-6 pt-2'>LIVELIHOODS</h3>
                <p>With the challenges of Covid-19 pandemic and the lockdowns.</p>
                <Link to='/work/liveLihoods' className='text-dark'>
                  Read More
                </Link>
              </div>
            </Col>

            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/living.png')}
                    srcset={require('../assets/images/workimge/living.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="sustainable-living"
                    className="img-fluid" width='100%' height='auto' fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>SUSTAINABLE LIVING</h3>
                <p>We believe in the philosophy of sustainable living that aims</p>
                <Link to='/work/sustainable-living' className='text-dark'>
                  Read More
                </Link>
              </div>
            </Col>
            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/three-books.png')}
                    srcset={require('../assets/images/workimge/three-books.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="sustainable-living"
                    className="img-fluid" width='100%' height='auto' fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>PUBLICATIONS</h3>
                <p>Muskaan Publication Catalouge</p>
                <Link to='/work/publication' className='text-dark'>
                  Read More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='p70'>
        <Container>
          <Row>
            <Col lg={12} className="text-center section-title">
              <h2>Muskaan's YouTube Channel</h2>
            </Col>
          </Row>
          <Row>

            <Col sm={4} className='py-3'>
              <video width="100%" height="auto" controls>
                <source src={video1} type="video/mp4" />
              </video>
            </Col>


            <Col sm={4} className='py-3'>
              <video width="100%" height="auto" controls>
                <source src={video2} type="video/mp4" />
              </video>
            </Col>
            <Col sm={4} className='py-3'>
              <video width="100%" height="auto" controls>
                <source src={video3} type="video/mp4" />
              </video>
            </Col>
          </Row>
          <div className="col-lg-12 text-center section-title">
            <a href="https://www.youtube.com/@muskaanbhopal" target="_blank" className="btn-1">See more</a>
          </div>
        </Container>
      </section>
      <section className="p70">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center section-title">
              <h2>Recent Blogs</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 padding-15">
              <div className="blog-post">
                <picture>
                  <img data-src={require('../assets/images/blogimg1.jpg')}
                    srcset={require('../assets/images/blogimg1.webp')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="Description"
                    width="100%" height="auto" fetchpriority="low" />
                </picture>

                <div className="blog-content" style={{ backgroundColor: '#F5F5F5', color: '#333' }}>
                  <span className="date" style={{ color: '#000' }}>January 01, 2021</span>
                  <h3>
                    <a href="#">पायल खो गई</a>
                  </h3>
                  <p>
                    मटमैली धूप, काई-से रंग का आसमान और उसके नीचे काई
                    रंग का ही तालाब, सीमेंट और धूल ..
                  </p>
                  <a href="#" className="post-meta"><b>Read More</b></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 padding-15">
              <div className="blog-post">
                <picture>
                  <source srcSet={require('../assets/images/blog/blog-2.webp')} type="image/webp" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                  <link rel="preload" as="image" href={require('../assets/images/blog/blog-2.jpg')} />
                  <img data-src={require('../assets/images/blog/blog-2.webp')}
                    srcset={require('../assets/images/blog/blog-2.jpg')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="Description"
                    className="shadow d-none d-sm-block img-fluid" width='100%' height='auto' fetchpriority="low" />
                </picture>

                <div className="blog-content" style={{ backgroundColor: '#F5F5F5', color: '#333' }}>
                  <span className="date" style={{ color: '#000' }}>December 19, 2022</span>
                  <h3>
                    <a href="#" className='text-dark'>इंग्लिश रीडर किन मानकों पर है खरी</a>
                  </h3>
                  <p>
                    लेखक: शिवानी तनेजा
                    अनुवाद: अचलेश शर्मा
                    पाठ्य पुस्तक समीक्षा वर्तमान शिक्षा प्रणाली, यहाँ तक
                    कि ..
                  </p>
                  <a href="#" className="post-meta"><b>Read More</b></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 padding-15">
              <div className="blog-post">
                <picture>
                  <source srcSet={require('../assets/images/blog/blog-3.webp')} type="image/webp" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                  <link rel="preload" as="image" href={require('../assets/images/blog/blog-3.jpg')} />
                  <img data-src={require('../assets/images/blog/blog-3.webp')}
                    srcset={require('../assets/images/blog/blog-3.jpg')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="Description"
                    className="shadow d-none d-sm-block img-fluid" width='100%' height='auto' fetchpriority="low" />
                </picture>

                <div className="blog-content" style={{ backgroundColor: '#F5F5F5', color: '#333' }}>
                  <span className="date" style={{ color: '#000' }}>December 19, 2022</span>
                  <h3><a href="#">सफरनामा: एक बाल अखबार का</a></h3>
                  <p>
                    By महेश झरबड़े
                    नवीन हाईस्कूल 25वीं बटालियन,भोपाल में प्राथमिक शाला
                    के बच्चों के साथ काम करते
                  </p>
                  <a href="#" className="post-meta"><b>Read More</b></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Home
