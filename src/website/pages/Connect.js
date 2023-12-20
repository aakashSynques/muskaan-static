import React from 'react'
import { Container} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contect from './connectTabs/Contect';

import Internship from './connectTabs/Internship';
import Volunteer from './connectTabs/Volunteer';
import DonateNow from './connectTabs/DonateNow';
import Jobs from './connectTabs/Jobs';
import { Helmet } from "react-helmet";



const Connect = () => {

  return (
    <>
        <Helmet>
        <html lang="en" />
        <title>Muskaan - Connect</title>
        <meta name="twitter:title" content='Connect' />
        <meta name="description" content="muskaan ngo" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>

      <div className='connect-bg fixed-bg'>
        <Container className='text-center text-white'>
          <h1>Connect</h1>
        </Container>
      </div>

      <div className='mt-5 communication-tab'>
        <Container>
          <Tabs
            defaultActiveKey="one"
            id="fill-tab-example"

          // fill
          >

            <Tab eventKey="one" title="Donate Now">
              <DonateNow />
            </Tab>
            <Tab eventKey="two" title="Jobs">
              <Jobs />
            </Tab>
            <Tab eventKey="five" title="Volunteer">
              <Volunteer />
            </Tab>
            <Tab eventKey="tree" title="Social Media">
              {/* <Career /> */}
              Social Media
            </Tab>
            <Tab eventKey="four" title=" Internship">
              <Internship />
            </Tab>
            <Tab eventKey="six" title="Contact Us">
              <Contect />
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  )
}

export default Connect
