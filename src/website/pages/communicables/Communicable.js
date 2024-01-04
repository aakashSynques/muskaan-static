import React from 'react'
import { Container } from 'react-bootstrap';
import Reports from './Reports';
import FieldRealities from './FieldRealities';
import CommunityStorie from './CommunityStorie';
import ChildrenLiterature from './ChildrenLiterature';
import Reflections from './Reflections';
import ClassRoom from './ClassRoom';
import Accordion from 'react-bootstrap/Accordion';

const Communicable = () => {
    return (
        <>
            <div className='bgpettern pb-5 page-margin page-heigh'>
                <Container className='pt-4'>
                    <h4>Communicables</h4>
                    <p>Home  / Work / Communicables</p>
                    <div className='with_aside-border history'>
                        <div className='mt-5 communicable'>
                            <Container>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Reports / Updates</Accordion.Header>
                                        <Accordion.Body>
                                            <Reports />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Field Realities</Accordion.Header>
                                        <Accordion.Body>
                                            <FieldRealities />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Community Stories</Accordion.Header>
                                        <Accordion.Body>
                                            <CommunityStorie />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Children's Literature</Accordion.Header>
                                        <Accordion.Body>
                                            <ChildrenLiterature />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Reflections</Accordion.Header>
                                        <Accordion.Body>
                                            <Reflections />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Blog</Accordion.Header>
                                        <Accordion.Body>
                                            Blogs
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Classroom Experiences</Accordion.Header>
                                        <Accordion.Body>
                                            <ClassRoom />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Container>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Communicable
