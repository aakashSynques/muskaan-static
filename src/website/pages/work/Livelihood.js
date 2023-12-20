import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import CollectiveEnterprises from './livelihoodsAccordian/CollectiveEnterprises';
import MicroEnterprises from './livelihoodsAccordian/MicroEnterprises';
import StitchingCentre from './livelihoodsAccordian/StitchingCentre';
import { Helmet } from "react-helmet";
const Livelihood = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Muskaan - Livelihoods</title>
        <meta name="twitter:title" content='Livelihoods' />
        <meta name="description" content="muskaan ngo" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
      <div className='connect-bg fixed-bg'>
        <Container className='text-center text-white'>
          <h1>Livelihoods</h1>
        </Container>
      </div>

      <div className='mt-5'>
        <Container>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Collective Enterprises </Accordion.Header>
              <Accordion.Body>
                <CollectiveEnterprises />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Micro Enterprises</Accordion.Header>
              <Accordion.Body>
                <MicroEnterprises />
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
              <Accordion.Header>Stitching Centre</Accordion.Header>
              <Accordion.Body>
                <StitchingCentre />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </>
  )
}

export default Livelihood