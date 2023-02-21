import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import CustomerForm from './CustomerForm'
import LotteryTicketList from "./lotteryTicketList";

import Container from "react-bootstrap/Container";

export default function Tickets() {

    const [tickets, setTickets] = useState([]);


    // Load all customers -> then pass customers to the CustomerList
    async function getLotteryTickets() {
        const lotteryTicketRes = await axios.get(
          "https://sports-app.herokuapp.com/lotteryTicket/"
        );
        setTickets(lotteryTicketRes.data); // array of customers set
        // console.log(lotteryTicketRes.data);
    }
    
    // empty array means it will only run once
    useEffect(() => {
        getLotteryTickets();
    }, [])


  return (
    <div>
      <Container className="d-flex justify-content-center">
        <LotteryTicketList tickets={tickets} />
      </Container>
    </div>
  );
}
