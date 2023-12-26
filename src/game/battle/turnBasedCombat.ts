import { KaboomCtx, GameObj } from "kaboom";
import { Events, Skills } from "../constants";
import { handleSkills } from "./events/onUpdateEvents";

export const combat = (k: KaboomCtx, player: GameObj, enemy: GameObj, skill: Skills) => {
    handleSkills(k, skill, player, enemy);
    enemyAction(k, player);
};

const enemyAction = (k: KaboomCtx, player: GameObj) => {
    // todo: enemy actions
    k.wait(3, () => {
        console.log("ENEMY ACTION");
        player.trigger(Events.EnemyBattleAction);
    });
};