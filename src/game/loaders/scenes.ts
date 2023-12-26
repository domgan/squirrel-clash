import { KaboomCtx } from "kaboom";
import { forest1Scene } from "../map/scenes";
import { forestBattleScene } from "../battle/scenes";

export const registerScenes = (k: KaboomCtx, setIsBattle: (b: boolean) => void) => {
    forest1Scene(k, setIsBattle);
    forestBattleScene(k, setIsBattle)
};
