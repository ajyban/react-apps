
export interface SquareProps {
    value: string
    onClick: () => void
}

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

export default function Square(props: SquareProps) {
    return (
        <>
            <button
                style={style}
                className="square"
                onClick={props.onClick}>
                {props.value}
            </button>
        </>
    );
};