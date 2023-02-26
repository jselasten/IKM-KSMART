import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <ContainerDiv>
     <Nav defaultActiveKey="/" className="flex-column">
     <Heading>
        {'Setup'}
    </Heading>
      <NavLink href="/">System Records</NavLink>
      <NavLinkActive eventKey="link-1">System Default Payments</NavLinkActive>
      <NavLink eventKey="link-2">System Date Verifications</NavLink>
    </Nav>
    </ContainerDiv>
  )
}

const ContainerDiv = styled.div`

padding-top:25px;
padding-bottom:25px;
`;

const NavLink = styled.li`
text-decoration:none;
font-size:17px;
font-weight:600;
color:rgba(0,0,0,0.6);
padding-top:15px;
`;

const NavLinkActive = styled.li`
text-decoration:none;
font-size:17px;
font-weight:600;
color:green;
padding-top:15px;
`;
const Heading = styled.h1`
color:#074014;
font-weight:bold;
`;
