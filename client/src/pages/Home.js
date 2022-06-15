import React from 'react';
//const quotes = require('./quotes.json');
var backgroundImage = require('../Assets/image.png');


function Home() {

  return (
 
 <div class="contain">

      <figure src={backgroundImage} style={{ flex: 1, height: null, width: null }} >
     </figure>

      <h2 class="home1">
        Welcome to Beer Happy!
      </h2>

    </div>
  )
};
  


export default Home;