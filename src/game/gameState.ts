import { Skills } from "./constants";

const NO_SKILL_EVENT = "";

type GameState = {
    usedSkill: Skills | "",
    playerTurn: boolean
};

const gameState: GameState = {
    usedSkill: NO_SKILL_EVENT,
    playerTurn: true
};

export const listenForSkill = (): Skills => {
    const state = gameState.usedSkill;
    gameState.usedSkill = NO_SKILL_EVENT;
    return state as Skills;
};

export default gameState;