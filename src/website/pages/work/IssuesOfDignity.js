import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import DocumentsAndEntitlements from './issuesOfDignityAccordian/DocumentsAndEntitlements';
import DenotifiedTribes from './issuesOfDignityAccordian/DenotifiedTribes';
import MentalHealth from './issuesOfDignityAccordian/MentalHealth';
import { Helmet } from "react-helmet";
const IssuesOfDignity = () => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Muskaan - Issues Of Dignity And Survival</title>
                <meta name="twitter:title" content='Issues Of Dignity And Survival' />
                <meta name="description" content="muskaan ngo" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>

            <div className='bgpettern pb-5 page-margin page-heigh'>
                <Container className='pt-4'>
                    <h4>Issues Of Dignity And Survival</h4>
                    <p>Home  / Work / Issues Of Dignity And Survival</p>
                    <div className='with_aside-border history'>
                        <Accordion defaultActiveKey="0" className='mt-3'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Documents And Entitlements</Accordion.Header>
                                <Accordion.Body>
                                    <DocumentsAndEntitlements />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Denotified Tribes</Accordion.Header>
                                <Accordion.Body>
                                    <DenotifiedTribes />
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Mental Health</Accordion.Header>
                                <Accordion.Body>
                                    <MentalHealth />
                                </Accordion.Body>
                            </Accordion.Item>



                        </Accordion>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default IssuesOfDignity