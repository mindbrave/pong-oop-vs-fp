
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
    
}
type Position = {
    x: number,
    y: number
}

type Ball = Position
type Paddle = Position


export const createPong = (width: number, height: number): Pong => ({
    score: {
        player: 0,
        cpu: 0
    },
    paddles: {
        player: {
            x: 20,
            y: height/2
        },
        cpu: {
            x: width - 20,
            y: height/2
        }
    },
    ball: {
        x: width/2,
        y: height/2
    },
    view: {
        width,
        height
    }
})
