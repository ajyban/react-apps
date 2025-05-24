import { Outlet } from 'react-router';
import { Link } from 'react-router';

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to=''>Home</Link>
        <Link to='tic-tac-toe'>Tic Tac Toe</Link>
        <Link to='movie-search'>Movie Search</Link>
        <Link to='progress-tracker'>Progress Tracker(Styled components)</Link>
        <Link to='styled-component-content'>Content(Styled components)</Link>
        <Link to='memory-game'>Memory Game</Link>
      </nav>
      <Outlet />
    </>
  )
}