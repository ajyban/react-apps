import RegularButton from './RegularButton'

export default function Form({ handleSubmit }) {
    return (
        <form className="wrapper">
             <div className="form__inner-wrapper">
                    {/*Category select goes here*/}
                </div>
                <div className="form__inner-wrapper">
                    {/*Number select goes here*/}
                </div>
            <RegularButton handleClick={handleSubmit}>
                Start Game
            </RegularButton>
        </form>
    )
}