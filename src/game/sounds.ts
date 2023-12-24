import { KaboomCtx } from "kaboom";
import { Sounds } from "./constants";

export const loadSounds = (k: KaboomCtx) => {
    k.loadRoot("/squirrel-clash/")
    k.loadSound(Sounds.VivaLaVida, "music/Viva-la-Vida.mp3")
    k.play(Sounds.VivaLaVida, { loop: true, volume: 0.5 }).speed = 1.5;
};