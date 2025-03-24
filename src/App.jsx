import Header from "./components/Header"
import SiteNav from "./components/SiteNav"
import PokeCard from "./components/PokeCard"
import { useState } from "react"

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu] = useState(true) //this does the opposite of what it should do (ie, when showSideMenu is true, it's actuall false

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu)
  }

  function handleCloseMenu() {
    setShowSideMenu(true)
  }

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SiteNav 
      showSideMenu={showSideMenu} 
      handleCloseMenu={handleCloseMenu} 
      selectedPokemon = {selectedPokemon} 
      setSelectedPokemon = {setSelectedPokemon}/> 
      <PokeCard selectedPokemon={selectedPokemon}/> 
    </>
  )
}

export default App
