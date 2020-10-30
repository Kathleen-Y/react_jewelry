import React, { Component } from 'react';
import { Col, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <Container className="contact">
        <h2>Sign Up</h2>
    <Form className="form">
      <Col>
      <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Type email here" />
          </FormGroup>
        </Col>

        <Col>
      <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>

        <Col>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      </Col>

    <Col>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
    </Col>
      
    <Col>
      <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>

       <Col>
      <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>

       <Col>
      <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>

     <Col>
      <FormGroup check>
        <Input type="checkbox" name="check" id="exampleCheck"/>
        <Label for="exampleCheck" check>Remeber me</Label>
      </FormGroup>
      <Button>Sign up</Button>
      </Col>

   <Container className="contact">
   <h2>Sign In</h2>
   <Form className="form">
     <Col>
       <FormGroup>
         <Label>Email</Label>
         <Input
           type="email"
           name="email"
           id="exampleEmail"
           placeholder="myemail@email.com"
         />
       </FormGroup>
     </Col>
     <Col>
       <FormGroup>
         <Label for="examplePassword">Password</Label>
         <Input
           type="password"
           name="password"
           id="examplePassword"
           placeholder="********"
         />
       </FormGroup>
     </Col>
     <Button>Submit</Button>
   </Form>
 </Container>
  );
}
}

export default Contact;
