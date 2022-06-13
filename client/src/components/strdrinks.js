import React from 'react'

export default function strdrinks(drinks) {
    return (
        <div className="strdrinks">
            <p>Drinks Name </p>
             <p className="drinks-name">{drinks[0]}</p>
        </div>
    );
}
