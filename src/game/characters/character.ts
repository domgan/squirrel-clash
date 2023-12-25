import { KaboomCtx, Vec2, GameObj, AreaComp, BodyComp, PosComp, ScaleComp, SpriteComp } from "kaboom";
import { Sprites, Tags } from "../constants";
import charactersState from "./charactersState";

export default abstract class Character {
    protected k: KaboomCtx;

    abstract sprite: Sprites;
    protected position: Vec2;
    protected scale: number;
    protected areaScale: number;
    protected mass: number;

    abstract health: number;
    public gameObj: GameObj<SpriteComp | PosComp | ScaleComp | AreaComp | BodyComp>;

    constructor(
        k: KaboomCtx,
        position: [number, number],
        mass: number = 1,
        scale: number = 0.2,
        areaScale: number = 0.6,
    ) {
        this.k = k;
        this.position = k.vec2(...position);
        this.mass = mass;
        this.scale = scale;
        this.areaScale = areaScale;
        this.gameObj = this.k.make();
    }

    abstract battleSpawn: () => GameObj;

    spawn = (flipX: boolean = false) => {
        this.gameObj = this.k.add([
            this.k.sprite(this.sprite),
            this.k.pos(this.position),
            this.k.area({ scale: this.areaScale }),
            this.k.body({ mass: this.mass }),
            this.k.scale(this.scale),
            Tags.Enemy,
        ]);
        this.gameObj.flipX = flipX;
        charactersState.gameObjects.set(this.gameObj.id!, this);
    };

    takeDamage = (amount: number) => {
        this.health -= amount;
        if (this.health <= 0)
            this.destroy();
    };

    isAlive = (): boolean => this.health > 0;

    destroy = () => {
        charactersState.gameObjects.delete(this.gameObj.id!);
        this.gameObj.destroy();
    };
};
