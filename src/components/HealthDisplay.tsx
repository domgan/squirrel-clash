import styled from 'styled-components';

const HealthBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const HealthBarLabel = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
`;

const HealthBar = styled.div`
    width: 200px;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    overflow: hidden;
`;

const HealthFill = styled.div<{ percentage: number }>`
    height: 100%;
    width: ${props => props.percentage}%;
    background-color: ${props => determineHealthBarColor(props.percentage)};
    transition: width 0.3s ease-in-out;
    border-radius: 10px;
`;

const determineHealthBarColor = (percentage: number) => {
    return percentage < 25
        ? 'red'
        : percentage < 50
            ? 'yellow'
            : 'green'
};

type HealthDisplayProps = {
    label: string,
    currentHealth: number,
    maxHealth: number
};

const HealthDisplay = ({ label, currentHealth, maxHealth }: HealthDisplayProps) => {
    const fillPercentage = (currentHealth / maxHealth) * 100;

    return (
        <HealthBarContainer>
            <HealthBarLabel>{label}</HealthBarLabel>
            <HealthBar>
                <HealthFill percentage={fillPercentage} />
            </HealthBar>
            <p>{currentHealth}/{maxHealth}</p>
        </HealthBarContainer>
    );
};

export default HealthDisplay;
