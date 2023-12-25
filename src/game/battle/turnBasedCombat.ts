import { KaboomCtx, GameObj } from "kaboom";
import { Events } from "../constants";

// export const combat = (k: KaboomCtx, player: GameObj, enemy: GameObj) => {
//     if (gameState.playerTurn) {
//         handleSkills(k, player, enemy);
//     } else {
//         launchFireball(k, enemy, player, true);
//         k.wait(3, () => gameState.playerTurn = true)
//     };
// };

export const enemyAction = (k: KaboomCtx, player: GameObj) => {
    // todo: enemy actions
    console.log("ENEMY ACTION");
    k.wait(3, () => {
        player.trigger(Events.EnemyBattleAction);
    });
};