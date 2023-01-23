import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function MainNavbar() {

  return (
    <Navbar  expand="lg" bg='dark' variant='dark'>
    <Container fluid>
      <Navbar.Brand as={Link} to='/'>DevHub</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
         className="justify-content-center flex-grow-1 pe-3"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/about" >About</Nav.Link>
          <Nav.Link as={Link} to="/articles" >Articles</Nav.Link>
          <NavDropdown title="Categories" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to='/articles/coding'>Programming</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/articles/webdev'>Web Development</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/articles/blockchain'>Blockchain</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/articles/crypto'>Cryptocurrency</NavDropdown.Item>
          
            
            
          </NavDropdown>
      
        </Nav>
        <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
        <li className="nav-item mx-2">
        <a className="nav-link text-light h5" href="" target="blank"><FacebookIcon/></a>
        </li>
        <li className="nav-item mx-2">
        <a className="nav-link text-light h5" href="" target="blank"><LinkedInIcon/></a>
        </li>
        <li className="nav-item mx-2">
      
        <a className="nav-link text-light h5" href="" target="blank"><GoogleIcon/></a>
        </li>
   
 


        </ul>
  

      </Navbar.Collapse>
    </Container>
   
  </Navbar> 


  )
}

export default MainNavbar;