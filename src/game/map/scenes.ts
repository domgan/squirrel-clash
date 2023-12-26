import { KaboomCtx } from "kaboom";
import { setBackground } from "../background";
import { GreySquirrel1, GreySquirrel2 } from "../characters/greySquirrels";
import Player from "../characters/player";
import { generateWalls } from "../common/boundaries";
import { Scenes } from "../constants";
import { restoreCharacters } from "../gameState";

export const forest1Scene = (k: KaboomCtx, setIsBattle: (b: boolean) => void) => {
    k.scene(Scenes.Forest1, (wasInitialized: boolean | undefined) => {
        setIsBattle(false);
        setBackground(k);
        generateWalls(k);

        if (wasInitialized) {
            restoreCharacters();
            return;
        };

        const player = new Player(k, [320, 375]);
        const sq1 = new GreySquirrel1(k, [450, 520], 10);
        const sq2 = new GreySquirrel2(k, [800, 300], 10);

        player.spawn();
        sq1.spawn();
        sq2.spawn();
    });
};
