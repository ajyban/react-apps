import styled from 'styled-components';

const ProgressSection = styled.div`
    width: 250px;
`

const StyledProgressBar = styled.div<{ progress: string }>`
background-color: ${({ progress }) => {
        let numeric = parseInt(progress.slice(0, -1))
        if (numeric >= 80) {
            return 'red';
        } else if (numeric >= 60) {
            return 'orange';
        } else if (numeric >= 40) {
            return 'yellow';
        } else {
            return 'green';
        }
    }};
    height: 50px;
    width: ${({ progress }) => progress || '0%'};
`;


export default function ProgressBar({ progress }: { progress: string }) {
    return (
        <ProgressSection>
            <StyledProgressBar progress={progress} />
        </ProgressSection>

    );
};