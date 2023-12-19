import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const Slider = React.memo(() => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item>
                    <picture>
                        <source srcSet={require('../assets/images/sliderImg/muskaan-banner1.webp')} type="image/webp" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                        <link rel="preload" as="image" href={require('../assets/images/sliderImg/muskaan-banner1.jpg')} />
                        {/* <img
                        loading="lazy"
                            src={require('../assets/images/sliderImg/muskaan-banner1.jpg')}
                            srcset="{require('../assets/images/sliderImg/muskaan-banner1.jpg')} 320w,
                           {require('../assets/images/sliderImg/muskaan-banner1.jpg')} 480w,
                            {require('../assets/images/sliderImg/muskaan-banner1.jpg')} 800w"
                            sizes="(max-width: 320px) 280px,
                       (max-width: 480px) 440px,
                           800px"
                            alt="Description"
                            className="d-block w-100 slider-img"
                        /> */}
    
                            <img data-src={require('../assets/images/sliderImg/muskaan-banner1.webp')}
                            loading="lazy"
                             srcset={require('../assets/images/sliderImg/muskaan-banner1.jpg')}
                             sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px" alt="Description" 
                             className="d-block w-100 slider-img" />

                    </picture>
                </Carousel.Item>
                <Carousel.Item>
                    <picture>
                        <source srcSet={require('../assets/images/sliderImg/slider2.webp')} type="image/webp" className="d-block w-100 slider-img" />
                        <source srcSet={require('../assets/images/sliderImg/muskaan-banner.avif')} type="image/avif" className="d-block w-100 slider-img" />
                        <Image  loading="lazy" src={require('../assets/images/sliderImg/slider2.webp')} alt="Muskaan ngo"
                            className="d-block w-100 slider-img" />
                    </picture>
                </Carousel.Item>
            </Carousel>

        </div>
    );
});
export default Slider;
