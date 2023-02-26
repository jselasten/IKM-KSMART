import React from 'react';
import Form from 'react-bootstrap/Form';
import {  Col, Row } from 'react-bootstrap';
import { ContainerDiv,Paper,Div,Heading,SubHeading,CheckDiv,Button,Paragraph,CheckLabel,Icon } from './FormComponents';
import { paymentType } from './LabelConstants';
import { FiRefreshCcw } from 'react-icons/fi';


const SystemPaymentForm = () => {
  return (
    <ContainerDiv>
    <Paper>
      <Heading>
        {'System Default Payments'}
      </Heading>
      <Form>
      {paymentType.map((p)=>
      <Div>
       <Row>
       <SubHeading>
         {p.heading}
       </SubHeading>
    </Row>
    <Row>
     
     {
       p.check.map((c)=>
       <Col xs={12} md={6}>
         <CheckDiv>
       <Form.Check 
         type={'checkbox'}
         id={`default-checkbox`}
         label={<CheckLabel>{c.label}</CheckLabel>}
       />
       </CheckDiv>
         </Col>
       )
     }
  
     </Row>
     </Div>
      )}
       <hr/>
        <Row>
          <Col xs={12} md={3}>
            <Div>
          <Button variant="success" type="submit">
            Save
          </Button>
          </Div>
          </Col>
          <Col xs={12} md={9}>
            <Div>
             <Paragraph>
              <Icon>
             <FiRefreshCcw />
             </Icon>
              {'Reset to original system settings'}
            </Paragraph> 
          </Div>
          </Col>
        </Row>

      </Form>
    </Paper>
    </ContainerDiv>
  )
}



export default SystemPaymentForm

