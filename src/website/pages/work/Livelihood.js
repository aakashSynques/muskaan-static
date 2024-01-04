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

      <div className='bgpettern pb-5 page-margin page-heigh'>
        <Container className='pt-4'>
          <h4>Livelihoods</h4>
          <p>Home  / Work / Livelihoods</p>
          <div className='with_aside-border history'>
            <Accordion defaultActiveKey="0" className='mt-3'>
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
          </div>
        </Container>
      </div>
    </>
  )
}

export default Livelihood