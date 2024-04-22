import { NavLink } from 'react-router-dom';
import '../css/Card.css'

function Card({item}){
    return(
        <div className="cardBox">
            <h1 className="cardTitle">{item.title}</h1>
            <img className="cardImg" src={item.src} alt={item.src}/>
            <p className="cardContent">{item.description}</p>
            <button className="cardButton"><NavLink to={`/${item.buttonName.toLowerCase()}`}>{item.buttonName}</NavLink></button>
        </div>
    )
}

export default Card;