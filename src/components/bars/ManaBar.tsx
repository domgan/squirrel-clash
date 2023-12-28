import styled from "styled-components";
import Bar from "./Bar";

const ManaFill = styled.div<{ percentage: number }>`
    height: 100%;
    width: ${props => props.percentage}%;
    background: linear-gradient(to right,#3498db, ${(props) => determineManaBarColor(props.percentage)});
    transition: width 0.3s ease-in-out;
    border-radius: 5px;
`;

const determineManaBarColor = (percentage: number) => {
    return percentage <= 25
        ? '#e74c3c'
        : percentage <= 50
            ? '#f39c12'
            : '#3498db'
};

type ManaDisplayProps = {
    currentMana: number,
    maxMana: number
};

const ManaBar = ({ currentMana, maxMana }: ManaDisplayProps) => (
    <Bar label="Mana" currentValue={currentMana} maxValue={maxMana} FillComponent={ManaFill} />
);

export default ManaBar;
