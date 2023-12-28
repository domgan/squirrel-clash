import { Sprites } from "../constants";
import Enemy from "./enemy";

// todo: improve squirrel names
export class GreySquirrel1 extends Enemy {
    sprite = Sprites.GreySquirrel1;

    health = 150;
    maxHealth = 150;

    mana = 50;
    maxMana = 50;
};

export class GreySquirrel2 extends Enemy {
    sprite = Sprites.GreySquirrel2;

    health = 100;
    maxHealth = 100;

    mana = 100;
    maxMana = 10;
};
