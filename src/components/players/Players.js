import axios from 'axios';
import React, { useEffect, useState } from 'react'

import PlayerList from './PlayerList';

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";




export default function Players() {
  const [players, setPlayers] = useState([]);
  const [sport, setSport] = useState("basketball");
  const [toleranceDays, setToleranceDays] = useState("7");

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
  }, []);


  const SportSelectDropdown = (event) => {
    setSport(event.target.value);
  };

  const BirthdayToleranceHandler = (event) => {
    setToleranceDays(event.target.value);
  };

  return (
    <div>
      <Container class="d-flex justify-content-center">
        <div>
          <label>
            <select value={sport} onChange={SportSelectDropdown}>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="hockey">Hockey</option>
            </select>
          </label>
        </div>
        <div>
          <h4>Choose days of tolerance around a player's birthday</h4>
          <Form.Range
            onChange={BirthdayToleranceHandler}
            step={1}
            min={2}
            max={14}
          />
          <p>Range (+/-) {toleranceDays} days</p>
        </div>
        <div>
          <PlayerList
            players={players}
            targetSport={sport}
            birthdayToleranceInDays={toleranceDays}
            injuryStatus={"Healthy"}
            injuryStatusTwo={"Day-To-Day"}
          />
        </div>
      </Container>
    </div>
  );
}
