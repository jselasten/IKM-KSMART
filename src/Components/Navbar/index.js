import React, { useState } from 'react';
import styled from 'styled-components';
import { RxDashboard } from 'react-icons/rx';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiDollar } from 'react-icons/bi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiHelpCircle } from 'react-icons/fi';
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <Logo href="/">Grave Sites Management</Logo>
        <Burger onClick={toggleNavbar}>
          <Line isOpen={isOpen} />
          <Line isOpen={isOpen} />
          <Line isOpen={isOpen} />
        </Burger>
        <Menu isOpen={isOpen}>
          {
            isOpen ?
              <>
                <MenuItem href="/">
                  <Maintainbutton>
                    <RxDashboard />
                  </Maintainbutton>
                </MenuItem>
                <MenuItem href="/">
                  <Maintainbutton>
                    <BiDollar />
                  </Maintainbutton>
                </MenuItem>
                <MenuItem href="/">
                  <Maintainbutton>
                    <HiOutlineDocumentReport />

                  </Maintainbutton>

                </MenuItem>


                <MenuItem>
                  <IoSettingsOutline />
                </MenuItem>
                <MenuItem>
                  <FiHelpCircle />
                </MenuItem>
                <MenuItem>
                  <Maintainbutton>
                    <Avatar>
                      {'JS'}
                    </Avatar>
                    <MdKeyboardArrowDown />

                  </Maintainbutton>
                </MenuItem>
              </>

              :
              <>
                <MenuItem href="/">
                  <Maintainbutton>
                    <RxDashboard />
                    <Navtext>
                      {' Maintain '}
                    </Navtext>
                    <MdKeyboardArrowDown />
                  </Maintainbutton>
                </MenuItem>
                <MenuItem href="/">
                  <Maintainbutton>
                    <BiDollar />
                    <Navtext>
                      {' Payments '}
                    </Navtext>
                  </Maintainbutton>
                </MenuItem>
                <MenuItem href="/">
                  <SearchReportsButton>
                    <HiOutlineDocumentReport />
                    <Navtext>
                      {' Reports '}
                    </Navtext>
                    <Icondiv>
                      <AiOutlineSearch />
                    </Icondiv>
                  </SearchReportsButton>
                </MenuItem>
                <MenuItem>
                <Maintainbutton>
                  <IoSettingsOutline size={20}/>
                  </Maintainbutton>
                </MenuItem>
                <MenuItem>
                <Maintainbutton >
                  <FiHelpCircle size={20}/>
                  </Maintainbutton>
                </MenuItem>
                <MenuItem>
                  <Maintainbutton>
                    <Avatar>
                      {'JS'}
                    </Avatar>
                    <Profilebutton>
                      <WhiteText>
                        {'John Snow'}
                        </WhiteText>
                        <Text>
                        {'Muncipality Officer'}
                      </Text>
                    </Profilebutton>
                    <MdKeyboardArrowDown />
                  </Maintainbutton>
                </MenuItem>
              </>
          }

        </Menu>
      </Nav>
      <Childrendiv>
        {props.children}
      </Childrendiv>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  height:70px;
  padding-left: 40px;
  padding-right: 40px;
`;

const Logo = styled.a`
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1.5rem;
  }
`;

const Line = styled.div`
  width: 1.5rem;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s linear;
  transform-origin: 1px;
  ${({ isOpen }) =>
    isOpen &&
    `
    transform: rotate(45deg);
    background-color: #f7f7f7;
    &:nth-child(2) {
      transform: rotate(-45deg);
      background-color: #f7f7f7;
    }
    &:nth-child(3) {
      display: none;
    }
  `}
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '20rem' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    background-color: #333;
  }
`;

const MenuItem = styled.a`
  color: #fff;
  text-decoration: none;
  justify-content:center;
  margin-left: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

const Maintainbutton = styled.button`
border:none;
background:transparent;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size: 0.9rem;
color:#fff;
font-weight:500;
`;

const WhiteText = styled.a`
padding-left:5px;
padding-right:5px;
text-align:left;
padding-top:0;
padding-bottom:0;
text-decoration:none;
color:#fff;
`;


const Text = styled.a`
padding-left:5px;
padding-right:5px;
padding-top:0;
text-align:left;
padding-bottom:0;
text-decoration:none;
color:#A0A0A0;
`;

const Icondiv = styled.div`
padding-left:80px`;
const Navtext = styled.div`
padding-left:5px;
padding-right:5px;`;
const SearchReportsButton = styled.button`
border:none;
background:transparent;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding:8px;
font-size: 0.9rem;
color:#fff;
font-weight:500;
`;
const Profilebutton = styled.div`
background:transparent;
display:flex;
flex-direction:column;
justify-content:left;
align-items:center;
font-size: 0.9rem;
padding-left:10px;
text-align:left;
color:#fff;
font-weight:500;
`;

const Childrendiv = styled.div`
padding-top:30px;
padding-bottom:30px;
padding-left:40px;
padding-right:40px;
`;

const Avatar = styled.div`
width:30px;
height:30px;
border-radius:15px;
color:#fff;
font-size:16px;
background:green;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`;

export default Navbar;
