import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

import { logout } from '../js/actions/authActions';
import { logoutRec } from '../js/actions/authRecActions';

const AppNavbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const isAuthRec = useSelector((state) => state.authRecReducer.isAuthRec);
  const recruiter = useSelector((state) => state.authRecReducer.recruiter);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };

  const logoutRecruiter = () => {
    dispatch(logoutRec());
  };

  const authLinks = (
    <Fragment>
      <NavItem>
        <Link to="/dashboard">
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : null}</strong>
          </span>
        </Link>
      </NavItem>
      <NavLink href="#" onClick={logoutUser}>
        Logout
      </NavLink>
    </Fragment>
  );

  const authRecLinks = (
    <Fragment>
      <NavItem>
        <Link to="/dashboardRecruiter">
          <span className="navbar-text mr-3">
            <strong>{recruiter ? `Welcome ${recruiter.companyName}` : null}</strong>
          </span>
        </Link>
      </NavItem>
      <NavLink href="#" onClick={logoutRecruiter}>
        Logout
      </NavLink>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
      <NavLink href="/register-candidate">
      <div style={{color:"rgba(255,255,255,.5)"}}><i className="bi bi-person-circle" style={{color:"#f4623a"}}></i>{" "}Candidate</div>
      </NavLink>
      </NavItem>
      <NavItem>
      <NavLink href="/register-recruiter">
      <div style={{color:"rgba(255,255,255,.5)"}}><i className="bi bi-person-circle" style={{color:"#f4623a"}}></i>{" "}Recruiter</div>
      </NavLink>
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar style={{ backgroundColor: '#757574', height: 70}}  dark expand="sm" fixed="top" light >
        <Container style={{ display:'flex' , justifyContent:"space-between", alignItems:"center"}}>
          <div>
          <NavbarBrand href="/"><div><i className="bi bi-binoculars"></i>{" "}Job Matcher</div></NavbarBrand>
          </div>
          <div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav>
              {isAuth ? authLinks : (isAuthRec ? authRecLinks : guestLinks)}
            </Nav>
          </Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;