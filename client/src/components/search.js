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
        <button type="submit" id="submit">Search</button>
        <label for="drink-categories">
            <select name="drink-categories" id="drink-categories">
                <option value="ordinary-drink">Ordinary Drinks</option>
                <option value="cocktail">Cocktail</option>
                <option value="shake">Shake</option>
                <option value="other">Other</option>
                <option value="cocoa">Cocoa</option>
                <option value="shot">Shots</option>
                <option value="coffee-tea">Contains Alcohol</option>
                <option value="homemade-liqueur">Homemade Liqueur</option>
                <option value="punch-party-drink">Punch/Party Drinks</option>
                <option value="beer">Beer</option>
                <option value="soft-drink">Soft Drinks</option>
            </select>
        </label>
        <label for="alcoholic">
            <select name="alcoholic" id="alcoholic">
                <option value="contains-alcohol">Contains Alcohol</option>
                <option value="contains-alcohol">Contains Alcohol</option>
                
            </select>
        </label>
        <label for="glasses">
            <select name="glass" id="glasses">
                <option value="highball-glass">Highball Glass</option>
                <option value="cocktail-glass">Cocktail Glass</option>
                <option value="old-fashioned-glass">Old-Fashioned Glass</option>
                <option value="whiskey-glass">Whiskey Glass</option>
                <option value="collins-glass">Collins Glass</option>
                <option value="pousse-cafe-glass">Pousse Cafe Glass</option>
                <option value="champagne-flute">Champagne Flute</option>
                <option value="whiskey-sour-glass">Whiskey Sour Glass</option>
                <option value="cordial-glass">Cordial Glass</option>
                <option value="brandy-snifter">Brandy Snifter</option>
                <option value="white-wine-glass">White Wine Glass</option>
                <option value="nick-and-nora-glass">Nick and Nora Glass</option>
                <option value="hurricane-glass">Hurricane Glass</option>
                <option value="coffee-mug">Coffee Mug</option>
                <option value="shot-glass">Shot Glass</option>
                <option value="jar">Jar</option>
                <option value="irish-coffee-cup">Irish Coffee Cup</option>
                <option value="highball-glass">Punch Bowl</option>
                <option value="pitcher">Pitcher</option>
                <option value="pint-glass">Pint Glass</option>
                <option value="copper-mug">Copper Mug</option>
                <option value="wine-glass">Wine Glass</option>
                <option value="beer-mug">Beer Mug</option>
                <option value="margarita-coupette-glass">Margarita/Coupette Glass</option>
                <option value="beer-pilsner">Pilsner</option>
                <option value="beer-glass">Beer Glass</option>
                <option value="parfait-glass">Parfait Glass</option>
                <option value="mason-jar">Mason Jar</option>
                <option value="margarita-glass">Margarita Glass</option>
                <option value="martini-glass">Martini Glass</option>
                <option value="balloon-glass">Balloon Glass</option>
                <option value="coupe-glass">Coupe Glass</option>

            </select>
        </label>
    </form>
    </div>
  )
  
}
 export default SearchBar;

