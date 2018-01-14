
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
    view: {
        width: number,
        height: number
    }
    
};

type Position = {
    x: number,
    y: number
};

type Ball = {
    position: Position,
    radius: number
};

export type Paddle = {
    position: Position,
    width: number,
    height: number
};


const PADDLE_SIZE = {
    WIDTH: 10,
    HEIGHT: 50
};
const BALL_RADIUS = 5;

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
            width: PADDLE_SIZE.WIDTH,
            height: PADDLE_SIZE.HEIGHT
        },
        cpu: {
            position: {
                x: width - 20,
                y: height/2
            },
            width: PADDLE_SIZE.WIDTH,
            height: PADDLE_SIZE.HEIGHT
        }
    },
    ball: {
        position: {
            x: width/2,
            y: height/2,
        },
        radius: BALL_RADIUS,
    },
    view: {
        width,
        height
    }
});
