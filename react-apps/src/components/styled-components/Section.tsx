import styled from 'styled-components';
import ProgressBar from './ProgressBar'
const StyledSection = styled.div`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    font-size: 40px;
    color: #ff6961;
`;

const WeekDayTitle = styled.div`
    display: flex;
    justify-content: center;
    width: 50px;
    border-right: solid 3px lightgrey;
`;

const WeekEndTitle = styled(WeekDayTitle)`
 background-color: lightgrey;
  border-radius: 7px 0 0 7px;
`;

export default function Section({ day, progress }: { day: string, progress: string }) {
    return (
        <StyledSection>
            {
                day === 'S'
                    ? <WeekEndTitle>{day}</WeekEndTitle>
                    : <WeekDayTitle>{day}</WeekDayTitle>
            }
            <ProgressBar progress={progress}/>

        </StyledSection>
    );
};