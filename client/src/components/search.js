import React from 'react';
import '../index.css';



const SearchBar = () => (
    <div id="search">
    <form  action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
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
);

export default SearchBar;

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