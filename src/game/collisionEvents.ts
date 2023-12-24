import { KaboomCtx, GameObj } from "kaboom";
import { setBattleOverlay } from "./battle/battleOverlay";
import { Scenes } from "./constants";
import { stopMovement } from "./movement";

export const startBattle = (k: KaboomCtx, player: GameObj, enemy: GameObj) => {
    stopMovement(player);
    setBattleOverlay(k, player, enemy);
    k.wait(2, () => {
        k.go(Scenes.Battle, enemy);
    });
};