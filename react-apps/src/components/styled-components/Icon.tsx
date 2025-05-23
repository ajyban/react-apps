import styled from 'styled-components';


const StyledIcon = styled.div<{ primary?: boolean, border?: string, status?: string }>`
    background-color: ${({ primary }) => primary ? 'green' : 'yellow'};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin: 15px;
    border: ${({ border }) => border || 'solid 3px blue'};
    margin-left: ${({ status }) => {
        if (status === 'in-progress') {
            return '70px';
        } else if (status === 'done') {
            return '140px';
        } else {
            return '5px';
        }
    }}
`;

export default function Icon({ primary, border, status }: { primary?: boolean, border?: string, status?: string }) {
    return (
        <StyledIcon primary={primary} border={border} status={status} />
    );
};