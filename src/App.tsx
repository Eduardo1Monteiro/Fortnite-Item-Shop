import { useState } from 'react'
import './App.css'
import getData from './scripts/getData'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <div className="inner-header">
          <SearchBar placeholderText="search for a cosmetic" />
        </div> 
      </div>
    </>
  )
}

export default App
