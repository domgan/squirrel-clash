import { KaboomCtx } from "kaboom";
import { arrowsMovement } from "./movement";
import { generateWalls } from "./boundaries";
import { setBackground } from "./background";
import { addPlayer, addGreySquirrel } from "./characters";

const kaboomGame = (k: KaboomCtx) => {
    setBackground(k);
    generateWalls(k);

    const player = addPlayer(k);
    addGreySquirrel(k);

    arrowsMovement(k, player)
};

export default kaboomGame;
