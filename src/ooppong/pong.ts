
import {Paddle} from './paddle';
import {Ball} from './ball';
import {Vec2} from './math';


const PADDLE_SPEED = 60;
const BALL_RADIUS = 5;
const PADDLE_SIZE = {
    width: 10,
    height: 50,
};


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
    public view: GameView;
    
    constructor(width: number, height: number) {
        this.score = {
            player: 0,
            cpu: 0
        };
        this.paddles = {
            player: new Paddle(new Vec2(20, height/2), new Vec2(0, 0), PADDLE_SPEED, PADDLE_SIZE),
            cpu: new Paddle(new Vec2(width - 20, height/2), new Vec2(0, 0), PADDLE_SPEED, PADDLE_SIZE)
        };
        this.ball = new Ball(new Vec2(width/2, height/2), BALL_RADIUS);
        this.view = {
            width,
            height
        };
    }
    
    update(duration: number) {
        this.paddles.player.move(duration, this.view);
    }
    
    orderPlayerPaddleToMoveUp() {
        this.paddles.player.orderToMoveUp();
    }
    
    orderPlayerPaddleToMoveDown() {
        this.paddles.player.orderToMoveDown();
    }
    
    orderPlayerPaddleToStop() {
        this.paddles.player.orderToStop();
    }
}


export type GameView = {
    width: number,
    height: number
};
