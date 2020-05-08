import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../static/bootstrap.css';

const PokeAPI = (props) => {
    const [state, setState] = useState([]);
    const [pokeAbilities, setPokeAbilities] = useState([]);
    const [chosenPoke, setChosenPoke] = useState('');
    useEffect(() => {
        // console.log("Hello");
        // let arr = ["Made UP Poke"];
        // let p;
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return response.json();
            }).then(response => {
                // p = response.results;
                // // console.log('p');
                // // console.log(p);
                // arr = p.map(val => val.name);
                // setState(arr);
                setState(response.results);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const getPokeAbilities = (e, obj) => {
        e.preventDefault();
        // let linkToPoke = obj.url;
        setChosenPoke(obj.name);
        axios.get(obj.url)
            .then(response => {
                // let movesArr = response.data.moves.map(val=>val.move.name);
                // console.log(movesArr);
                setPokeAbilities(response.data.moves.map(val => val.move.name));
                // console.log("pokeAbilities")
                // console.log(pokeAbilities)
            })
    }

    return (
        <div>
            <h1>Pokemon Promises</h1>
            <p>Click on a pokemon to see it's moves</p>
            <div className="row justify-content-center">
                <div className="col-8">
                    {/* <div
                        className="btn m-4 btn-outline-primary"
                        onClick={e => console.log("this button does nothing now, it used to fetch the data but now we have useEffect and axios imports")}
                    >Does nothing now</div> */}
                    <div className="row justify-content-between">
                        <ul className="list-group col-5">
                            <h3>V2 Pokemon</h3>
                            {state.map((val, i) => {
                                return (
                                    <li
                                        className="list-group-item list-group-item-light"
                                        key={i}
                                        onClick={e => getPokeAbilities(e, val)}
                                    >{val.name}
                                    </li>)
                            })}
                        </ul>
                        <ul className="list-group col-5">
                            {chosenPoke ? <h3>{chosenPoke} Moves</h3> : ""}
                            {pokeAbilities.map((val, i) => {
                                return (
                                    <li
                                        className="list-group-item list-group-item-light"
                                        key={i}
                                    >{val}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeAPI;
