import React from 'react';
import {Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function WorkBox({ imageSrc, title, description, link, alt }) {
    return (
        <Col lg={4} className="my-2">
            <div className="work-box">
                <Image src={imageSrc} fluid alt={alt}  loading="lazy"  />
                <h3 className='f-w-6 pt-2'>{title}</h3>
                <p>{description}</p>
                <Link to={link} className='text-dark'>
                    Read More
                </Link>
            </div>
        </Col>
    );
}
export default WorkBox;
