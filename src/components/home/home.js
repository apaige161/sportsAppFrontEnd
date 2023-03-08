
import React from 'react'

import '../../App.css'





export default function Home() {


  return (
    <div className="main-container">
      <h2>Why?</h2>
      <p>
        This website was built to give a niche insight for potential gambling
        picks based on sports data.
      </p>
      <h3>Birthdays</h3>
      <p>Who doesn't feel like a million bucks on their birthday?</p>
      <p>
        I am still working on the statistical analysis to give users a better
        number but I have personally observed athletes outperform an average
        near their birthday.
      </p>
      <p>
        I have built a list, as an minimum viable product (MVP) to show when
        athletes play on or near their birthdays.
      </p>
      <h3>Lottery Tickets</h3>
      <p>
        I have scrapped all the KY lottery ticket data. It has been sorted and
        only displays the tickets with the highest chance to win.
      </p>
      <hr></hr>
      <h3>Road Map</h3>
      <h5>Phase 1</h5>
      <ul>
        <li>Style login and register components.</li>
        <li>Style home component.</li>
        <li>Fix login and other stlyes for IOS.</li>
        <li>Test layouts on all web browsers.</li>
      </ul>
      <h5>Phase 2</h5>
      <ul>
        <li>Add golf (PGA) to the birthday and injury lists.</li>
        <li>
          Add soccer (MLS, euro leagues) to the birthday and injury lists.
        </li>
        <li>Add baseball (MLB) to the birthday and injury lists.</li>
      </ul>
      <h5>Phase 3</h5>
      <ul>
        <li>
          Add college football and basketball to the birthday and injury lists.
        </li>
        <li>Add another metric for users -TBD</li>
        <li>Add horse racing statics -TBD</li>
      </ul>
    </div>
  );
}
