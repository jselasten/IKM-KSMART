import React from 'react'
import styled from 'styled-components'
import { BiCopyright } from 'react-icons/bi'
import { Col, Row } from 'react-bootstrap'
import './index.css'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                <Row className='footer-row'>
                    <Col xs={12} sm={12} md={5}>
                        <Div>
                        <BiCopyright size={18}/>
                        <Span>{'2023 Company'}</Span>
                        </Div>
                    </Col>
                    <Col xs={12} sm={12} md={7} >
                        <Row className='Right' >
                            <Col xs={12} sm={12} md={3}>
                                {'About'}
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                {'Terms of use'}
                            </Col>
                            <Col xs={12} sm={12} md={3}>
                                {'Contact'}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </FooterDiv>
        </>
    )
}

const FooterDiv = styled.div`
background-color:#6a736c;
color:#fff;
font-size:16px;
height:45px;
padding-top:30px;
padding-left:40px;
padding-right:40px;
padding-bottom:30px;
display:flex;
align-items:center;
position: fixed;
left:0;
bottom:0;
right:0;
@media (max-width: 768px) {
    height:auto;
    padding-top:30px;
    padding-bottom:30px;
display:flex;
align-items:center;
  }
`;

const Div = styled.div`
display: flex;
flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const Span = styled.span`
padding-left:5px
`;


const Ul = styled.ul`
text-decoration:none;
float:right;
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
text-decoration:none;
list-style-type:none;
align-items:center;
padding-left:15px;
text-align:right;
cursor:pointer;
@media (max-width: 768px) {
    font-size:12px;
  }`;

export default Footer