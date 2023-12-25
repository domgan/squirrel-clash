import { KaboomCtx } from "kaboom";
import styled from "styled-components";
import { Skills, Events } from "./game/constants";
import charactersState from "./game/characters/charactersState";
import { useState } from "react";

const skills = [
    { name: Skills.Fireball, color: '#FF5733' },
    { name: Skills.IceShard, color: '#33A1FD' },
    { name: Skills.Thunderbolt, color: '#FFD700' },
    { name: Skills.Earthquake, color: '#8B4513' },
];

const Wrapper = styled.div``;

const SkillsHeader = styled.h2`
    text-align: center;
    color: #a7a7a7;
`;

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

const GameInterface = ({ k, isBattle }: { k: KaboomCtx | null, isBattle: boolean }) => {
    console.log(k?.debug.fps());
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);

    const handleSkill = (skillName: Skills) => {
        // const player = Array.from(charactersState.values()).find(gameObj => gameObj instanceof Player);
        const player = charactersState.playerBattleObj!;
        player.trigger(Events.PlayerBattleAction, skillName);
        setIsPlayerTurn(false);

        player.on(Events.EnemyBattleAction, () => {
            setIsPlayerTurn(true);
        });
    };

    return (
        isBattle
            ?
            <Wrapper>
                <SkillsHeader>Battle Skills</SkillsHeader>
                <SkillsGridContainer disabled={!isPlayerTurn}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} color={skill.color} onClick={() => handleSkill(skill.name)}>
                            {skill.name}
                        </SkillCard>
                    ))}
                </SkillsGridContainer>
            </Wrapper>
            :
            <a>Map controls / todo</a>
    );
};

export default GameInterface;
