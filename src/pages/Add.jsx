

import React, { useState } from 'react';
import { useContact } from '../context/ContactCOntext';

const Add = () => {
  
  const {contacts , getAllContacts} = useContact()

  const [formData , setFormData] = useState({
    id: '',
    firstName : '',
    lastName : '',
    email : '',
    phone : '',
    address : '',
    createdAt : Date.now()
  });


 


  const handleOnChange = (e) => {
    setFormData((prev)=>({
       ...prev,
        [e.target.name] : e.target.value,

    }));
     
  }

  const handleAddContacts =async (e) =>{
      e.preventDefault();
      
		await fetch(`https://interactive-assignment-5.onrender.com/contacts`, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-type": "application/json",
			},


      
		});

		// Refetch
    getAllContacts()
    setFormData({
      firstName : '',
      lastName : '',
      email : '',
      phone : '',
      address : '',
      createdAt : Date.now()
    })


  }


  return (
    <div className='w-[50%] p-4'>
      <div className='bg-slate-500 p-5 rounded-t-md'>
        <h1 className='font-bold text-2xl text-white'>Edit Contact</h1>
      </div>

      <form   className='flex flex-col gap-3 p-4'>

        <div className='flex gap-3 justify-between items-center'>
          <label htmlFor="firstName">First Name</label>
          <input 
            className='w-[70%] border p-2 border-gray-400 rounded-md'
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleOnChange}
          />
        </div>

        <div className='flex gap-3 justify-between items-center'>
          <label htmlFor="lastName">Last Name</label>
          <input 
            className='w-[70%] border p-2 border-gray-400 rounded-md'
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleOnChange}
          />
        </div>

        <div className='flex gap-3 justify-between items-center'>
          <label htmlFor="email">Email</label>
          <input 
            className='w-[70%] border p-2 border-gray-400 rounded-md'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
          />
        </div>

        <div className='flex gap-3 justify-between items-center'>
          <label htmlFor="phone">Phone</label>
          <input 
            className='w-[70%] border p-2 border-gray-400 rounded-md'
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleOnChange}
          />
        </div>

        <div className='flex gap-3 justify-between items-center'>
          <label htmlFor="address">Address</label>
          <input 
            className='w-[70%] border p-2 border-gray-400 rounded-md'
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleOnChange}
          />
        </div>

        <div className='flex gap-5 justify-center p-4 border-t border-t-gray-200'>
          <button type='button' onClick={handleAddContacts} className='bg-cyan-500 text-white px-4 py-2 rounded-md'>Add Contact</button>
          <button type='button' className='border border-gray-600 text-gray-600 px-4 py-2 rounded-md'>Cancel</button>
        </div>

      </form>
    </div>
  );
}

export default Add
