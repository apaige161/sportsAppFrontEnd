import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar'
import Customers from './components/customers/Customers';
import Players from "./components/players/Players";

import AuthContext from './Context/AuthContext';
import Tickets from './components/lottery/lotteryTickets';




export default function Router() {

  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}

        {loggedIn === true && (
          <>
            <Route path="/customer">
              <Customers />
            </Route>
            <Route path="/playerBirthday">
              <Players />
            </Route>
            <Route path="/lotteryTickets">
              <Tickets />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
