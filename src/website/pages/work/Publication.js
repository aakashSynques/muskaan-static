import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Container, Row } from 'react-bootstrap';
import policies2 from '../../assets/pdfFile/Muskaan_Publication-Catalouge_2022.pdf'
import { Helmet } from "react-helmet";
const Publication = () => {
    return (
        <>
          <Helmet>
        <html lang="en" />
        <title>Muskaan - Publication</title>
        <meta name="twitter:title" content='Publication' />
        <meta name="description" content="muskaan ngo" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet>
            <div className='connect-bg fixed-bg'>
                <Container className='text-center text-white'>
                    <h1>Publication</h1>
                </Container>
            </div>

            <Container className='mt-5'>
                <Row>
                    <iframe src={policies2} width='100%' height='700px' />
                </Row>
            </Container>

        </>
    )
}

export default Publication