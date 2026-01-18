import { createBrowserRouter } from "react-router";
import App from "../App";
import AllContacts from "../components/AllContacts";
import Add from "../pages/Add";

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
           { 
            path: "/",
            element:<AllContacts/>
        },
       
           { 
            path: "/add",
            element:<Add/>
        },
      
        ]
    }
]);

export default router;