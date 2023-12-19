import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import HeaderTop from './HeaderTop';
import { Link } from 'react-router-dom';
const MainHeader = () => {
    const [active, setActive] = useState("home");
    return (
        <>
            <HeaderTop />
            <section className='navigation'>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <picture>
                                <source srcSet={require('../assets/images/Muskaan-logo.webp')} type="image/webp" className='logo-width' />
                                <source srcSet={require('../assets/images/Muskaan-logo.avif')} type="image/avif" className='logo-width' />
                                <img  loading="lazy" src={require('../assets/images/Muskaan-logo.png')} alt="Muskaan ngo"
                                    className="img-fluid logo-width" />
                            </picture>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto" activeKey={active}
                                onSelect={(selectedKey) => setActive(selectedKey)}>
                                <Nav.Item>
                                    <Nav.Link eventKey="home" as={Link} to="/">
                                        Home
                                    </Nav.Link>
                                </Nav.Item>
                                <NavDropdown title="About Us" className="custom-dropdown" tabindex="0"
                                    aria-label="about us"
                                    id="about-us-dropdown" aria-expanded="false" role="button">
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="history" as={Link} to="/about-us/history" className='py-0' aria-label='history'>
                                            History
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/mission/" className='py-0' aria-label='Mission'>
                                            Mission
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/our-team/" className='py-0' aria-label='Our Team'>
                                            Our Team
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/who-we-work-with/" className='py-0' aria-label='Who we work with'>
                                            Who we work with
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/financial/" className='py-0' aria-label=' Financials'>
                                            Financials
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/policies/" className='py-0' aria-label='Policies'>
                                            Policies
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/collaborations/" className='py-0' aria-label='Collaborations'>
                                            Collaborations
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>


                                <NavDropdown title="Work" className="custom-dropdown" id="work-dropdown" aria-expanded="false" aria-label='work' role="button" tabindex="0">
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/work/education" className='py-0' aria-label='Education'>
                                            Education
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="Empowering" as={Link} to="/work/empowering-children-and-youth" className='py-0' aria-label='Empowering Children and Youth'>
                                            Empowering Children and Youth
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="Survival" as={Link} to="/work/issues-of-dignity-and-survival" className='py-0' aria-label='Issues of Dignity and Survival'>
                                            Issues of Dignity and Survival
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="liveLihoods" as={Link} to="/work/liveLihoods" className='py-0' aria-label='Livelihoods'>
                                            Livelihoods
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="sustainable-living" as={Link} to="/work/sustainable-living" className='py-0' aria-label='Sustainable Living'>
                                            Sustainable Living
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="Publications" as={Link} to="/work/publication" className='py-0' aria-label='Publications'>
                                            Publications
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>





                                <Nav.Item>
                                    <Nav.Link eventKey="communicable" as={Link} to="/communicable">
                                        Communicables
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="connect" as={Link} to="/connect">
                                        Connect
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="store" as={Link} to="https://store.muskaan.org/" target='_blank'>
                                        Store
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
        </>
    );
}

export default MainHeader;
