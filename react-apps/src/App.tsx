import './App.css'
import MovieSearch from './components/movie-search/MovieSearch'
import Content from './components/styled-components/Content'
import ProgressTracker from './components/styled-components/ProgressTracker'
import Game from './components/tic-tac-toe/Game'
function App() {

  return (
    <>
      <Game />
      <MovieSearch />
      <Content />
      <ProgressTracker />
    </>
  )
}

export default App
