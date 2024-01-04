import React from 'react'
import { Container, Col, Row, Image, Card, CardBody } from 'react-bootstrap'
import AboutSideBar from './AboutSideBar'
import PageTitle from '../../component/PageTitle'

const Collaborations = () => {
    return (
        <>
 
            {/* <PageTitle pageTitle='Collaborations' /> */}
            <div className='bgpettern pb-5 page-margin page-heigh'>
                <Container className='pt-4'>
                    <h4>Collaborations</h4>
                    <p>Home  / Collaborations</p>
                    <Row className='with_aside-border history'>
                        <Col sm={10}>
                            {/* <h5 className='text-center pt-5'>Collaborations</h5> */}
                            {/* <table class="table">
                                <tbody>
                                    <tr>
                                        <th><Image src={require('../../assets/images/aboutlogo/bhasha_logo.png')} alt="" className='w-100' />
                                        </th>
                                        <td>Bhasha Trust was founded in 1996 for the study, documentation and
                                            conservation of language, arts, culture, education and social harmony.of
                                            nomadic and denotified communities.</td>
                                    </tr>

                                </tbody>
                            </table> */}
                            <Row className='mt-5 collebration-card'>
                            <Col sm={6} lg={4} className='py-2'>
                                    <Card>
                                        <CardBody>
                                            <Image src={require('../../assets/images/aboutlogo/Jan Sahas logo.png')} className='w-100' />
                                            <p className='pt-5'>Jan Sahas is a community and survivor centric not-for-profit organisation. Jan
                                                Sahas works with an aim to eliminate sexual violence and forced labour with a
                                                focus on the most excluded social groups through a comprehensive approach of-
                                                Prevention, Response, Rehabilitation and Systemic Reform.</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={4} className='py-2'>
                                    <Card>
                                        <CardBody>
                                            <Image src={require('../../assets/images/aboutlogo/New-AARAMBH-Logo.jpeg')} className='w-100 pt-4' />
                                            <p className='pt-5'>ARAMBH is a Nationally recognized agency to impart training to the concerned
                                                Government Authorities specially Police Dept. and Women &amp; Child Welfare Dept.
                                                working for the children on Child Rights, JJ Act, ICPS and POCSO and Planned
                                                Reunification of Children from CCIs</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col xs={12} md={6} lg={4} className='py-2'>
                                    <Card>
                                        <CardBody>
                                            <Image src={require('../../assets/images/aboutlogo/bhasha_logo.png')} alt="" className='w-100' />
                                            <p className='pt-5'>Bhasha Trust was founded in 1996 for the study, documentation and
                                                conservation of language, arts, culture, education and social harmony.of
                                                nomadic and denotified communities.</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col sm={6} md={6} lg={4} className='py-2'>
                                    <Card>
                                        <CardBody>
                                            <Image src={require('../../assets/images/aboutlogo/Kota Heritage Society.jpeg')} className='w-100 pt-5' />
                                            <p className='pt-4'>The Kota Heritage Society exists to enable friends of Kota&#39;s heritage to share the
                                                responsibility for its upkeep and preservation. Among many other programs, KHS
                                                is also involved in work with DNTs.</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm={6} lg={4} className='py-2'>
                                    <Card>
                                        <CardBody>
                                            <Image src={require('../../assets/images/aboutlogo/Sangini Logo.png')} className='w-100 pt-5 mt-3' />
                                            <p className='pt-5'>Established in 2003, Sangini works towards gender equality by serving as a
                                                formal gender resource center, facilitating access to information and resources
                                                for development professionals, and striving to protest gender-based inequalities
                                                and promote justice through capacity building and public sensitization efforts.</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm={6} lg={4} className='py-2'>
                                    <Card>
                                        <CardBody>
                                            <Image src={require('../../assets/images/aboutlogo/Budhan logo.png')} className='w-100 pt-5' />
                                            <p className='pt-5'>Since 1998, Budhan Theatre’s mission is to challenge stigmas surrounding the
                                                Chhara community and other DNTs through expressionist theatre, aiming for
                                                social change and constitutional recognition by raising awareness of their
                                                historical struggles.</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                           

                                <Col sm={6} lg={4} className='py-2'>
                                    <Card>
                                        <CardBody>
                                            <Image src={require('../../assets/images/aboutlogo/EKA logo.jpeg')} className='w-100 '  style={{padding: "0 100px"}}/>
                                            <p className='pt-3'>The Community Development Initiative works with urban poor households in
                                                Bhopal with a focus on Participatory Communication &amp; Collective Action.
                                                Communities we work with include working children, women artisans, daily wage
                                                earners in the unorganized sector, out of school adolescent girls and young
                                                people.</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm={6} lg={4} className='py-2'>
                                    <Card>
                                        <CardBody>
                                            <Image src={require('../../assets/images/aboutlogo/grameen shiksha kendra-logo.jpeg')} className='w-100 ' style={{padding: "0 80px"}}/>
                                            <p className='pt-4'>Gramin Shiksha Kendra addresses the demand for quality education in rural
                                                Sawai Madhopur through the Uday Community Education Program, fostering
                                                community-led change and striving to eliminate discrimination based on caste or
                                                gender in accessing education and fundamental rights.</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm={6} lg={4} className='py-2'>
                                    <Card>
                                        <CardBody>
                                            <Image src={require('../../assets/images/aboutlogo/niwcyd_logo.jpeg')} className='w-100 pt-2' style={{ padding: "0 100px" }} />
                                            <p className='pt-4'>Since its establishment in 1982, the National Institute of Women, Child and
                                                Youth Development (NIWCYD) has been actively engaged in development work
                                                across five states in Central and Northern India, focusing on themes such as
                                                livelihood enhancement, community organization, women empowerment, child
                                                rights, education, water and sanitation, environment, disaster management, and
                                                coordination with government departments.</p>
                                        </CardBody>
                                    </Card>
                                </Col>

                            </Row>

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

export default Collaborations