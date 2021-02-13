import React from "react";
import { Form, Button } from "react-bootstrap";
function ContactForm(props) {
  const [form, setForm] = React.useState({
    id: null,
    name: "",
    surname: "",
    mail: "",
    message: ""
  });
  let [id, setId] = React.useState(0);
  function submit(event) {
    event.preventDefault();
    setId((id = Math.floor(Math.random() * 10000000)));
    props.onSubmit({
      id: id,
      name: form.name,
      surname: form.surname,
      mail: form.mail,
      message: form.message
    });
  }

  function allowChange(event) {
    const values = event.target.value;
    setForm({ ...form, [event.target.name]: values });
  }
  return (
    <div>
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={form.name}
            name="name"
            placeholder="Type name"
            onChange={allowChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control
            type="text"
            value={form.surname}
            name="surname"
            placeholder="Type surname"
            onChange={allowChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Mail</Form.Label>
          <Form.Control
            type="email"
            value={form.mail}
            name="mail"
            placeholder="Enter email"
            onChange={allowChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form.message}
            name="message"
            placeholder="Type your message don't reach 3 column :O"
            onChange={allowChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default ContactForm;
