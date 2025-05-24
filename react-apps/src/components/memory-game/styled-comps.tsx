import styled from 'styled-components';



export const COLORS = {
    'dark-primary': '#082f49',
    'light-primary': '#f0f9ff',
    'accent': '#fde68a'
};

export const Base = styled.body`
    font-family: 'Inter', sans-serif;
    background: ${COLORS['dark-primary']};
    color: ${COLORS['light-primary']};
    text-align: center;
    min-height: 100vh;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    height: 100%;
    min-height: 100vh;
    padding: 2em;
`;


export const StyledH1 = styled.h1`
    color: ${COLORS['accent']};
    font-size: 2.25rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0;
    @media (min-width: 768px) {
        font-size: 2.75rem;
    }
`;

export const StyledButton = styled.button`
    background-color: ${COLORS['light-primary']};
    color: ${COLORS['dark-primary']};
    font-family: inherit;
    border: 2px solid ${COLORS['dark-primary']};
    border-radius: .5em;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${COLORS['light-primary']};
        color: ${COLORS['dark-primary']};
        box-shadow: 0 0 5px 1px ${COLORS['dark-primary']};
    }
        
`;

export const StyledButtonText = styled(StyledButton)`
    background-color: ${COLORS['dark-primary']};
    color: ${COLORS['light-primary']};
    font-size: 1.25rem;
    width: max-content;
    margin: 0 auto;
    padding: .25em .75em;
    &:hover,
    &:focus {
        background-color: ${COLORS['light-primary']};
        color: ${COLORS['dark-primary']};
        box-shadow: 0 0 5px 1px ${COLORS['dark-primary']};
    }
`;

export const StyledButtonEmoji = styled(StyledButton)`
    width: 100%;
    height: 100px;
    font-size: 3rem;
    border: 2px solid var(--light-primary);

    @media (min-width: 768px) {
        font-size: 4rem;
        height: 110px;
    }

    @media (min-width: 1024px) {
        font-size: 4.5rem;
        height: 125px;
    }
`;

export const StyledForm = styled.form`
    gap: 2em;
    font-size: 1.125rem;
    padding: 1em;
    border-radius: .5em;
    &:hover,
    &:focus {
        background-color: ${COLORS['light-primary']};
        color: ${COLORS['dark-primary']};
        box-shadow: 0 0 5px 1px ${COLORS['dark-primary']};
    }
`;


export const StyledSelect = styled.select`
    background-color: var(--dark-primary);
    color: var(--light-primary);
    font-family: inherit;
    padding: .5em;
    border: 1px solid var(--dark-primary);
    border-radius: .5em;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: var(--light-primary);
        color: var(--dark-primary);
        box-shadow: 0 0 2px 1px var(--dark-primary);
    }
`;

export const CardContainer = styled.ul`
    padding-left: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1em;
    width: 100%;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));    
    }

    @media (min-width: 1024px) {    
        grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));    
    }
`;

export const CardItem = styled.li`
    list-style: none;
`;

