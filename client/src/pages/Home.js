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

      <h4 class="quote"> Quotes</h4>

      <div id="quoteChange"></div>

    </div>
  )
};
  
  

// var quotes = [
//   "Everything that is created begins in the mind",
//   "if physical world can affect mind but mind cannot affect physical world, then its the only one-way interaction known in science !!!",
//   "Be happy life is full of happiness",
//   "I am in charge of how I feel and I choose to feel happy.",
//   "Happiness is not the absence of problems, it’s the ability to deal with them.",
//   "Be positive. Be true. Be kind.",
//   "If you are positive, you’ll see opportunities instead of obstacles.",
//   "If you are positive, you’ll see opportunities instead of obstacles.",
//   "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves."
// ];

// var counter = 0;
// var elem = document.getElementById("quoteChange");
// var inst = setInterval(change, 1000);

// function change() {
//   elem.innerHTML = quotes[counter];
//   counter++;
//   if (counter >= quotes.length) {
//     counter = 0;
//    clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
//   }
// };
 
// change();

export default Home;