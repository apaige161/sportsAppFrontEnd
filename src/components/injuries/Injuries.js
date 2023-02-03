import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InjuryPlayerList from "./InjuryList";

export default function PlayerInjury() {

    const [players, setPlayers] = useState([]);
    const [sport, setSport] = useState("basketball");
    const [team, setTeam] = useState("");

    // Load all players that are injured -> then pass players to the playerList
    async function getPlayerReport() {
        const playersRes = await axios.get(
          "https://sports-app.herokuapp.com/playerInjury/"
        );
        setPlayers(playersRes.data); // array of players set
    }
     
    // empty array means it will only run once
    useEffect(() => {
        getPlayerReport();
    }, [])

    const SportSelectDropdown = (event) => {
      setSport(event.target.value);
    };

    // get all teams


    const TeamSelectDropdown = (event) => {
      setTeam(event.target.value);
    };


  return (
    <div>
      <h2>Injury Report</h2>

      <div>
        <label>
          <select value={sport} onChange={SportSelectDropdown}>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="hockey">Hockey</option>
          </select>
        </label>
      </div>

      {/* <div>
        <label>
          <select value={team} onChange={TeamSelectDropdown}>
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="hockey">Hockey</option>
          </select>
        </label>
      </div> */}

      <InjuryPlayerList
        players={players}
        targetSport={sport}
        targetTeam={team}
      />
    </div>
  );
}
