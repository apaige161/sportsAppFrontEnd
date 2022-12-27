import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import addDays from "date-fns/addDays";
import moment from "moment";


import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";



export default function PlayerList({ players }) {

    

    function renderAllPlayers() {
        // create a new array from the old array with map
        return players.map((player, i) => {
            return (
              <Card key={i} style={{ width: "18rem" }} className="text-center">
                <Card.Title>{player.Player}</Card.Title>
                <Card.Title>{player.Team}</Card.Title>
                <Card.Img variant="top" src={player.PlayerImgUrl} />
                <Card.Body>
                  <Card.Text>Sport: {player.Sport}</Card.Text>
                  <Card.Text>Position: {player.Position}</Card.Text>
                  <Card.Text>Birthday: {player.Birthday}</Card.Text>
                  <Card.Text>GameDay: {player.GameDay}</Card.Text>
                  <Card.Text>Injury: Status {player.InjuryStatus}</Card.Text>
                </Card.Body>
                {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
              </Card>
            );
        });
    }

    // this works
    function renderBySport (sport="football") {
      let playersBySport = players.filter((player) => player.Sport === sport);
      console.log(playersBySport);
      return playersBySport.map((player, i) => {
        return (
          <Card key={i} style={{ width: "18rem" }} className="text-center">
            <Card.Title>{player.Player}</Card.Title>
            <Card.Title>{player.Team}</Card.Title>
            <Card.Img variant="top" src={player.PlayerImgUrl} />
            <Card.Body>
              <Card.Text>Sport: {player.Sport}</Card.Text>
              <Card.Text>Position: {player.Position}</Card.Text>
              <Card.Text>Birthday: {player.Birthday}</Card.Text>
              <Card.Text>GameDay: {player.GameDay}</Card.Text>
              <Card.Text>Injury: Status {player.InjuryStatus}</Card.Text>
            </Card.Body>
            {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
          </Card>
        );
      });
    }

    const numOfDaysToSearch = 14;
    function renderWeekOfGamePlayers() {
      let dateTime = new Date();
      let daysToCheck = [];

      // add days to array
      for (let i = 0; i < numOfDaysToSearch; i++) {
        let dayToAdd = moment(dateTime, "DD-MM-YY")
          .add(i, "d")
          .format("DD-MM-YY");

        dayToAdd = dayToAdd.replaceAll("-", "/");
        daysToCheck.push(dayToAdd);
      }

      let filteredPlayers = players.filter((player) =>
        daysToCheck.includes(player.GameDay)
      );

      return filteredPlayers.map((player, i) => {
        return (
          <div>
            <Card key={i} style={{ width: "18rem" }} className="text-center">
              <Card.Title>{player.Player}</Card.Title>
              <Card.Title>{player.Team}</Card.Title>
              <Card.Img variant="top" src={player.PlayerImgUrl} />
              <Card.Body>
                <Card.Text>Sport: {player.Sport}</Card.Text>
                <Card.Text>Position: {player.Position}</Card.Text>
                <Card.Text>Birthday: {player.Birthday}</Card.Text>
                <Card.Text>GameDay: {player.GameDay}</Card.Text>
                <Card.Text>Injury: Status {player.InjuryStatus}</Card.Text>
              </Card.Body>
              {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
            </Card>
          </div>
        );
      });
    }
    
  return (
    <div>
      {renderWeekOfGamePlayers()}
    </div>
  );
}
