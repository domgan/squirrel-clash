import { KaboomCtx } from "kaboom";
import loadSprites from "./loaders/sprites";
import { Scenes } from "./constants";
import { registerScenes } from "./loaders/scenes";
import { loadSounds } from "./loaders/sounds";

const kaboomGame = (k: KaboomCtx, setIsBattle: (b: boolean) => void) => {
    console.log("Rendering canvas...")
    loadSprites(k);
    loadSounds(k);
    registerScenes(k, setIsBattle);

    k.go(Scenes.Forest1)
    // k.loop(5, () => {
    //     console.log(player.pos)
    // });
};

export default kaboomGame;
