import React from "react";
import {
  FormControl,
  InputGroup,
  Form,
  Table,
  Accordion,
  Card,
  Button
} from "react-bootstrap";
import ContactForm from "./ContactForm";
let isUpdate = true;
function Contact({
  contacts,
  deleteContact,
  updateContact,
  updateForm,
  isUpdate,
  upid
}) {
  let [id, setId] = React.useState(0);

  const [update, setUpdate] = React.useState({
    id: null,
    name: "",
    surname: "",
    mail: "",
    message: ""
  });
  let name = React.useRef("");
  let surname = React.useRef("");
  let mail = React.useRef("");
  let message = React.useRef("");
  function submit(event) {
    event.preventDefault();
    //setId(id + 1);
    /*   props.onSubmit({
      id: id,
      name: form.name,
      surname: form.surname,
      mail: form.mail,
      message: form.message
    });*/
    //setId(id);
    //setUpdate(update);

    let up = {
      id: upid,
      name: name.current.value,
      surname: surname.current.value,
      mail: mail.current.value,
      message: message.current.value
    };
    updateContact(up);
  }

  function allowChange(event) {
    const values = event.target.value;
    setUpdate({ ...update, [event.target.name]: values });
  }

  return (
    <div>
      {isUpdate ? (
        contacts.map((cont, index) => (
          <div key={index}>
            <Accordion className="my-5">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>CONTACT</th>
                    <th>{cont.id}</th>
                  </tr>
                </thead>
              </Table>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    CLICK TO SEE THE NAME:
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{cont.name}</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    CLICK TO SEE SURNAME:
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>{cont.surname}</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    CLICK TO SEE E-MAIL:
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>{cont.mail}</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    CLICK TO SEE MESSAGE:
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>{cont.message}</Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    CLICK FOR UPDATE/DELETE OPERATIONS
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <div>
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteContact(cont)}
                      >
                        DELETE
                      </Button>
                      <Button onClick={() => updateForm(cont)}>UPDATE</Button>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        ))
      ) : (
        <Form>
          <h1 />
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Type name"
              onChange={allowChange}
              ref={name}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              ref={surname}
              placeholder="Type surname"
              onChange={allowChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Mail</Form.Label>
            <Form.Control
              type="email"
              name="mail"
              ref={mail}
              placeholder="Enter email"
              onChange={allowChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              ref={message}
              placeholder="Type your message don't reach 3 column :O"
              onChange={allowChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submit}>
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
export default Contact;
