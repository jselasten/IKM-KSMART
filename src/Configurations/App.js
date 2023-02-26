import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SystemPaymentForm from '../Components/Form'
import Navbar from '../Components/Navbar'
import { Sidebar } from '../Components/Sidebar'
import Footer from '../Components/Footer'

export default function App(props) {
  return (
    <div>
      <Navbar {...props}>
      <Row>
        <Col xs={12} md={3}>
          <Sidebar/>
        </Col>
        <Col xs={12} md={6}>
          <SystemPaymentForm />
        </Col>
      </Row>
      </Navbar>
      <Footer/>
    </div>
  )
}
