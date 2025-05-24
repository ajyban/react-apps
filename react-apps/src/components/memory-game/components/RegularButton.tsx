import { StyledButtonText } from '../styled-comps';

export default function RegularButton({ children, handleClick }: { children: any, handleClick: any }) {
    return (
        <StyledButtonText
            onClick={handleClick}
        >
            {children}
        </StyledButtonText>
    )
}