export default function RegularButton({ children, handleClick }: { children: any, handleClick: any }) {
    return (
        <button
            className="btn btn--text"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}