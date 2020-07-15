import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";


const BASE_API = 'http://localhost:8080';
const ContactContext = createContext();
export const useContactContext = () => useContext(ContactContext);

const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_API}/contact/`).then((res) => {
            setContacts(res.data);
        });
    }, []);

    const deleteContact = (contactid) => {
        axios.delete(`${BASE_API}/contact/${contactid}`).then(() => {
			axios
				.get(`${BASE_API}/contact/`)
				.then((res) => {
					setContacts(res.data);
				})
				.catch((error) => {
					console.error(error);
					alert("Something went wrong!");
				});
		});
	};

	const BindContacts = () => {
		axios
		  .get(`${BASE_API}/contact`).then((result) => {
			//debugger;
			console.log(result);
			setContacts(result.data);
		  });
	  };
	
	const updateContact = (id,name, email,phone) => {
		const newContact = {     
		name,
		email,
		phone,
	  };     
  
	  axios
		.put(`${BASE_API}/contact/${id}`, newContact).then((result) => {
		  BindContacts();
		});   
	};

    const addContact = (name, email,phone) => {
        const contact = {
			name,
			email,
			phone
		};

		axios
			.post(`${BASE_API}/contact/`, contact)
			.then((res) => {
				const newContact = res.data;
				const newContacts = [...contacts, newContact];
				setContacts(newContacts);
			})
			.catch((error) => {
				console.error(error);
				alert("Something went wrong!");
			});
    };

    return (
        <ContactContext.Provider value={{ contacts, deleteContact, addContact, updateContact }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactProvider;
