import React, { useState, useEffect } from 'react';
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

  const redirectToYouTubeChannel = () => {
    window.open("https://www.youtube.com/muskaanbhopal", '_blank');
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const work1 = () => {
    // window.open("/work/education");
    window.location.href = "/work/education";
  };
  const work2 = () => {
    window.location.href = "/work/empowering-children-and-youth";
  };
  const work3 = () => {
    window.location.href = "/work/issues-of-dignity-and-survival";
  };
  const work4 = () => {
    window.location.href = "/work/liveLihoods";
  };
  const work5 = () => {
    window.location.href = "/work/sustainable-living";
  };
  const work6 = () => {
    window.location.href = "/work/publication";
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
        {/* <Carousel.Item className='for-desktop'>
          <picture>
            <source srcSet={require('../assets/images/sliderImg/muskaan-banner1.webp')} type="image/webp" />
            <link rel="preload" fetchpriority="high" as="image" href={require('../assets/images/sliderImg/muskaan-banner1.jpg')} />
            <img
              data-src='/static/media/muskaan-banner1.8b611cac23c23c5bd799.webp'
              srcSet='../assets/images/sliderImg/muskaan-banner1.jpg'
              alt="Description"
              className="d-block slider-img"
              width="1900" height="800"
            />
          </picture>
        </Carousel.Item>


        <Carousel.Item className='for-mobile'>
          <picture>
            <source srcSet={require('../assets/images/sliderImg/muskaan-banner1.webp')} type="image/webp" />
            <link rel="preload" fetchpriority="high" as="image" href={require('../assets/images/sliderImg/muskaan-banner1.jpg')} />
            <img
              data-src='/static/media/muskaan-banner1.8b611cac23c23c5bd799.webp'
              srcSet='../assets/images/sliderImg/muskaan-banner1.jpg'
              alt="Description"
              className="d-block slider-img"
              width="500" height="500"
            />
          </picture>
        </Carousel.Item> */}

        {isMobile ? (
          <Carousel.Item className='for-mobile'>
            <picture>
              <source srcSet={require('../assets/images/sliderImg/b2-mobile.jpg')} type="image/webp" />
              <link rel="preload" fetchpriority="high" as="image" href={require('../assets/images/sliderImg/b2-mobile.jpg')} />
              <img
                data-src='../assets/images/sliderImg/b2-mobile.jpg'
                srcSet='../assets/images/sliderImg/b2-mobile.jpg'
                alt="Description"
                className="slider-img"
                width="100%" height="auto"
              />
            </picture>
          </Carousel.Item>
        ) : (
          <Carousel.Item className='for-desktop'>
            <picture>
              <source srcSet={require('../assets/images/sliderImg/b2-web.webp')} type="image/webp"        className="responsive-img"/>
              <link rel="preload" fetchpriority="high" as="image" href={require('../assets/images/sliderImg/b2.jpg')}  className="responsive-img"/>
              <img
                data-src='/static/media/b2-web.webp'
                srcSet='../assets/images/sliderImg/b2.jpg'
                alt="Description"
                className=" responsive-img"
  
              />
            </picture>
          </Carousel.Item>
        )}


        <Carousel.Item>
          <picture>
            <source srcSet={require('../assets/images/sliderImg/b1-web.webp')} type="image/webp"  className=" responsive-img"/>
            <link rel="preload" fetchpriority="high" as="image"
              href={require('../assets/images/sliderImg/b1-web.webp')} />

            <img rel="preload" fetchpriority="high" as="image"
              data-src={require('../assets/images/sliderImg/b1-web.webp')}
              srcset={require('../assets/images/sliderImg/b1.jpg')}
              alt="Description"                 className=" responsive-img"
              
             />
          </picture>
        </Carousel.Item>



        {isMobile ? (
          <Carousel.Item className='for-mobile'>
            <picture>
              <source srcSet={require('../assets/images/sliderImg/b1-mobile.jpg')} type="image/webp" />
              <link rel="preload" fetchpriority="high" as="image" href={require('../assets/images/sliderImg/b1-mobile.jpg')} />
              <img
                data-src='../assets/images/sliderImg/b1-mobile.jpg'
                srcSet='../assets/images/sliderImg/b1-mobile.jpg'
                alt="Description"
                className="slider-img"
                width="100%" height="auto"
              />
            </picture>
          </Carousel.Item>
        ) : (
          <Carousel.Item className='for-desktop'>
            <picture>
              <source srcSet={require('../assets/images/sliderImg/b1-web.webp')} type="image/webp"        className="responsive-img"/>
              <link rel="preload" fetchpriority="high" as="image" href={require('../assets/images/sliderImg/b1.jpg')}  className="responsive-img"/>
              <img
                data-src='/static/media/b1-web.webp'
                srcSet='../assets/images/sliderImg/b1.jpg'
                alt="Description"
                className=" responsive-img"
  
              />
            </picture>
          </Carousel.Item>
        )}

      </Carousel>

      {/* About section */}
      <Container className='p70'>
        <Row>
          <Col sm={6}>
            <div className='about-section section-title pe-lg-5 pt-4 pe-md-0'>
              <h2 >About Us</h2>
              <p>At Muskaan, we are committed to empowering children and young individuals from marginalized communities through education. Our approach encourages and enables them to explore and address the realities of their own lives as well as of other vulnerable people around them. We adopt these critical learning processes in our formal school and out-of-school community spaces, as libraries and learning centres.</p>
              <p>Muskaan operates at the grassroots level in informal urban settlements and villages in order to nurture the potential of people across various age groups and life-stages. We try to focus on individual journeys of community members while drawing strength from collective pursuits. A key aspect of our undertaking is to strengthen leadership within marginalized communities, enabling them to spearhead and guide interventions at community level
                <br />
                <Link to="/about-us" className='btn main-bg text-white mt-4' title="Learn more about Muskaan">Read More...</Link>
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <div className="about-image about-one-img d-none d-sm-block">
              <picture>
                <source srcSet={require('../assets/images/about1.webp')} type="image/webp" />
                <link rel="preload" as="image" href={require('../assets/images/about1.webp')} />
                <img data-src={require('../assets/images/about1.webp')}
                  srcset={require('../assets/images/about1.jpg')}
                  alt="Description" width="500" height="500"
                  className="shadow d-none d-sm-block img-fluid" fetchpriority="low"
                />
              </picture>




              <picture>
                <source srcSet={require('../assets/images/about2.webp')} type="image/webp" />
                <link rel="preload" as="image" href={require('../assets/images/about2.webp')} />
                <img data-src={require('../assets/images/about2.jpg')}
                  srcset={require('../assets/images/about2.webp')}
                  alt="Description"
                  width="400"
                  height="300"
                  class="shadow imh-fluid"
                  fetchpriority="low" />
              </picture>
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
                    alt="Description"
                    width='352' height='352'
                    className="img-fluid" fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>EDUCATION</h3>
                <p>More than 90% of children of marginalized communities do not finish school 
       
                </p>  
                <button className='btn' onClick={work1}>Read More</button>             
              </div>
            </Col>

            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/capable.png')}
                    srcset={require('../assets/images/workimge/capable.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="empowering-children-and-youth"
                    className="img-fluid" width='352' height='352' fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>EMPOWERING CHILDREN AND YOUTH</h3>
                <p>We believe that with the kind of energy that youth contains
                 
                </p>
                {/* <Link to='/work/empowering-children-and-youth' title="Empowering Children" className='text-dark'>
                    Read More
                  </Link> */}
                      <button className='btn' onClick={work2}>Read More</button>         
              </div>
            </Col>

            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/life.png')}
                    srcset={require('../assets/images/workimge/life.png')}
                    alt="ISSUES OF DIGNITY AND SURVIVAL"
                    className="img-fluid" width='352' height='352' fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>ISSUES OF DIGNITY AND SURVIVAL</h3>
                <p>The current atmosphere demands documentation that proves the
                  {/* <Link to='/work/issues-of-dignity-and-survival' title="Issues Of Dignity" className='text-dark' >
                    Read More
                  </Link> */}
                </p>
                <button className='btn' onClick={work3}>Read More</button>   
              </div>
            </Col>

            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/livelyhood.png')}
                    srcset={require('../assets/images/workimge/livelyhood.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="liveLihoods"
                    className="img-fluid" width='352' height='352' fetchpriority="low" />
                </picture>

                <h3 className='f-w-6 pt-2'>LIVELIHOODS</h3>
                <p>With the challenges of Covid-19 pandemic and the lockdowns
                  {/* <Link to='/work/liveLihoods' title="LiveLihoods" className='text-dark'>
                    Read More
                  </Link> */}
                </p>
                <button className='btn' onClick={work4}>Read More</button>  
              </div>
            </Col>

            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/living.png')}
                    srcset={require('../assets/images/workimge/living.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="sustainable-living"
                    className="img-fluid" width='352' height='352' fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>SUSTAINABLE LIVING</h3>
                <p>We believe in the philosophy of sustainable living that aims
                  {/* <Link to='/work/sustainable-living' title="Sustainable Living" className='text-dark'>
                    Read More
                  </Link> */}
                </p>
                <button className='btn' onClick={work5}>Read More</button>  
              </div>
            </Col>
            <Col lg={4} className="my-2">
              <div className="work-box">
                <picture>
                  <img data-src={require('../assets/images/workimge/three-books.png')}
                    srcset={require('../assets/images/workimge/three-books.png')}
                    sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="sustainable-living"
                    className="img-fluid" width='352' height='352' fetchpriority="low" />
                </picture>
                <h3 className='f-w-6 pt-2'>PUBLICATIONS</h3>
                <p>Muskaan Publication Catalouge
                  {/* <Link to='/work/publication' title="Publication" className='text-dark'>
                    Read More
                  </Link> */}
                </p>
                <button className='btn' onClick={work6}>Read More</button>  
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
            {/* <a href="https://www.youtube.com/muskaanbhopal"
              title="Muskaan Bhopal YouTube Channel" target='_blank'
              className='btn main-bg text-white'>Visit Muskaan ouTube Channel</a> */}
            <button onClick={redirectToYouTubeChannel} className='btn main-bg text-white'>Visit Muskaan YouTube Channel
            </button>
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
                  <img data-src={require('../assets/images/blog/blogimg11.jpg')}
                    srcset={require('../assets/images/blog/blogimg11.jpg')}
                    alt="Description"
                    width='416' height='277' fetchpriority="low" />
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
                  <img
                    data-src={require('../assets/images/blog/blog-22.jpg')}
                    srcset={require('../assets/images/blog/blog-22.jpg')}
                    alt="Description"
                    width='416' height='277' fetchpriority="low" />
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
                  <img data-src={require('../assets/images/blog/blog-3.jpg')}
                    srcset={require('../assets/images/blog/blog-3.jpg')}
                    alt="Description"
                    width='416' height='277' fetchpriority="low" />
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
