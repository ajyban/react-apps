import styled, { keyframes } from 'styled-components'
import Button from './Buttons';
import Icon from './Icon';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Title = styled.h1`
    color: #aac9f0;
    animation: 5s ${fadeIn} ease-in;
`;

const SubTitle = styled(Title)`
    font-size: 12px;
    align-self: center;
`;

const Paragraph = styled(SubTitle)`
    color: gray;
`;

const ReversedTitle = (props: any) => (
    <Paragraph {...props} children={props.children.split('').reverse()} />
)

const Container = styled.div`
    margin: 40px auto;
    padding: 20px;
    border: 1px solid black;
    width: 500px;
    height: 500px;
`;

const Section = styled.div`
    background-color: #f0d1aa;
    display: flex;
    justify-content: center;
    color: #f0aeaa;
    border-radius: 15px;
    display: flex;
    flex-direction:column;
    justify-content: center;
`;

export default function Content() {
    return (
        <Container>
            <Section>
                <Title>Title</Title>
                <SubTitle>Extended Styles from Title</SubTitle>
                <Paragraph>Extended Styles from SubTitle</Paragraph>
                <Paragraph as={ReversedTitle}>Extended Styles from SubTitle</Paragraph>
                <Button primary text="first" />
                <Button text="second" />
                <Icon primary border='solid 6px'/>
                <Icon  status={'in-progress'}/>
            </Section>
        </Container>
    )
};
