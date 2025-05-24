import { CardContainer, CardItem, StyledButtonEmoji } from '../styled-comps'
import { decode } from 'html-entities';

export default function MemoryCard({ handleClick, data }: { handleClick: any, data: any }) {
    const emojiEl = data.map((emoji: any, index: number) =>
        <CardItem key={index}>
            <StyledButtonEmoji
                onClick={() => handleClick(emoji.name, index)}
            >
                {decode(emoji['htmlCode'][0])}
            </StyledButtonEmoji>
        </CardItem>
    )

    return <CardContainer>{emojiEl}</CardContainer>
}