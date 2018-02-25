
import {Paddle, orderPaddleToMoveUp, orderPaddleToMoveDown, orderPaddleToStop, movePaddle} from './paddle';
import {Ball, moveBall, orderBallToMoveInRandomNotVerticalDirection} from './ball';


export type Pong = {
    score: {
        player: number,
        cpu: number
    },
    paddles: {
        player: Paddle,
        cpu: Paddle
    },
    ball: Ball,
    view: GameView
};


export type GameView = {
    width: number,
    height: number
};


export const orderPlayerPaddleToMoveUp = (game: Pong): Pong => {
    return {
        ...game,
        paddles: {
            ...game.paddles,
            player: orderPaddleToMoveUp(game.paddles.player)
        }
    };    
};


export const orderPlayerPaddleToMoveDown = (game: Pong): Pong => {
    return {
        ...game,
        paddles: {
            ...game.paddles,
            player: orderPaddleToMoveDown(game.paddles.player)
        }
    };    
};


export const orderPlayerPaddleToStop = (game: Pong): Pong => {
    return {
        ...game,
        paddles: {
            ...game.paddles,
            player: orderPaddleToStop(game.paddles.player)
        }
    }
}


export const updatePong = (game: Pong, duration: number): Pong => ({
    ...game,
    paddles: {
        ...game.paddles,
        player: movePaddle(game.paddles.player, game.view, duration)
    },
    ball: moveBall(game.ball, game.view, duration)
});


const PADDLE_SIZE = {
    WIDTH: 10,
    HEIGHT: 50
};
const BALL_RADIUS = 5.0;
const BALL_SPEED = 120.0;
const PADDLE_SPEED = 60.0;

export const createPong = (width: number, height: number): Pong => ({
    score: {
        player: 0,
        cpu: 0
    },
    paddles: {
        player: {
            position: {
                x: 20,
                y: height/2
            },
            velocity: {
                x: 0.0,
                y: 0.0
            },
            speed: PADDLE_SPEED,
            size: {
                width: PADDLE_SIZE.WIDTH,
                height: PADDLE_SIZE.HEIGHT
            }
        },
        cpu: {
            position: {
                x: width - 20,
                y: height/2
            },
            velocity: {
                x: 0.0,
                y: 0.0
            },
            speed: PADDLE_SPEED,
            size: {
                width: PADDLE_SIZE.WIDTH,
                height: PADDLE_SIZE.HEIGHT
            }
        }
    },
    ball: orderBallToMoveInRandomNotVerticalDirection({
        position: {
            x: width/2,
            y: height/2,
        },
        velocity: {
            x: 0,
            y: 0
        },
        radius: BALL_RADIUS,
        speed: BALL_SPEED
    }, Math.random),
    view: {
        width,
        height
    }
});
