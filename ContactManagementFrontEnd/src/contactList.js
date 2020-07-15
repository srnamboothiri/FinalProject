import React from 'react';
import {useContactContext} from './ContactProvider';
import { Link } from 'react-router-dom';

export const ContactList = () => {
    const { contacts, deleteContact } = useContactContext();

    return (
        <>
            <h1>Contacs</h1>
            <table className="contacts-table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Option1</th>
                        <th>Option2</th>
                    </tr>
                    {contacts.map((contact, i) => {
                        return <tr key={i}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td><Link onClick={() => { deleteContact(contact.id) }}>Delete</Link></td>
                            <Link to={`/edit/${contact.id},${contact.name},${contact.email},${contact.phone}`}>Edit</Link>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    );
};