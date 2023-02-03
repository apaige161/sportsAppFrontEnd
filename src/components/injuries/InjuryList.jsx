import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";



export default function InjuryPlayerList({ players, targetSport, targetTeam }) {
  function renderAllPlayers() {
    // filter by sport
    let Players = players.filter((player) => player.Sport === targetSport);

    // filter by team -- TODO
    let PlayersByTeam = Players.filter((player) => player.Team === targetTeam);

    // create a new array from the old array with map
    return Players.map((player, i) => {
      return (
        <Card key={i} style={{ width: "18rem" }} className="text-center">
          <Card.Title>{player.Player}</Card.Title>
          <Card.Title>{player.Team}</Card.Title>
          <Card.Img variant="top" src={player.PlayerImgUrl} />
          <Card.Body>
            <Card.Text>Sport: {player.Sport}</Card.Text>
            <Card.Text>Position: {player.Position}</Card.Text>
            <Card.Text>Injury: Status {player.InjuryStatus}</Card.Text>
          </Card.Body>
          {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
        </Card>
      );
    });
  }

  return <div>{renderAllPlayers()}</div>;
}
