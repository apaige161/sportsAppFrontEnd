import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import PlayerForm from './PlayerForm'
import PlayerList from './PlayerList'



export default function Players() {

    const [players, setPlayers] = useState([]);


    // Load all players -> then pass players to the playerList
    async function getPlayers() {
        const playersRes = await axios.get(
          "https://sports-app.herokuapp.com/playerBirthday/"
        );
        setPlayers(playersRes.data); // array of players set
    }
     
    // empty array means it will only run once
    useEffect(() => {
        getPlayers();
    }, [])


  return (
    <div>
      {/* <PlayerForm getPlayers={getPlayers} /> */}
      <h3>Two week filter</h3>
      <button>NFL Only</button>
      <button>NBA Only</button>
      <button>NHL Only</button>
      <PlayerList players={players} />
    </div>
  );
}
