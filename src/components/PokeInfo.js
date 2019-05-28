import React from 'react';

const PokeInfo = ({ pokemon }) => {
    if (pokemon === null) {
        return (
            <p>Select a Pokemon from the list...</p>
        )
    }
    return (
        <>
            <h4>Poke Details</h4>
            <p>Height: {pokemon.height}cm</p>
            <p>Weight: {pokemon.weight}g</p>
        </>
    )
}


export default PokeInfo;