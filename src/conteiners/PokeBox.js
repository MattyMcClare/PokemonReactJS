import React, { Component } from 'react';
import PokeSelector from '../components/PokeSelector';
import PokeInfo from '../components/PokeInfo';

class PokeBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            selectedPokemon: null
        };
        this.selectPokemon = this.selectPokemon.bind(this);
    }

    componentDidMount() {
        const url = 'http://pokeapi.co/api/v2/pokemon/?limit=151'
        fetch(url)
            .then(res => res.json())
            .then((pokemons) => {
                this.setState({ pokemons: pokemons.results });
            });
        // const url1 = 'http://pokeapi.co/api/v2/pokemon/10/'
        // fetch(url1)
        //     .then(res => res.json())
        //     .then((pokeinfo) => {
        //         this.setState({ pokeinfo: pokeinfo });
        //     })
    }

    selectPokemon(selectedIndex) {
        const selectedPokemonUrl = this.state.pokemons[selectedIndex].url


        fetch(selectedPokemonUrl)
            .then(res => res.json())
            .then((pokemon) => (this.setState({ selectedPokemon: pokemon })
            ))
    }

    render() {
        return (
            <>
                <PokeSelector
                    pokemons={this.state.pokemons}
                    onPokemonSelected={this.selectPokemon}
                />
                <PokeInfo
                    pokemon={this.state.selectedPokemon}
                />
            </>
        );
    }
}

export default PokeBox;