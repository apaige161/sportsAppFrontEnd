import React, { useContext } from 'react'
import {useHistory} from 'react-router-dom'
import AuthContext from '../../Context/AuthContext';
import axios from "axios";

import Button from "react-bootstrap/Button";

export default function LogoutBtn() {

    const { getLoggedIn } = useContext(AuthContext); 
    
    const history = useHistory();

    async function logout() {
        // logout at the server
        await axios.get("https://sports-app.herokuapp.com/auth/logout"); // returns an emtpy cookie that is expired
        // update client side of logged in or not data
        await getLoggedIn();
        // redirect to home page
        history.push("/")
    }


  return (
    <Button variant="primary" onClick={logout}>
      Logout
    </Button>
  );
}
