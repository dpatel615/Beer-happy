import React from "react";
function Home() {
  return (
    <div>
      <p className="content is-medium, is italic">Welcome to Beer Happy!</p>
      <hr/>
      <img className="my-pic" src={process.env.PUBLIC_URL + Home } alt="Home Image"/>
      <p className="content">
      The start of the pandemic brought about many changes to the food service industry. Among those changes is the increase in "home-brew" mixologists! To help handle the sudden growth and interest in mocktails and cocktails, we introduce Beer Happy! Beer Happy is an app designed for the home-brew mixologist with an easy to use interface that allows users to research any drink they'd like to try making, and save ones they enjoy to their profile! Our five-star rating system allows users to see which cocktails are the most popular. 
      </p>
    </div>
  );
}

export default Home;