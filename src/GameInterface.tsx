import { KaboomCtx } from "kaboom";
import styled from "styled-components";
import { Skills, Events } from "./game/constants";
import charactersState from "./game/gameState";
import { MutableRefObject, useEffect, useState } from "react";
import Player from "./game/characters/player";

const skills = [
    { name: Skills.Fireball, color: '#FF5733' },
    { name: Skills.IceShard, color: '#33A1FD' },
    { name: Skills.Thunderbolt, color: '#FFD700' },
    { name: Skills.Earthquake, color: '#8B4513' },
];

const Wrapper = styled.div`
    min-width: 200px;
`;

const Header = styled.h2`
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

const getPlayerFromState = (): Player => {
    return Array.from(charactersState.gameObjects.values()).find(gameObj => gameObj instanceof Player)!;
};

type GameInterfaceProps = {
    k: KaboomCtx | null,
    canvasRef: MutableRefObject<HTMLCanvasElement | undefined>,
    isBattle: boolean
};

const GameInterface = ({ k, canvasRef, isBattle }: GameInterfaceProps) => {
    console.log(k?.debug.fps());
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);

    const handleSkill = (skillName: Skills) => {
        const player = getPlayerFromState();
        player.battleGameObj.trigger(Events.PlayerBattleAction, skillName);
        setIsPlayerTurn(false);

        player.battleGameObj.on(Events.EnemyBattleAction, () => {
            setIsPlayerTurn(true);
        });
    };

    useEffect(() => {
        if (!isBattle)
            canvasRef.current?.focus()
    }, [isBattle]);

    return (
        isBattle
            ?
            <Wrapper>
                <Header>Battle Skills</Header>
                <SkillsGridContainer disabled={!isPlayerTurn}>
                    {skills.map((skill, index) => (
                        <SkillCard key={index} color={skill.color} onClick={() => handleSkill(skill.name)}>
                            {skill.name}
                        </SkillCard>
                    ))}
                </SkillsGridContainer>
            </Wrapper>
            :
            <Wrapper>
                <Header>Map controls</Header>
                <a>Use arrows!</a>
            </Wrapper>
    );
};

export default GameInterface;
