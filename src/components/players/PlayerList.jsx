import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";



export default function PlayerList({ players, targetSport, birthdayToleranceInDays, injuryStatus }) {

    // const numOfDaysToSearch = 7;
    function renderWeekOfGamePlayers() {
      let dateTime = new Date();
      let daysToCheck = [];

      // add days to array
      for (let i = 0; i < birthdayToleranceInDays; i++) {
        let dayToAdd = moment(dateTime, "MM-DD-YY")
          .add(i, "d")
          .format("MM-DD-YY");
        dayToAdd = dayToAdd.replaceAll("-", "/");
        daysToCheck.push(dayToAdd);
      }

      // check if gameday matches spec
      let filteredPlayers = players.filter((player) =>
        daysToCheck.includes(player.GameDay)
      );

      // filter by sport
      let NHLPlayers = filteredPlayers.filter(
        (player) => player.Sport === targetSport
      );

      // filter by injury status
      let NHLPlayersHealthy = NHLPlayers.filter(
        (player) => player.InjuryStatus === injuryStatus
      );

      return NHLPlayersHealthy.map((player, i) => {
        return (
          <div class="">
            <Card key={i} style={{ width: "18rem" }} className="text-center">
              <Card.Title>{player.Player}</Card.Title>
              <Card.Title>{player.Team}</Card.Title>
              <Card.Img variant="top" src={player.PlayerImgUrl} />
              <Card.Body>
                <Card.Text>Sport: {player.Sport}</Card.Text>
                <Card.Text>Position: {player.Position}</Card.Text>
                <Card.Text>Birthday: {player.Birthday}</Card.Text>
                <Card.Text>GameDay: {player.GameDay}</Card.Text>
                <Card.Text>Injury Status: {player.InjuryStatus}</Card.Text>
              </Card.Body>
              {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
            </Card>
          </div>
        );
      });
    }
    
  return <div>{renderWeekOfGamePlayers()}</div>;
}
