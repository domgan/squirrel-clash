import styled from "styled-components";
import Enemy from "../game/characters/enemy";
import Player from "../game/characters/player"
import HealthBar from "./bars/HealthBar";
import ManaBar from "./bars/ManaBar";


const BarsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px 0;
    align-items: center;
`;

const BarsWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const Label = styled.div`
    font-weight: bold;
`;

const StatusDisplay = ({ player, enemy }: { player: Player; enemy: Enemy }) => (
    <BarsContainer>
        <Label>Player</Label>
        <BarsWrapper>
            <HealthBar currentHealth={player!.health} maxHealth={player!.maxHealth} />
            <ManaBar currentMana={player!.mana} maxMana={player!.maxMana} />
        </BarsWrapper>
        <Label>Enemy</Label>
        <BarsWrapper>
            <HealthBar currentHealth={enemy!.health} maxHealth={enemy!.maxHealth} />
            <ManaBar currentMana={enemy!.mana} maxMana={enemy!.maxMana} />
        </BarsWrapper>
    </BarsContainer>
);

export default StatusDisplay;
