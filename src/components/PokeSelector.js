import React from 'react';

const PokeSelector = (props) => {
    const options = props.pokemons.map((pokemon, index) => {
        return (<option key={index} value={index}>{pokemon.name}</option>)
    });

    function handleSelectChange(evt) {
        const selectedIndex = evt.target.value;
        props.onPokemonSelected(selectedIndex)
    }

    return (
        <select id='poke-selector'
            onChange={handleSelectChange}>
            <option
                defaultValue='default'>
                Catch them all...
            </option>
            {options}
        </select>
    )
}

export default PokeSelector;