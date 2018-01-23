
import {Vec2} from './math';
import {GameView} from './pong';


export class Paddle {
    public speed: number;
    public position: Vec2;
    public velocity: Vec2;
    public size: PaddleSize;
    
    constructor(position: Vec2, velocity: Vec2, speed: number, size: PaddleSize) {
        this.position = position;
        this.velocity = velocity;
        this.speed = speed;
        this.size = size;
    }
    
    orderToMoveUp() {
        this.velocity = new Vec2(0, this.speed);
    }
    
    orderToMoveDown() {
        this.velocity = new Vec2(0, -this.speed);
    }
    
    orderToStop() {
        this.velocity = new Vec2(0, 0);
    }
    
    move(duration: number, gameView: GameView) {
        const nextPosition = this.position.add(this.velocity.scale(duration));
        if (nextPosition.y + this.size.height/2.0 > gameView.height) {
            this.position = new Vec2(this.position.x, gameView.height - this.size.height/2.0);
            return;
        }
        if (nextPosition.y - this.size.height/2.0 < 0.0) {
            this.position = new Vec2(this.position.x, this.size.height/2.0);
            return;
        }
        this.position =  nextPosition;
    }
}


export type PaddleSize = {
    width: number,
    height: number
};
