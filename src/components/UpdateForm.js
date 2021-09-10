import React, { Component } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap';

export class UpdateForm extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showUpdateForm} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Updating To Do List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.updateForm(e)}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(e) => this.props.setTitleHandler(e)} type="text" placeholder="Enter title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e) => this.props.setDescriptionHandler(e)} type="text" placeholder="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Date</Form.Label>
                <Form.Control onChange={(e) => this.props.setDateHandler(e)} type="date" placeholder="01-01-2021" />
              </Form.Group>
             
              <Button variant="primary" type="submit">
                Update
              </Button>
             
            
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
         
        </Modal>
      </div>
    )
  }
}

export default UpdateForm;
