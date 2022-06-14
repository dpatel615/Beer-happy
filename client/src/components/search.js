import { renderToStringWithData } from '@apollo/client/react/ssr';
import React from 'react';
import '../index.css';


function SearchBar() {

 
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
        <button>Search</button>
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