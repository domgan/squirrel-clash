import { KaboomCtx, GameObj } from "kaboom";
import { setBattleOverlay } from "../../battle/battleOverlay";
import { Scenes } from "../../constants";
import charactersState from "../../gameState";

export const startBattle = (k: KaboomCtx, playerObj: GameObj, enemyObj: GameObj) => {
    const player = charactersState.gameObjects.get(playerObj.id!);
    const enemy = charactersState.gameObjects.get(enemyObj.id!);

    player?.movement.stopMovement();
    setBattleOverlay(k, playerObj, enemyObj);
    k.wait(2, () => {
        k.go(Scenes.Battle, player, enemy);
    });
};