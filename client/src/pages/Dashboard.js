import React, {useState} from 'react';
import { getUser, removeUserSession } from '../utils/Common';
import axios from 'axios';


function Dashboard(props) {
  const [searchInput, setSearchInput] = useState("");
  const imgArr = ['a1','a2', 'a3', 'a4', 'a5', 'a6', 'a7','b1','b2', 'b3', 'b4', 'b5', 'b6', 'b7' ];
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
      params: {i: 'Gin'},//a: alcohol, c: category, i: 'Dry_Vermouth,Gin,Anis'}
      headers: {
        'X-RapidAPI-Key': '84afef0d27msh95902cd8aa80a21p1e269djsne3dc68e1ef89',
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    const categories = document.getElementById('drink-categories');
    const alcoholic = document.getElementById('alcoholic');
    const glass = document.getElementById('glasses');
  

    if(!searchInput) {
      return false;
    }
      try {
        const response = await options(searchInput);

  // })
 // const [query, setquery] = useState("")
 const [drinks, setdrinks] = useState([])
 const filterCategory = {
   method: 'GET',
   url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
   params: { c: 'Cocktail' },
   headers: {
     'X-RapidAPI-Key': '3d40ed704fmsh792fc0b1a725724p1e139cjsn1573a9112c0a',
     'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
   }
 };
// const drinkstr = [0];
   //const isArray = Object.prototype.toString.call(drinkstr) === '[object Array]';
 const drinkSearch = (event) => {
   event.preventDefault();
 Axios.request(filterCategory).then(function (response) {
   //console.log(drinks);
   console.log(response.data.drinks);
    setdrinks(response.data.drinks);
   //console.log(drinks);
   
 }).catch(function (error) {
   console.error(error);
  
   //filterCategory();
  drinkSearch();
 });

 }
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const {items} = await response.json();

        const drinkData= items.map((drink) => ({
          drinkId: drink.idDrink,
          name: drink.strDrink,
          isAlcoholic: drink.strAlcoholic,
          glassType: drink.strGlass,
          instructions: drink.strInstructions,
          ingredients: drink.strIngredient[''],
          measurements: drink.strMeasure[''],
        }));
      } catch(err) {
        console.error(err);
      }

  }
  document.getElementById('submit').addEventListener('click', handleFormSubmit);
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }

  return (
    <div className="dashcontain">
      {/* Welcome {user.name}!<br /><br /> */}
      <h1>Hi!</h1>
      <img className="dashimg" src={require(`../Assets/${imgArr[Math.floor(Math.random()*imgArr.length)]}.jpg`).default}></img>
      <input type="button" onClick={handleLogout} value="Logout" />
      
      <button onClick={drinkSearch}></button>

        {drinks.map((drinks) => {
       return <DrinksBox drinks={drinks}/>
        })}

    </div>
  

  );
      }

export default Dashboard;
