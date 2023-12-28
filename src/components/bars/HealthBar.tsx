import styled from 'styled-components';
import Bar from './Bar';

const HealthFill = styled.div<{ percentage: number }>`
    height: 100%;
    width: ${props => props.percentage}%;
    background-color: ${props => determineHealthBarColor(props.percentage)};
    transition: width 0.3s ease-in-out;
    border-radius: 10px;
`;

const determineHealthBarColor = (percentage: number) => {
    return percentage <= 25
        ? 'red'
        : percentage <= 50
            ? 'yellow'
            : 'green'
};

type HealthDisplayProps = {
    currentHealth: number,
    maxHealth: number
};

const HealthBar = ({ currentHealth, maxHealth }: HealthDisplayProps) => (
    <Bar label="Health" currentValue={currentHealth} maxValue={maxHealth} FillComponent={HealthFill} />
);

export default HealthBar;
