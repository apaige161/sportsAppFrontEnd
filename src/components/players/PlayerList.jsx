
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import "../../App.css";


export default function PlayerList({
  players,
  targetSport,
  birthdayToleranceInDays,
  injuryStatus,
  injuryStatusTwo,

}) {
  const [open, setOpen] = useState(null);
  const [currentIndex, setcurrentIndex] = useState(null);

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
      (player) =>
        player.InjuryStatus === injuryStatus ||
        player.InjuryStatus === injuryStatusTwo
    );


    return SportsPlayersHealthy.map((player, i) => {
      return (
        <div className="player-item">
          {player.Sport === "basketball" && (
            <Card key={i} style={{ width: "18rem" }} className="text-center">
              <Card.Title>{player.Player}</Card.Title>
              <Card.Title>{player.Team}</Card.Title>
              <Card.Img variant="top" src={player.PlayerImgUrl} />
              <Card.Body>
                <Card.Text>Position: {player.Position}</Card.Text>
                <Card.Text>Birthday: {player.Birthday}</Card.Text>
                <Card.Text>GameDay: {player.GameDay}</Card.Text>
                <Card.Text>Injury Status: {player.InjuryStatus}</Card.Text>
                <Card.Text>key: {i}</Card.Text>

                <Button
                  onClick={() => {
                    setOpen(!open);
                    setcurrentIndex(i);
                  }}
                  aria-controls="collapse-stats"
                  aria-expanded={open}
                >
                  More Information
                </Button>
                {/* TODO: this is still clunky but it is working better */}
                <Collapse in={currentIndex === i ? open : false}>
                  <div id="collapse-stats">
                    <h3>Team Injuries</h3>
                    <hr></hr>
                    {player.TeamInjuryReport.map((injuredTeammate, i) => {
                      return <p>{injuredTeammate}</p>;
                    })}
                    <hr></hr>
                    <h3>Stats</h3>
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

          {player.Sport === "hockey" && (
            <Card key={i} style={{ width: "18rem" }} className="text-center">
              <Card.Title>{player.Player}</Card.Title>
              <Card.Title>{player.Team}</Card.Title>
              <Card.Img variant="top" src={player.PlayerImgUrl} />
              <Card.Body>
                <Card.Text>Position: {player.Position}</Card.Text>
                <Card.Text>Birthday: {player.Birthday}</Card.Text>
                <Card.Text>GameDay: {player.GameDay}</Card.Text>
                <Card.Text>Injury Status: {player.InjuryStatus}</Card.Text>

                <Button
                  onClick={() => {
                    setOpen(!open);
                    setcurrentIndex(i);
                  }}
                  aria-controls="collapse-stats"
                  aria-expanded={open}
                >
                  More Information
                </Button>
                {/* TODO: this is still clunky but it is working better */}
                <Collapse in={currentIndex === i ? open : false}>
                  <div id="collapse-stats">
                    <hr></hr>
                    <h3>Team Injuries</h3>
                    {player.TeamInjuryReport.map((injuredTeammate, i) => {
                      return <p>{injuredTeammate}</p>;
                    })}
                    <hr></hr>
                    <h3>Stats</h3>
                    {player.Position === "G" && (
                      <div>
                        <Card.Text>
                          Saves:&nbsp;
                          {player.Stats.saves}
                        </Card.Text>
                        <Card.Text>
                          Save %:&nbsp;
                          {player.Stats.savePercentage}
                        </Card.Text>
                        <Card.Text>
                          Power Play Saves:&nbsp;
                          {player.Stats.powerPlaySaves}
                        </Card.Text>
                        <Card.Text>
                          Assists:&nbsp;
                          {player.Stats.assists}
                        </Card.Text>
                        <Card.Text>
                          Shutouts:&nbsp;
                          {player.Stats.shutouts}
                        </Card.Text>
                        <Card.Text>
                          Average Minutes played:&nbsp;
                          {player.Stats.timeOnIcePerGame}
                        </Card.Text>
                      </div>
                    )}
                    {player.Position !== "G" && (
                      <div>
                        <Card.Text>
                          Goals:&nbsp;
                          {player.Stats.goals}
                        </Card.Text>
                        <Card.Text>
                          Shot %:&nbsp;
                          {player.Stats.shotPct}
                        </Card.Text>
                        <Card.Text>
                          Shots:&nbsp;
                          {player.Stats.shots}
                        </Card.Text>
                        <Card.Text>
                          Assists:&nbsp;
                          {player.Stats.assists}
                        </Card.Text>
                        <Card.Text>
                          Points:&nbsp;
                          {player.Stats.points}
                        </Card.Text>
                        <Card.Text>
                          Average Minutes played:&nbsp;
                          {player.Stats.timeOnIcePerGame}
                        </Card.Text>
                        <Card.Text>
                          Game Winning Goals:&nbsp;
                          {player.Stats.gameWinningGoals}
                        </Card.Text>
                        <Card.Text>
                          Blocks:&nbsp;
                          {player.Stats.blocked}
                        </Card.Text>
                      </div>
                    )}
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          )}

          {/* No Stats */}
          {player.Sport === "football" && (
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
          {player.Sport === "baseball" && (
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

  return <div className="flex-container">{renderWeekOfGamePlayers()}</div>;
}
