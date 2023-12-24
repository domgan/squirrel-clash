import { Skills } from "./constants";

const NO_SKILL_EVENT = "";

const gameState = {
    usedSkill: NO_SKILL_EVENT,
};

export const listenForSkill = (): Skills => {
    const state = gameState.usedSkill;
    gameState.usedSkill = NO_SKILL_EVENT;
    return state as Skills;
};

export default gameState;