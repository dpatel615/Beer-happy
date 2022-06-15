import './DrinkCard.css';
import Name from './Name';
import Ingredients from './Ingredients';


const DrinkCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
                <Name name={userData.name}/>
                <Ingredients ingredients={userData.ingredients} type="Home"/>
                <Glass glass={userData.glass} type="Glass"/>
                <Categories categories={userData.categories} type="Categories"/>
                <Alcoholic alcoholic={userData.alcoholic} type="Alcoholic"/>
                <Instructions instructions={userData.instructions} type="Instructions"/>
                <div className="card__image"><img src={userData.picture.medium}/></div>
            </div>

        </div>
    )
};

export default DrinkCard;