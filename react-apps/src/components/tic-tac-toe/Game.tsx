import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./helpers";

const styles = {
    width: '200px',
    margin: '20px auto',
}


export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);

    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = (index: number) => {
        const timeInHistory = history.slice(0, stepNumber + 1)
        const currentBoard = [...history[stepNumber]];
        // if game is won return, or occupied
        if (winner || currentBoard[index]) {
            return
        }
        currentBoard[index] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, currentBoard]);
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext);
    }

    const jumpTo = (step: number) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    }

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    )

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                <p>{winner
                    ? 'Winner: ' + winner
                    : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
                </p>
                {renderMoves()}
            </div>
        </>
    )
}