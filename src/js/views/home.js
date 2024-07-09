import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPeople();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Star Wars Characters</h1>
            <div className="row">
                {store.people.map((person, index) => (
                    <div key={index} className="col-3">
                        <div className="card">
                            <img 
                                src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} 
                                className="card-img-top" 
                                alt={person.name} 
                                onError={(e) => e.target.src = "https://via.placeholder.com/150"} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{person.name}</h5>
                                <Link to={`/single/${person.uid}`}>
                                    <button className="btn btn-primary">Learn more</button>
                                </Link>
                                <button className="btn btn-success" onClick={() => actions.addFavorite(person.name)}>Add to Favorites</button>
                                <button className="btn btn-danger" onClick={() => actions.removeFavorite(person.name)}>Remove from Favorites</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3>Favorites</h3>
            <ul className="list-group">
                {store.favorites.map((fav, index) => (
                    <li key={index} className="list-group-item">{fav}</li>
                ))}
            </ul>
        </div>
    );
};

