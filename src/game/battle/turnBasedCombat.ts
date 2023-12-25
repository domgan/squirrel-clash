import { KaboomCtx, GameObj } from "kaboom";
import gameState from "../gameState";
import { launchFireball } from "./skills";
import { handleSkills } from "../events/onUpdateEvents";

export const combat = (k: KaboomCtx, player: GameObj, enemy: GameObj) => {
    if (gameState.playerTurn) {
        handleSkills(k, player, enemy);
    } else {
        launchFireball(k, enemy, player, true);
        k.wait(3, () => gameState.playerTurn = true)
    };
};