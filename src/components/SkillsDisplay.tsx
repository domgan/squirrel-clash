import styled from "styled-components";
import Player from "../game/characters/player";
import { Skills, SkillsSupport } from "../game/constants";

const SkillsGridContainer = styled.div<{ disabled: boolean }>`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 600px;
    opacity: ${props => props.disabled ? 0.5 : 1};
    pointer-events: ${props => props.disabled ? 'none' : 'auto'};
`;

const SkillCard = styled.button<{ color: string }>`
    background-color: ${props => props.color};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #fff;
    font-weight: bold;
`;

const skills = [
    { name: Skills.Fireball, color: '#FF5733' },
    { name: Skills.IceShard, color: '#33A1FD' },
    { name: Skills.Thunderbolt, color: '#FFD700' },
    { name: Skills.Earthquake, color: '#8B4513' },
    { name: SkillsSupport.Rest, color: "silver" }
];

type SkillsProps = {
    isPlayerTurn: boolean,
    player: Player,
    handleSkill: (skill: Skills | SkillsSupport) => void,
}

const SkillsDisplay = ({ isPlayerTurn, player, handleSkill }: SkillsProps) => {

    return (
        <SkillsGridContainer disabled={!isPlayerTurn || !player!.canUseSkill(25)}>
            {skills.map((skill, index) => (
                <SkillCard key={index} color={skill.color} onClick={() => handleSkill(skill.name)}>
                    {skill.name}
                </SkillCard>
            ))}
        </SkillsGridContainer>
    );
};

export default SkillsDisplay;
