import { KaboomCtx, GameObj } from "kaboom";
import { Sprites } from "../constants";

const loadSprites = (k: KaboomCtx) => {
    k.loadRoot("/squirrel-clash/")
    k.loadSprite(Sprites.VersusOverlay, "versus-overlay.png");
    k.loadSprite(Sprites.Ground, "generated/background-pixel-2.png");
    k.loadSprite(Sprites.RedSquirrel, "generated/red-squirrel.png");
    k.loadSprite(Sprites.GreySquirrel1, "generated/grey-squirrel-soldier-1.png");
    k.loadSprite(Sprites.GreySquirrel2, "generated/grey-squirrel-soldier-2.png");
    k.loadSprite(Sprites.BattleBackground, "generated/battle-background.png");
    k.loadSprite(Sprites.DefeatedBackground, "defeated-background.png");
    k.loadSprite(Sprites.Fireball, "fireball.png");
    k.loadSprite(Sprites.Thunderbolt, "thunderbolt.png");
    k.loadSprite(Sprites.IceShard, "ice-shard.png");
};

export const getSprite = (obj: GameObj) => {
    const sprite = obj.inspect().sprite as Sprites;
    return sprite.slice(1, -1);
};

export default loadSprites;