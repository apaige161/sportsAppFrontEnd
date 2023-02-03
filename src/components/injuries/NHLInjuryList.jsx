import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";



export default function NHLPlayerList({ players }) {

    

    function renderAllPlayers() {
      // filter by sport
      let NHLPlayers = players.filter(
        (player) => player.Sport === "hockey"
      );

      // create a new array from the old array with map
      return NHLPlayers.map((player, i) => {
        return (
          <Card key={i} style={{ width: "18rem" }} className="text-center">
            <Card.Title>{player.Player}</Card.Title>
            <Card.Title>{player.Team}</Card.Title>
            <Card.Img variant="top" src={player.PlayerImgUrl} />
            <Card.Body>
              <Card.Text>Sport: {player.Sport}</Card.Text>
              <Card.Text>Position: {player.Position}</Card.Text>
              <Card.Text>Birthday: {player.Birthday}</Card.Text>
              <Card.Text>Injury: Status {player.InjuryStatus}</Card.Text>
            </Card.Body>
            {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
          </Card>
        );
      });
    }

    // // this works
    // function renderBySport (sport="football") {
    //   let playersBySport = players.filter((player) => player.Sport === sport);
    //   console.log(playersBySport);
    //   return playersBySport.map((player, i) => {
    //     return (
    //         <Card key={i} style={{ width: "18rem" }} className="text-center">
    //           <Card.Title>{player.Player}</Card.Title>
    //           <Card.Title>{player.Team}</Card.Title>
    //           <Card.Img variant="top" src={player.PlayerImgUrl} />
    //           <Card.Body>
    //             <Card.Text>Sport: {player.Sport}</Card.Text>
    //             <Card.Text>Position: {player.Position}</Card.Text>
    //             <Card.Text>Birthday: {player.Birthday}</Card.Text>
    //             <Card.Text>GameDay: {player.GameDay}</Card.Text>
    //             <Card.Text>Injury: Status {player.InjuryStatus}</Card.Text>
    //           </Card.Body>
    //           {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
    //         </Card>
    //     );
    //   });
    // }

    // const numOfDaysToSearch = 7;
    // function renderWeekOfGamePlayers() {
    //   let dateTime = new Date();
    //   let daysToCheck = [];

    //   // add days to array
    //   for (let i = 0; i < numOfDaysToSearch; i++) {
    //     let dayToAdd = moment(dateTime, "MM-DD-YY")
    //       .add(i, "d")
    //       .format("MM-DD-YY");
    //     dayToAdd = dayToAdd.replaceAll("-", "/");
    //     daysToCheck.push(dayToAdd);
    //   }

    //   // check if gameday matches spec
    //   let filteredPlayers = players.filter((player) =>
    //     daysToCheck.includes(player.GameDay)
    //   );

    //   return filteredPlayers.map((player, i) => {
    //     return (
    //       <div>
    //         <Card key={i} style={{ width: "18rem" }} className="text-center">
    //           <Card.Title>{player.Player}</Card.Title>
    //           <Card.Title>{player.Team}</Card.Title>
    //           <Card.Img variant="top" src={player.PlayerImgUrl} />
    //           <Card.Body>
    //             <Card.Text>Sport: {player.Sport}</Card.Text>
    //             <Card.Text>Position: {player.Position}</Card.Text>
    //             <Card.Text>Birthday: {player.Birthday}</Card.Text>
    //             <Card.Text>GameDay: {player.GameDay}</Card.Text>
    //             <Card.Text>Injury: Status {player.InjuryStatus}</Card.Text>
    //           </Card.Body>
    //           {/* <Card.Img variant="top" src={player.TeamLogoUrl} /> */}
    //         </Card>
    //       </div>
    //     );
    //   });
    // }
    
  return <div>{renderAllPlayers()}</div>;
}
