import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
     <footer>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container style={{display:'flex',justifyContent:'center'}}>
  <Navbar.Brand href="#">All Rights saved &copy; 2021</Navbar.Brand>
     
  </Container>
</Navbar>
     </footer>
    )
  }
}

export default Footer;
