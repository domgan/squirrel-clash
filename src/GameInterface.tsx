import { KaboomCtx } from "kaboom";
import styled from "styled-components";
import { Skills, Events, Tags, SkillsSupport } from "./game/constants";
import { MutableRefObject, useEffect, useState } from "react";
import Player from "./game/characters/player";
import Enemy from "./game/characters/enemy";
import StatusDisplay from "./components/StatusDisplay";
import SkillsDisplay from "./components/SkillsDisplay";


const Wrapper = styled.div`
    min-width: 200px;
`;

const Header = styled.h2`
    text-align: center;
    color: #a7a7a7;
`;

// const getPlayerFromState = (): Player => {
//     return Array.from(charactersState.gameObjects.values()).find(gameObj => gameObj instanceof Player)!;
// };

type GameInterfaceProps = {
    k: KaboomCtx | null,
    canvasRef: MutableRefObject<HTMLCanvasElement | undefined>,
    isBattle: boolean
};

const GameInterface = ({ k, canvasRef, isBattle }: GameInterfaceProps) => {
    k?.debug.fps();
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [player, setPlayer] = useState<Player>();
    const [enemy, setEnemy] = useState<Enemy>();
    const [updateTrigger, setUpdateTrigger] = useState(false);

    useEffect(() => {
        k?.on(Events.StartBattle, Tags.Player, (_, player, enemy: Enemy) => {
            setPlayer(player);
            setEnemy(enemy);
        });
    });

    const handleSkill = (skillName: Skills | SkillsSupport) => {
        // console.log(player?.battleGameObj.health);
        player?.battleGameObj.trigger(Events.PlayerBattleAction, skillName);
        setIsPlayerTurn(false);

        player?.battleGameObj.on(Events.PlayerBattleActionFinished, () => {
            setUpdateTrigger(!updateTrigger);
        });

        player?.battleGameObj.on(Events.EnemyBattleActionFinished, () => {
            setIsPlayerTurn(true);
        });

        player?.battleGameObj.on(Events.EnemyBattleAction, () => {
            setUpdateTrigger(!updateTrigger);
        });

        player?.battleGameObj.on(Events.EndBattle, () => {
            setIsPlayerTurn(true);
        });
    };

    useEffect(() => {
        if (!isBattle) // todo: move to state set by event
            canvasRef.current?.focus();
    }, [isBattle]);

    return (
        isBattle
            ?
            <Wrapper>
                <Header>Battle Skills</Header>
                <SkillsDisplay isPlayerTurn={isPlayerTurn} player={player!} handleSkill={handleSkill} />
                <StatusDisplay player={player!} enemy={enemy!} />
            </Wrapper>
            :
            <Wrapper>
                <Header>Map controls</Header>
                <a>Use arrows!</a>
            </Wrapper>
    );
};

export default GameInterface;
