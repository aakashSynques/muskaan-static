import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import AboutSideBar from './AboutSideBar'
import myPdf from '../../assets/pdfFile/2020-21 - Muskaan Audited accounts.pdf'
import myPdf2 from '../../assets/pdfFile/2021-22 - Muskaan Audited accounts.pdf'
import myPdf3 from '../../assets/pdfFile/2022-23 - Muskaan Audited accounts.pdf'
import myPdf4 from '../../assets/pdfFile/FCRA Q1 Apr - June 2023.pdf'
import myPdf5 from '../../assets/pdfFile/FCRA Q2 July - Sept 2023.pdf'
import myPdf6 from '../../assets/pdfFile/FCRA Q3 Oct - Dec 2022.pdf'
import { FaCheck } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import PageTitle from '../../component/PageTitle'
const Financial = () => {
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>Muskaan - Financial</title>
                <meta name="title" content='financial' />
                <meta name="description" content="muskaan ngo" />
                <meta name="theme-color" content="#E6E6FA" />
            </Helmet>
            <PageTitle pageTitle="Financial" />
            <div className='bgpettern pb-5'>
                <Container className='pt-4'>
                    <h4>Financials</h4>
                    <p>Home  / Financials</p>
                    <Row className='with_aside-border history'>
                        <Col sm={10} className='tab_tabbing'>
                            <ul>
                                <li>
                                    <FaCheck className='main-color' /> &nbsp;
                                    FCRA Q1 Apr - June 2023
                                    <span className='pull-right'>
                                        <a href={myPdf4} target="_blank">
                                            View
                                        </a>
                                        <a href={myPdf4} target="_blank" download>
                                            Download
                                        </a>
                                    </span>
                                </li>


                                <li>
                                    <FaCheck className='main-color' /> &nbsp;
                                    FCRA Q2 July - Sept 2023
                                    <span className='pull-right'>
                                        <a href={myPdf5} target="_blank">
                                            View
                                        </a>
                                        <a href={myPdf5} target="_blank" download>
                                            Download
                                        </a>
                                    </span>
                                </li>


                                <li>
                                    <FaCheck className='main-color' /> &nbsp;
                                    FCRA Q3 Oct - Dec 2022
                                    <span className='pull-right'>
                                        <a href={myPdf6} target="_blank">
                                            View
                                        </a>
                                        <a href={myPdf6} target="_blank" download>
                                            Download
                                        </a>
                                    </span>
                                </li>


                                <li>
                                    <FaCheck className='main-color' /> &nbsp;
                                    Annual Report 2020 - 2021
                                    <span className='pull-right'>
                                        <a href={myPdf} target="_blank">
                                            View
                                        </a>
                                        <a href={myPdf} target="_blank" download>
                                            Download
                                        </a>
                                    </span>
                                </li>

                                <li>
                                    <FaCheck className='main-color' /> &nbsp;
                                    Annual Report 2021 - 2022
                                    <span className='pull-right'>
                                        <a href={myPdf2} target="_blank">
                                            View
                                        </a>
                                        <a href={myPdf2} target="_blank" download>
                                            Download
                                        </a>
                                    </span>
                                </li>

                                <li>
                                    <FaCheck className='main-color' /> &nbsp;
                                    Annual Report 2022 - 2023
                                    <span className='pull-right'>
                                        <a href={myPdf3} target="_blank">
                                            View
                                        </a>
                                        <a href={myPdf3} target="_blank" download>
                                            Download
                                        </a>
                                    </span>
                                </li>

                            </ul>
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

export default Financial