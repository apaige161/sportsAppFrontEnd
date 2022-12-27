import axios from "axios";
import React, { useState } from "react";

export default function PlayerForm({ getPlayers }) {
    // send a new customer to the backend

    const [playerName, setPlayerName] = useState("");
    const [sport, setSport] = useState("");
    const [position, setPosition] = useState("");
    const [team, setTeam] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gameDay, setgameDay] = useState("");
    const [injuryStatus, setInjuryStatus] = useState("");

    // avoid refreshing the page
    async function savePlayer(e) {
        e.preventDefault();

        try {
            // send post request to server
            // create customer data
            const playerData = {
              Player: playerName,
              sport: sport,
              Position: position,
              Team: team,
              Birthday: birthday,
              GameDay: gameDay,
              InjuryStatus: injuryStatus,
            };
            await axios.post("https://sports-app.herokuapp.com/player/", playerData);
            // run the get customers function from parent component
            getPlayers();
        } catch(err) {
            console.log(err)
        }
    }

  return (
    <div>
      <div>Form</div>
      <form onSubmit={savePlayer}>
        <input
          type="text"
          placeholder="Player Name"
          onChange={(e) => {
            setPlayerName(e.target.value);
          }}
          value={playerName}
        />
        <input
          type="text"
          placeholder="Sport"
          onChange={(e) => {
            setSport(e.target.value);
          }}
          value={sport}
        />
        <input
          type="text"
          placeholder="Position"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          value={position}
        />
        <input
          type="text"
          placeholder="Team"
          onChange={(e) => {
            setTeam(e.target.value);
          }}
          value={team}
        />
        <input
          type="text"
          placeholder="Birthday"
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
          value={birthday}
        />
        <input
          type="text"
          placeholder="Game Day"
          onChange={(e) => {
            setgameDay(e.target.value);
          }}
          value={gameDay}
        />
        <input
          type="text"
          placeholder="InjuryStatus"
          onChange={(e) => {
            setInjuryStatus(e.target.value);
          }}
          value={injuryStatus}
        />
        <button type="submit">Save New Player</button>
      </form>
    </div>
  );
}
