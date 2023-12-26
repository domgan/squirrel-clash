import { Sprites } from "../constants";
import Enemy from "./enemy";

// todo: improve squirrel names
export class GreySquirrel1 extends Enemy {
    sprite = Sprites.GreySquirrel1;
    health = 100;
};

export class GreySquirrel2 extends Enemy {
    sprite = Sprites.GreySquirrel2;
    health = 100;
};
