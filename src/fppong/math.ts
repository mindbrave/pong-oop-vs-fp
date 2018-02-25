

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


export const vectorLength = (v: Vec2): number => Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));


export const normalizeVector = (v: Vec2): Vec2 => ({x: v.x/vectorLength(v), y: v.y/vectorLength(v)});


export const radiansToUnitVector = (rad: number): Vec2 => ({x: Math.cos(rad), y: Math.sin(rad)});


export const degToRad = (deg: number): number => {
    let clampedDeg = deg % 360;
    clampedDeg = clampedDeg < 0 ? clampedDeg + 360 : clampedDeg;
    clampedDeg = clampedDeg < 180 ? clampedDeg : clampedDeg - 360;
    return clampedDeg * Math.PI/180.0;
};
