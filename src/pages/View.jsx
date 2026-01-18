import React from 'react';
import { useContact } from '../context/ContactCOntext';

const View = () => {



  const {
    formData ,
    
      selectedContact,
    
        editModal,
         setEditModal ,
        
           setIsModalOpen,
           handleOnChange,
           handleEditContacts,
           handleDeleteContact

          } = useContact()
 



  return (
    <div className="w-[50%] bg-white rounded-md shadow-lg">
    
    <div className="bg-slate-500 p-5 rounded-t-md">
      <h1 className="font-bold text-2xl text-white">Contact Details</h1>
    </div>

   
    <div className="flex gap-5 p-4">
      <div className="flex flex-col gap-5 font-medium">
        <p>First Name</p>
        <p>Last Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Address</p>
      </div>

      {!editModal ? (
        <div className="flex flex-col gap-5">
          <p>{selectedContact.firstName}</p>
          <p>{selectedContact.lastName}</p>
          <p>{selectedContact.email}</p>
          <p>{selectedContact.phone}</p>
          <p>{selectedContact.address}</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnChange}
            className="border p-1"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnChange}
            className="border p-1"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
            className="border p-1"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleOnChange}
            className="border p-1"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleOnChange}
            className="border p-1"
          />
        </div>
      )}
    </div>


    <div className="flex gap-5 justify-center p-4 border-t border-t-gray-200">
      {!editModal ? (
        <button
          onClick={() => setEditModal(true)}
          className="bg-cyan-500 text-white px-4 py-2 rounded-md"
        >
          Edit
        </button>
      ) : (
        <button
          onClick={handleEditContacts}
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      )}

      <button
        onClick={() => handleDeleteContact(selectedContact.id)}
        className="border border-red-800 text-red-700 px-4 py-2 rounded-md"
      >
        Delete
      </button>

      <button
        onClick={() => setIsModalOpen(false)}
        className="border border-gray-600 text-gray-600 px-4 py-2 rounded-md"
      >
        Cancel
      </button>
    </div>
  </div>
  )
}

export default View