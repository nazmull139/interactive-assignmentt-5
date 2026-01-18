import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import ContactContextProvider from './context/ContactCOntext'

function App() {
  

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <ContactContextProvider>
         <Navbar/>
         <Outlet/>
      </ContactContextProvider>
     
    </div>
   
    </>
  )
}

export default App
