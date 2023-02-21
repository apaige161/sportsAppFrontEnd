import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

export default function LotteryTicketList({ tickets }) {
  function renderTickets() {
    // create a new array from the old array with map
    return tickets.map((ticket, i) => {
      return (
        <Card key={i} style={{ width: "18rem" }} className="text-center">
          <Card.Title>{ticket.Odds}</Card.Title>
          <Card.Body>
            <Card.Text>{ticket.Name}</Card.Text>
            <Card.Text>{ticket.State}</Card.Text>
            <Card.Text>{ticket.Value}</Card.Text>
          </Card.Body>
          {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
        </Card>
      );
    });
  }

  return (
    <div className="d-flex justify-content-center">
      <div>{renderTickets()}</div>
    </div>
  );
}
