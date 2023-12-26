import { KaboomCtx } from "kaboom";
import { setBackground } from "../background";
import { GreySquirrel1, GreySquirrel2 } from "../characters/greySquirrels";
import Player from "../characters/player";
import { generateWalls } from "../common/boundaries";
import { Scenes } from "../constants";

export const forest1Scene = (k: KaboomCtx) => {
    k.scene(Scenes.Forest1, () => {
        setBackground(k);
        generateWalls(k);

        const player = new Player(k, [320, 375])
        const sq1 = new GreySquirrel1(k, [450, 520], 10)
        const sq2 = new GreySquirrel2(k, [800, 300], 10)

        player.spawn(true);
        sq1.spawn();
        sq2.spawn();
        sq1.registerEvents();
        sq2.registerEvents();

        player.movement.arrowsMovement();
    });
};
