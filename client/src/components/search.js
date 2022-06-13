import { renderToStringWithData } from '@apollo/client/react/ssr';
import React from 'react';
import '../index.css';
import Axios from "axios";
import { useState } from "react";
import DrinksBox from './strdrinks';


function SearchBar() {

//  // const [query, setquery] = useState("")
//   const [drinks, setdrinks] = useState([])
//   const filterCategory = {
//     method: 'GET',
//     url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
//     params: { c: 'Cocktail' },
//     headers: {
//       'X-RapidAPI-Key': '3d40ed704fmsh792fc0b1a725724p1e139cjsn1573a9112c0a',
//       'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//     }
//   };
//  // const drinkstr = [0];
//    //const isArray = Object.prototype.toString.call(drinkstr) === '[object Array]';
//   const drinkSearch = (event) => {
//     event.preventDefault();
//   Axios.request(filterCategory).then(function (response) {
//     // console.log(drinks);
//     console.log(response.data.drinks);
//      setdrinks(response.data.drinks);
//     //console.log(drinks);
    
//   }).catch(function (error) {
//     console.error(error);
   
//    // filterCategory();
//   });
// }

  return (
    <div id="search">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden"></span>
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Cocktail name"
         // value={query}
          name="s"
        //  onChange={(e) => setquery(e.target.value)}
        />
        <button type="submit">Search</button>
        <label for="drink-categories">
            <select name="drink-categories" id="drink-categories">
                <option value="ordinary-drink">Ordinary Drinks</option>
                <option value="cocktail">Cocktail</option>
                <option value="shake">Shake</option>
                <option value="other">Other</option>
                <option value="cocoa">Contains Alcohol</option>
                <option value="shot">Contains Alcohol</option>
                <option value="coffee-tea">Contains Alcohol</option>
                <option value="homemade-liquer">Contains Alcohol</option>
                <option value="punch-party-drink">Contains Alcohol</option>
                <option value="contains-alcohol">Contains Alcohol</option>
                <option value="contains-alcohol">Contains Alcohol</option>

            </select>
        </label>
        <label for="alcoholic">
            <select name="alcoholic" id="alcoholic">
                <option value="contains-alcohol">Contains Alcohol</option>
                <option value="contains-alcohol">Contains Alcohol</option>
                
            </select>
        </label>
        <label for="glass">
            <input id="glass" type="radio" name="drink-categories">
                Filter By Glass
            </input>
        </label>
    </form>
    </div>
  )

  

}
export default SearchBar;

//const filterCategory = {
//   params: {c: 'Cocktail'},

//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '3d40ed704fmsh792fc0b1a725724p1e139cjsn1573a9112c0a',
//     'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//   }
// };

// fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?c=Cocktail', filterCategory)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

//   const filterAlcohol = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '3d40ed704fmsh792fc0b1a725724p1e139cjsn1573a9112c0a',
//       'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
//     }
//   };
// fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic', filterAlcohol)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));







// import React, {useState} from 'react'

// const Search = (props) => {
//   const [searchValue, setSearchValue] = useState("");

//   const handleSearchInputChanges = (e) => {
//     setSearchValue(e.target.value);
//   }

//   const resetInputField = () => {
//     setSearchValue("");
//   }

//   const callSearchFunction = (e) => {
//     e.preventDefault();
//     props.search(searchValue);
//     resetInputField();
//   }

//   return (
//     <div>
//       <form className="search">
//         <input
//           value={searchValue}
//           onChange={handleSearchInputChanges}
//           type="text"
//           placeholder="Search..."
//         />
//         <input onClick={callSearchFunction} type="submit" value="SEARCH" />
//       </form>
//     </div>
//   )
// }

// export default Search;