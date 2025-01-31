import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import bgdesktop from './assets/images/pattern-bg-desktop.png'
import './App.css'
import './index.css'
import SearchBar from './components/Searchbar'
import InfoCard from './components/InfoCard'
import MapComponent from './components/MapComponent'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <img src = {bgdesktop} alt="bgdesktop" />
        <h1 className='text-white text-3xl font-bold absolute top-10'>IP Address Tracker</h1>
        <SearchBar/>
        <InfoCard/>
        <MapComponent/>
      </div>
    </>
  )
}

export default App
