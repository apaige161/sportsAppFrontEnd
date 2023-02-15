// import React from 'react'
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";



export default function PlayerList({ players, targetSport, birthdayToleranceInDays, injuryStatus }) {

    const [open, setOpen] = useState(false);

    // function getAverages() {
    //   if (targetSport === "basketball") {
        
    //   }
    // }

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
      let SportsPlayers = filteredPlayers.filter(
        (player) => player.Sport === targetSport
      );

      // filter by injury status
      let SportsPlayersHealthy = SportsPlayers.filter(
        (player) => player.InjuryStatus === injuryStatus
      );

      return SportsPlayersHealthy.map((player, i) => {
        return (
          <div class="">
            {player.Stats.data !== -1 && (
              <Card key={i} style={{ width: "18rem" }} className="text-center">
                <Card.Title>{player.Player}</Card.Title>
                <Card.Title>{player.Team}</Card.Title>
                <Card.Img variant="top" src={player.PlayerImgUrl} />
                <Card.Body>
                  <Card.Text>Position: {player.Position}</Card.Text>
                  <Card.Text>Birthday: {player.Birthday}</Card.Text>
                  <Card.Text>GameDay: {player.GameDay}</Card.Text>

                  <Button
                    onClick={() => { setOpen(!open) } }
                    aria-controls="collapse-stats"
                    aria-expanded={open}
                  >
                    Stats
                  </Button>
                  <Collapse in={open}>
                    <div id="collapse-stats">
                      <Card.Text>
                        Injury Status: {player.InjuryStatus}
                      </Card.Text>
                      <Card.Text>
                        Average Points:&nbsp;
                        {Math.round((player.Stats.PTS / player.Stats.GP) * 10) /
                          10}
                      </Card.Text>
                      <Card.Text>
                        Field Goal:&nbsp;
                        {Math.round(player.Stats.FG_PCT * 100 * 10) / 10}%
                      </Card.Text>
                      <Card.Text>
                        3 Point:&nbsp;
                        {Math.round(player.Stats.FG3_PCT * 100 * 10) / 10}%
                      </Card.Text>
                      <Card.Text>
                        Average Minutes played:&nbsp;
                        {Math.round((player.Stats.MIN / player.Stats.GP) * 10) /
                          10}
                      </Card.Text>
                      <Card.Text>
                        Average Assists:&nbsp;
                        {Math.round((player.Stats.AST / player.Stats.GP) * 10) /
                          10}
                      </Card.Text>
                      <Card.Text>
                        Average Rebounds:&nbsp;
                        {Math.round((player.Stats.REB / player.Stats.GP) * 10) /
                          10}
                      </Card.Text>
                      <Card.Text>
                        Average Steals:&nbsp;
                        {Math.round((player.Stats.STL / player.Stats.GP) * 10) /
                          10}
                      </Card.Text>
                      <Card.Text>
                        Average Blocks:&nbsp;
                        {Math.round((player.Stats.BLK / player.Stats.GP) * 10) /
                          10}
                      </Card.Text>
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
            )}

            {/* No Stats */}
            {player.Stats.data === -1 && (
              <Card key={i} style={{ width: "18rem" }} className="text-center">
                <Card.Title>{player.Player}</Card.Title>
                <Card.Title>{player.Team}</Card.Title>
                <Card.Img variant="top" src={player.PlayerImgUrl} />
                <Card.Body>
                  <Card.Text>Position: {player.Position}</Card.Text>
                  <Card.Text>Birthday: {player.Birthday}</Card.Text>
                  <Card.Text>GameDay: {player.GameDay}</Card.Text>
                  <Card.Text>Injury Status: {player.InjuryStatus}</Card.Text>
                </Card.Body>
                {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
              </Card>
            )}
          </div>
        );
      });
    }
    
  return <div>{renderWeekOfGamePlayers()}</div>;
}
