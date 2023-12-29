import { KaboomCtx } from "kaboom";
import { defeatedScene, forest1Scene, winScene } from "../map/scenes";
import { forestBattleScene } from "../battle/scenes";

export const registerScenes = (k: KaboomCtx, setIsBattle: (b: boolean) => void) => {
    forest1Scene(k, setIsBattle);
    defeatedScene(k, setIsBattle);
    winScene(k, setIsBattle);
    forestBattleScene(k, setIsBattle);
};
