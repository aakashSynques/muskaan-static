


import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import AboutSideBar from './AboutSideBar'
import { Helmet } from "react-helmet";
import PageTitle from '../../component/PageTitle';
const OurTeam = () => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Muskaan - Our team</title>
                <meta name="twitter:title" content='Team' />
                <meta name="description" content="muskaan ngo" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>
            {/* <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Our Team</h1>
                </Container>
            </div> */}
            {/* <PageTitle pageTitle="Our Team" /> */}
            <div className='bgpettern pb-5 page-margin page-heigh'>
                <Container className='pt-4'>
                    <h4>Our Team</h4>
                    <p>Home  / Our Team</p>
                    <Row className='with_aside-border history'>
                        <Col sm={10}>
                            <h5 className='text-center pt-5'>Our Team</h5>
                        </Col>
                        <Col sm={2} className='with_aside-border-left pt-3 '>
                            <h4>About Us</h4>
                            <AboutSideBar />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default OurTeam