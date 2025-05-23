import styled from 'styled-components';
import Section from './Section';

const Container = styled.div`
    margin: 40px auto;
    padding: 20px;
    border: 1px solid black;
    width: 800px;
    height: 800px;
    font-family: sans-serif;
    color: #b19cd9;
    display: flex;
`;


const Title = styled.h1`
  color: #b19cd9;
`;


const ProgressTrackerContainer = styled.div`
    background-color: #CCDDEE;
    font-family: sans-serif;
    color: #b19cd9;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
`;


const ProgressSectionContainer = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
`;

export default function ProgressTracker() {
    return (
        <Container>
            <ProgressTrackerContainer>
                <Title>Progress Tracker</Title>
                <ProgressSectionContainer>
                    <Section day="M" progress='100%'/>
                    <Section day="T" progress='80%'/>
                    <Section day="W" progress='70%'/>
                    <Section day="T" progress='60%'/>
                    <Section day="F" progress='40%'/>
                    <Section day="S" progress='20%'/>
                    <Section day="S" progress='10%'/>
                </ProgressSectionContainer>
            </ProgressTrackerContainer>
        </Container>
    );

}