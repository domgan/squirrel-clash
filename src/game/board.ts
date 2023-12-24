import { KaboomCtx } from "kaboom";
import loadSprites from "./loadSprites";
import { Scenes } from "./constants";
import { registerScenes } from "./scenes";

const kaboomGame = (k: KaboomCtx, setIsBattle: (b: boolean) => void) => {
    console.log("Rendering canvas...")
    loadSprites(k);
    registerScenes(k, setIsBattle);

    k.go(Scenes.Forest1)
    // k.loop(5, () => {
    //     console.log(player.pos)
    // });
};

export default kaboomGame;
