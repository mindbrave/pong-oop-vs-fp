

import {Ball} from "../ball";
import {Vec2} from "../math";


export const createBall = (): Ball => ({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    radius: 10,
    speed: 10
});


export const ballIsAtPosition = (ball: Ball, position: Vec2): Ball => ({
    ...ball,
    position
});


export const ballHasVelocity = (ball: Ball, velocity: Vec2): Ball => ({
    ...ball,
    velocity
});


export const ballHasRadius = (ball: Ball, radius: number): Ball => ({
    ...ball,
    radius
});


export const ballIsNearTopEdge = (ball: Ball, topEdge: number): Ball => ({
    ...ball,
    position: {
        ...ball.position,
        y: topEdge - ball.radius - 3
    }
});


export const ballIsNearBottomEdge = (ball: Ball): Ball => ({
    ...ball,
    position: {
        ...ball.position,
        y: ball.radius + 3
    }
});
