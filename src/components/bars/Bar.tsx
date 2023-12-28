import { ComponentType } from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const BarLabel = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
`;

const BarWrapper = styled.div`
    width: 200px;
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    overflow: hidden;
`;

type BarProps = {
    label: string,
    currentValue: number,
    maxValue: number
    FillComponent: ComponentType<{ percentage: number }>
};

const Bar = ({ label, currentValue, maxValue, FillComponent }: BarProps) => {
    const fillPercentage = (currentValue / maxValue) * 100;

    return (
        <BarContainer>
            <BarLabel>{label}</BarLabel>
            <BarWrapper>
                <FillComponent percentage={fillPercentage} />
            </BarWrapper>
            <p>{currentValue}/{maxValue}</p>
        </BarContainer>
    );
};

export default Bar;
