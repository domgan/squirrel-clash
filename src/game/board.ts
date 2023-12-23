import { KaboomCtx } from "kaboom";
import { arrowsMovement } from "./movement";
import { generateWalls } from "./boundaries";
import { setBackground } from "./background";
import { addPlayer, addGreySquirrelSoldier1, addGreySquirrelSoldier2 } from "./characters";

const kaboomGame = (k: KaboomCtx) => {
    console.log("Rendering canvas...")

    setBackground(k);
    generateWalls(k);

    const player = addPlayer(k);
    addGreySquirrelSoldier1(k);
    addGreySquirrelSoldier2(k);

    arrowsMovement(k, player)

    // k.loop(5, () => {
    //     console.log(player.pos)
    // });
};

export default kaboomGame;
