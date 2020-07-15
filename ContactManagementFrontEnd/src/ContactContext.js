import React, { createContext, useState, useContext } from 'react'
import { data } from './contacts'
import { v4 as uuid4 } from 'uuid';


const context = createContext();
export const useContactContext = () => useContext(context);

export const ContactContext = (props) => {
    const children = props.children;
    const stateArray = useState(data);
    const contacts = stateArray[0];
    const updateContacts = stateArray[1];

    const deleteContact = (id) => {
        const newContacts = contacts.filter((contact) => contact.id !== id);
        updateContacts(newContacts);
    };

    const addContact = (contactInfo) => {
        const id = uuid4();
        contactInfo.id = id;
        const newContacts = [...contacts, contactInfo];
        updateContacts(newContacts);
    }

    return (
        <context.Provider value={{ contacts, addContact, deleteContact }}>
            {children}
        </context.Provider>
    )
}

// export default ContactContext;