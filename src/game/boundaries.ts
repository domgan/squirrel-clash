import { KaboomCtx } from "kaboom";

export const generateWalls = (k: KaboomCtx) => {
    const wallThickness = 10;
    const walls = [
        { width: wallThickness, height: k.height(), pos: [0, 0] }, // Left wall
        { width: wallThickness, height: k.height(), pos: [k.width() - wallThickness, 0] }, // Right wall
        { width: k.width(), height: wallThickness, pos: [0, 0] }, // Top wall
        { width: k.width(), height: wallThickness, pos: [0, k.height() - wallThickness] }, // Bottom wall
    ];

    walls.forEach((wall) =>
        k.add([k.rect(wall.width, wall.height), k.pos(...(wall.pos) as []), k.area(), k.body({ isStatic: true })])
    );
};