import { useState, useEffect } from "react";
import "./App.css";
import DrinkCard from "./DrinkCard";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch('https://the-cocktail-db.p.rapidapi.com/search.php?i=vodka', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  return (
    <div className="App">
      <h1>Drink Cards</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..."/>
      <div className="cards-container">

      {users.map((user, index) => (
        <DrinkCard key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;