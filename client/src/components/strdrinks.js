import React from 'react'

export default function DrinksBox(props) {
    return (
        <div className="strdrinks">
            <p>Drinks Name </p>
             <p className="drinks-name" key={props.drinks} >{props.drinks}</p>
        </div>
    );
}
