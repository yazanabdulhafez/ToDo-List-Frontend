import React, { Component } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap';

export class CreateForm extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showCreateForm} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding To Do List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.createForm(e)}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(e) => this.props.createTitleHandler(e)} type="text" placeholder="Enter title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e) => this.props.createDescriptionHandler(e)} type="text" placeholder="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control onChange={(e) => this.props.createDateHandler(e)} type="date" placeholder="01-01-2021" />
              </Form.Group>
              <Container style={{display:'flex',justifyContent:'space-between'}}>
              <Button variant="primary" type="submit">
                Add TO List
              </Button>
              <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            </Container>
            </Form>
          </Modal.Body>
         
        </Modal>
      </div>
    )
  }
}

export default CreateForm;