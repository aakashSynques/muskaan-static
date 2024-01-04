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



            <div className='bgpettern pb-5 page-margin page-heigh'>
                <Container className='pt-4'>
                    <h4>Publication</h4>
                    <p>Home  / Work / Publication</p>
                    <div className='with_aside-border history'>
                        <div className='mt-3'>
                            <iframe src={policies2} width='100%' height='700px' />
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Publication