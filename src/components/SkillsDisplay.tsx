import styled from "styled-components";
import Player from "../game/characters/player";
import { Fireball, Thunderbolt, IceShard, Earthquake } from "../game/skills/damage";
import { Rest } from "../game/skills/support";
import { Skill } from "../game/skills/skill";
import { KaboomCtx } from "kaboom";

const SkillsGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 600px;
`;

const SkillCard = styled.button<{ color: string; disabled: boolean }>`
    background-color: ${props => props.color};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #fff;
    font-weight: bold;
    opacity: ${props => props.disabled ? 0.5 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

const skillPairs = [
    { class: Fireball, color: '#FF5733' },
    { class: IceShard, color: '#33A1FD' },
    { class: Thunderbolt, color: '#FFD700' },
    { class: Earthquake, color: '#8B4513' },
    { class: Rest, color: "silver" },
];

type SkillsProps = {
    k: KaboomCtx,
    isPlayerTurn: boolean,
    player: Player,
    handleSkill: (skill: Skill) => void,
};

const SkillsDisplay = ({ k, isPlayerTurn, player, handleSkill }: SkillsProps) => (
    <SkillsGridContainer>
        {skillPairs.map((skillPair, index) => {
            const skill = new skillPair.class(k);
            return (
                <SkillCard
                    key={index}
                    color={skillPair.color}
                    onClick={() => handleSkill(skill)}
                    disabled={!isPlayerTurn || !player.canUseSkill(skill.reqMana)}
                >
                    {skill.name}
                </SkillCard>
            );
        })}
    </SkillsGridContainer>
);

export default SkillsDisplay;
