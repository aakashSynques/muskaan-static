import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import PermacultureAndComposting from './sustainableLivingAccordian/PermacultureAndComposting';
import MittiKaGhar from './sustainableLivingAccordian/MittiKaGhar';
import ReducePlastic from './sustainableLivingAccordian/ReducePlastic';

import { Helmet } from "react-helmet";
const SustainableLiving = () => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Muskaan - Sustainable Living</title>
                <meta name="twitter:title" content='Sustainable Living' />
                <meta name="description" content="muskaan ngo" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>
            <div className='bgpettern pb-5 page-margin page-heigh'>
                <Container className='pt-4'>
                    <h4>Sustainable Living</h4>
                    <p>Home  / Work / Sustainable Living</p>
                    <div className='with_aside-border history'>
                        <Accordion defaultActiveKey="0" className='mt-3'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Permaculture And Composting </Accordion.Header>
                                <Accordion.Body>
                                    <PermacultureAndComposting />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Mitti ka Ghar</Accordion.Header>
                                <Accordion.Body>
                                    <MittiKaGhar />
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Reduce Plastic</Accordion.Header>
                                <Accordion.Body>
                                    <ReducePlastic />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default SustainableLiving