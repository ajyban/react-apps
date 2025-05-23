import styled from 'styled-components';

const StyledButton = styled.button<{ primary?: boolean }>`
    display: flex;
    background-color: ${({ primary }) => primary ? 'red' : 'blue'};
    padding: 5px;
    margin: 5px;
    border-radius: 15px;

    &:hover {
        background-color: grey;
    }
    .subtext {
        font-size: 10px;
    }
`;

export default function Button({ text, primary }: { text: string, primary?: boolean }) {
    return (
        <StyledButton primary={primary}>
            {text}
            <p className='subtext'>Sub text</p>
        </StyledButton>
    )
}