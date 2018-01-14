
const PADDLE_SIZE = {
    WIDTH: 10,
    HEIGHT: 50
};
const BALL_RADIUS = 5;


export class Pong {
    public score: {
        player: number,
        cpu: number
    };
    public paddles: {
        player: Paddle,
        cpu: Paddle
    };
    public ball: Ball;
    public view: {
        width: number,
        height: number
    };
    
    constructor(width: number, height: number) {
        this.score = {
            player: 0,
            cpu: 0
        };
        this.paddles = {
            player: new Paddle(new Position(20, height/2)),
            cpu: new Paddle(new Position(width - 20, height/2))
        };
        this.ball = new Ball(new Position(width/2, height/2));
        this.view = {
            width,
            height
        };
    }
}


class Position {
    public x: number;
    public y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}


export class Paddle {
    public position: Position;
    public width: number;
    public height: number;
    
    constructor(position: Position) {
        this.position = position;
        this.width = PADDLE_SIZE.WIDTH;
        this.height = PADDLE_SIZE.HEIGHT;
    }
}


class Ball {
    public position: Position;
    public radius: number;
    
    constructor(position: Position) {
        this.position = position;
        this.radius = BALL_RADIUS;
    }
}
