import React, { useState } from "react";
import { FaEdit, FaFilter } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";
import { useContact } from "../context/ContactCOntext";
import View from "../pages/View";

const AllContacts = () => {
  
 
  
 

const {
  setFormData ,
 
    selectedContact, 
    setSelectedContact ,
  
      setEditModal ,
       isModalOpen, 
       setIsModalOpen ,
        contacts, 
      
         handleDeleteContact
         } = useContact()


  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("default");

 
 


const filteredContacts = contacts
  .filter((c) =>
    [c.firstName, c.lastName, c.email, c.phone]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )
  .slice() 
  .sort((a, b) => {
    if (filterOption === "firstName") {
      return a.firstName.localeCompare(b.firstName);
    } else if (filterOption === "lastName") {
      return a.lastName.localeCompare(b.lastName);
    } else if (filterOption === "newest") {
    
      return b.createdAt - a.createdAt;
    } else if (filterOption === "oldest") {
      
      return a.createdAt - b.createdAt;
    }
    return 0;
  });



  return (
    <div className="w-[70%] p-4">
      
      <div className="flex justify-between bg-slate-500 p-5 border rounded-t-md">
        <h1 className="text-3xl text-white font-bold">All Contacts</h1>
        <div>
          <input
            className="w-md text-slate-900 font-bold border rounded-l-md bg-white p-2"
            type="text"
            placeholder="Search Contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="font-bold cursor-pointer text-white p-2 bg-green-600 border rounded-r-md">
            Search
          </button>
        </div>
        <button className="flex bg-green-600 text-white items-center gap-1 font-bold p-2 rounded-md">
          <FaCirclePlus /> <Link to={"/add"}>Add New</Link>
        </button>
      </div>

   
      <div className="flex justify-between p-5">
        <div className="flex gap-2 items-center text-2xl ">
          <FaFilter className="text-green-600" />
          <span>Filter</span>
        </div>

        <select
          className="border cursor-pointer border-green-700 p-2"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="firstName">First Name (A → Z)</option>
          <option value="lastName">Last Name (A → Z)</option>
          <option value="newest">Newest To Oldest</option>
          <option value="oldest">Oldest To Newest</option>
        </select>
      </div>

      
      <div className="p-5">
        {filteredContacts.length === 0 ? (
          <p className="text-center text-gray-500 font-medium text-lg">
            No Contact Information
          </p>
        ) : (
          <table className="w-full text-center">
            <thead>
              <tr className="border-b border-t">
                <th className="py-4">#</th>
                <th className="py-4">First Name</th>
                <th className="py-4">Last Name</th>
                <th className="py-4">Email</th>
                <th className="py-4">Phone</th>
                <th className="py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact, index) => (
                <tr key={contact.id} className="border-b">
                  <td className="py-4">{index + 1}</td>
                  <td className="py-4">{contact.firstName}</td>
                  <td className="py-4">{contact.lastName}</td>
                  <td className="py-4">{contact.email}</td>
                  <td className="py-4">{contact.phone}</td>
                  <td className="py-4 flex items-center gap-2 justify-center">
                    <button
                      className="border cursor-pointer rounded-full p-1"
                      onClick={() => {
                        setSelectedContact(contact);
                        setFormData(contact);
                        setIsModalOpen(true);
                        setEditModal(false);
                      }}
                    >
                      <MdOutlineRemoveRedEye />
                    </button>
                    <button
                      className="border cursor-pointer rounded-full p-1"
                      onClick={() => {
                        setSelectedContact(contact);
                        setFormData(contact);
                        setIsModalOpen(true);
                        setEditModal(true);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="border rounded-full p-1 cursor-pointer"
                      onClick={() => handleDeleteContact(contact.id)}
                    >
                      <MdOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>


      



  
      {isModalOpen && selectedContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20">
            <View/>
        </div>
      )}
    </div>
  );
};

export default AllContacts;
