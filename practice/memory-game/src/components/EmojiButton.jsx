import { decodeEntity } from 'html-entities';

export default function EmojiButton({
    handleClick,
    emoji,
    style,
    selectedCardEntry,
    matchedCardEntry,
    index
}) {
    const content = decodeEntity(emoji.htmlCode[0]);
    const btnContent = selectedCardEntry || matchedCardEntry ? content : "?";
    const btnAria = matchedCardEntry
        ? `${emoji.name} Matched`
        : (selectedCardEntry
            ? `${emoji.name} Not matched yet`
            : 'Card upside down')
    return (
        <button
            aria-label={`Position ${index + 1}: ${btnAria}`}
            aria-live='polite'
            disabled={matchedCardEntry}
            className={style}
            onClick={handleClick}
        >
            {btnContent}
        </button>
    )
}