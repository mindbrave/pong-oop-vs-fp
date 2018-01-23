

export type Vec2 = {
    x: number,
    y: number
}


export const addVectors = (v1: Vec2, v2: Vec2): Vec2 => ({
    x: v1.x + v2.x,
    y: v1.y + v2.y
});


export const scaleVector = (v1: Vec2, factor: number): Vec2 => ({
    x: v1.x * factor,
    y: v1.y * factor
});
