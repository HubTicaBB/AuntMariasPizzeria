import React from 'react';
import {
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';

const Header = () => (
  <div style={{ 
    background: "url(" + require("../assets/pizza.jpg") + ") no-repeat center",
    backgroundSize: "contain",
    height: "100vh",
  }}>
    <Navbar className="navbar-transparent" expand="md">
      <Container>
        <NavbarBrand className="text-light">Aunt Maria's Pizzeria</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/" className="text-light">Pizzas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/orders" className="text-light">Orders</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default Header;