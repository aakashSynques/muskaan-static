import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

const ThankYouFromSubmiting = () => {
    return (
        <div>
            <Container>
                <Row className='text-center mt-5'>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                        <h1 className='mt-5'>Thank You !</h1>
                        <p style={{ fontSize: "20px" }}>Thank you for visiting <span className='main-color text-uppercase'>muskaan ngo. </span> You will <br></br> recived and email message shortly.</p>
                        <Image src={require('../../assets/images/cheked.png')} alt="" className='img-fluid rounded-2 pb-2' style={{ width: "40%" }} />
                        <h3>Check your Email</h3>
                        <p>If you didn't recived any mail contect <span className='main-color'>publications@muskaan.org</span></p>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ThankYouFromSubmiting
