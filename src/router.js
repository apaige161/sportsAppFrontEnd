import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './components/home/home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NavbarComponent from "./components/layout/Navbar";
import Customers from './components/customers/Customers';
import Players from "./components/players/Players";
import PlayerInjury from "./components/injuries/Injuries";
import AskAi from './components/chatGPT/AskAi';

import AuthContext from './Context/AuthContext';
import Tickets from './components/lottery/lotteryTickets';



export default function Router() {

  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/customer">
              <Customers />
            </Route>
            <Route path="/playerBirthday">
              <Players />
            </Route>
            <Route path="/injuryReport">
              <PlayerInjury />
            </Route>
            <Route path="/lotteryTickets">
              <Tickets />
            </Route>
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
            <Route path="/injuryReport">
              <PlayerInjury />
            </Route>
            <Route path="/lotteryTickets">
              <Tickets />
            </Route>
            <Route path="/askai">
              <AskAi />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
