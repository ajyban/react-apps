import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import MemoryHome from './components/memory-game/MemoryHome'
import MovieSearch from './components/movie-search/MovieSearch'
import Content from './components/styled-components/Content'
import ProgressTracker from './components/styled-components/ProgressTracker'
import Game from './components/tic-tac-toe/Game'
import { Route } from 'react-router'
import NavBar from './components/NavBar'
import Home from './components/Home'
function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='tic-tac-toe' element={<Game />} />
          <Route path='movie-search' element={<MovieSearch />} />
          <Route path='progress-tracker' element={<ProgressTracker />} />
          <Route path='styled-component-content' element={<Content />} />
          <Route path='memory-game' element={<MemoryHome />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
