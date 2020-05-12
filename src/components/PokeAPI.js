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
                setState(response.results.map(val => {
                    const i = require(`./../static/pokemonImgs/${val.name}.jpg`);
                    const capName = val.name[0].toUpperCase() + val.name.slice(1, val.name.length);
                    return ({
                        ...val,
                        imgPath: i,
                        capName: capName
                    })
                }));
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const getPokeAbilities = (e, obj) => {
        e.preventDefault();
        // let linkToPoke = obj.url;
        if(chosenPoke === obj.capName){
            setPokeAbilities([]);
            setChosenPoke("");
        } else {
            setChosenPoke(obj.capName);
            axios.get(obj.url)
                .then(response => {
                    // let movesArr = response.data.moves.map(val=>val.move.name);
                    // console.log(movesArr);
                    setPokeAbilities(response.data.moves.map(val => val.move.name));
                    // console.log("pokeAbilities")
                    // console.log(pokeAbilities)
                })
        }
    }

    return (
        <>
            <h1>Pokemon Promises</h1>
            <p>Click on a pokemon to see it's moves</p>
            <div className="row justify-content-center">
                <div className="col-8">
                    {/* <div
                        className="btn m-4 btn-outline-primary"
                        onClick={e => console.log("this button does nothing now, it used to fetch the data but now we have useEffect and axios imports")}
                    >Does nothing now</div> */}
                    <div className="row justify-content-between">
                        <div className="col-9">
                            <h3>V2 Pokemon</h3>
                            <div className="row">
                                {state.map((val, i) => {
                                    return (
                                        <div key={i} className="col-4"
                                            onClick={e => getPokeAbilities(e, val)}>
                                            {val.capName}
                                            <img className="col" src={val.imgPath} alt={val.capName}></img>
                                        </div>)
                                })}
                            </div>
                        </div>
                        <ul className="list-group col-3 overflow-auto" id="attack-moves">
                            {chosenPoke ? <h3 id="blah">{chosenPoke}'s Moves</h3> : <h3>Choose a Pokemon</h3>}
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
        </>
    )
}

export default PokeAPI;
