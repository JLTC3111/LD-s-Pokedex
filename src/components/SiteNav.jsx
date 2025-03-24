import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"

export default function SiteNav (props) {
    const {selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu} = props

    const [searchValue, setSearchValue] = useState('')

// if full pokedex number includes the current searchvalue, return true
// if the pokemon name includes the current searchvalue, return true
// otherwise, exclude value from the arry 
    const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
        if (getFullPokedexNumber(eleIndex).includes(searchValue)) { return true }
        if (ele.toLowerCase().includes(searchValue.toLowerCase())) { return true }
        return false
    })
    
    return (
        <nav className={' ' + (!showSideMenu ? " open" :'')}>  
            <div className={"header " + (!showSideMenu ? " open" :'')}> 
                <button onClick={handleCloseMenu} className="open-nav-button">
                <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                    <h1 className="text-gradient">Pokedex</h1>
            </div>
            <input placeholder="Search..." value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }} /> 
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokemonNumber = first151Pokemon.indexOf(pokemon)
                return (
                    <button onClick={()=>{
                        setSelectedPokemon(truePokemonNumber)
                        handleCloseMenu()
                    }} key={pokemonIndex} className= {'nav-card ' + (truePokemonNumber === selectedPokemon ? 'nav-card-selected' : ' ')}>
                        <p>{getFullPokedexNumber(truePokemonNumber)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )

}
