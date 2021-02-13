import React from "react";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import { Button } from "react-bootstrap";
function ContactList() {
  const [contacts, setContacts] = React.useState([{}]);
  let [isUpdate, setIsUpdate] = React.useState(true);
  function addContact(cont) {
    const conts = [cont, ...contacts];
    setContacts(conts);
    console.log(contacts);
  }
  let [upid, setUpid] = React.useState(0);
  function z() {
    console.log("www");
  }
  function updateForm(cont) {
    setIsUpdate((isUpdate = !isUpdate));
    setUpid((upid = cont.id));

    console.log("Eşkale");
    console.log(cont); //id geliyür
  }

  function updateContact(item) {
    let temp;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === item.id) {
        temp = contacts[i];
        contacts[i] = item;
      }
    }
    //console.log(contacts);
    //console.log("Teşkale");
    //console.log(item);
    /* console.log("Tıştek");
    console.log(upid);
    console.log("Kontaklar");
    
    console.log("Kontaklar uzunluk");
    console.log(contacts.length);*/

    //upid ve item sorunsuz şekilde geliyor

    if (updateContact) setIsUpdate((isUpdate = !isUpdate));
  }

  function deleteContact(cont) {
    const deletedCont = [...contacts].filter(
      contacts => contacts.id !== cont.id
    );

    setContacts(deletedCont);
  }
  return (
    <div>
      <ContactForm onSubmit={addContact} />

      <Contact
        contacts={contacts}
        deleteContact={deleteContact}
        updateContact={updateContact}
        updateForm={updateForm}
        isUpdate={isUpdate}
        upid={upid}
      />
    </div>
  );
}
export default ContactList;
