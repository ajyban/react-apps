import { StyledForm } from '../styled-comps'
import RegularButton from './RegularButton'

export default function Form({ handleSubmit }: { handleSubmit: any }) {
    return (
        <StyledForm>
            <RegularButton handleClick={handleSubmit}>
                Start Game
            </RegularButton>
        </StyledForm>
    )
}