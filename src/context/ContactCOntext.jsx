import { createContext, useContext, useEffect, useState } from "react";

export const ContactContext = createContext();


export default function ContactContextProvider({children}) {

   const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    });





  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

   const getAllContacts = async () => {
      const API = `https://interactive-assignment-5.onrender.com/contacts`;
      const res = await fetch(API);
      const data = await res.json();
      setContacts(data);
       
    };
  
    useEffect(() => {
      getAllContacts();
    }, []);
  
    const handleEditContacts = async () => {
      await fetch(`https://interactive-assignment-5.onrender.com/contacts/${selectedContact.id}`, {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json" },
      });
  
      setEditModal(false);
      setIsModalOpen(false);
      getAllContacts();
    };
  
    const handleDeleteContact = async (id) => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this contact?"
      );
      if (!confirmDelete) return;
  
      await fetch(`https://interactive-assignment-5.onrender.com/contacts/${id}`, {
        method: "DELETE",
      });
  
      setIsModalOpen(false);
      setEditModal(false);
      setSelectedContact(null);
      getAllContacts();
    };





return (
    <ContactContext.Provider value={{
        isModalOpen,
        setIsModalOpen,
        selectedContact,
        setSelectedContact,
        editModal,
        setEditModal,
        contacts,
        setContacts,
        formData,
        setFormData,
        handleOnChange, 
        handleEditContacts,
        handleDeleteContact,
        getAllContacts
      
    }}>
        {children}
    </ContactContext.Provider>
)

}

export function useContact(){
    return useContext(ContactContext)
}