import Square from "./Square";

export interface BoardProps {
    squares: string[]
    onClick: (val: number) => void
}

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

export default function Board(props: BoardProps) {
    return (
        <div style={style}>
            {props.squares.map((square, index) => (
                <Square
                    key={index}
                    value={square}
                    onClick={() => props.onClick(index)} />
            ))}
        </div>
    )
}