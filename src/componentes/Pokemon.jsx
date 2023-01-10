import React, { useState } from "react";
import "./style.css"

const Pokemon = (props) => {
    const [ pokemon, setPokemon ] = useState([]);

    const traerPokemones = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setPokemon(response.results)
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    return (
        <div>
            <button className="btn" onClick={traerPokemones}> Fetch Pokemon</button>
            <ul>{pokemon.map((pokemon, index) => {
                return <li className="list" key={index}>{pokemon.name}</li>;
                })}
            </ul>
        </div>
    );
}
export default Pokemon;