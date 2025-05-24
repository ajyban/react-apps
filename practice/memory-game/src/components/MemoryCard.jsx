import EmojiButton from './EmojiButton';

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards }) {

    const cardEl = data.map((card, index) => {
        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index)
        const matchedCardEntry = matchedCards.find(emoji => emoji.index === index)
        return (
            <li key={index} className="card-item">
                <EmojiButton
                    index={index}
                    selectedCardEntry={selectedCardEntry}
                    matchedCardEntry={matchedCardEntry}
                    emoji={card}
                    style="btn btn--emoji"
                    handleClick={() => handleClick(card.name, index)}
                />
            </li>
        )
    });

    return <ul className="card-container">{cardEl}</ul>
}