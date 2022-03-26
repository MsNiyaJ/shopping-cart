import React from 'react';
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
} from 'react-bootstrap';
import ShoppingCartIcon from '../icons/ShoppingCartIcon';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search for a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="cart-dropdown">
              <ShoppingCartIcon width="1.5rem" height="1.5rem" />
              <Badge bg="none">3</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
