
import {GameView} from '../pong';
import {Paddle, PaddleSize} from '../paddle';
import {Vec2} from '../math';


export class PaddleFixture {
    private position: Vec2;
    private velocity: Vec2;
    private speed: number;
    private size: PaddleSize;
    
    constructor() {
        this.position = new Vec2(0, 0);
        this.velocity = new Vec2(0, 0);
        this.speed = 1;
        this.size = {
            width: 10,
            height: 50
        };
    }
    
    withSize(width: number, height: number): PaddleFixture {
        this.size = {width, height};
        return this;
    }
    
    isAtPosition(x: number, y: number): PaddleFixture {
        this.position = new Vec2(x, y);
        return this;
    }
    
    hasVelocity(x: number, y: number): PaddleFixture {
        this.velocity = new Vec2(x, y);
        return this;
    }
    
    hasSpeed(speed: number): PaddleFixture {
        this.speed = speed;
        this.velocity = this.velocity.normalize().scale(speed);
        return this;
    }
    
    isMovingUp(): PaddleFixture {
        this.velocity = new Vec2(0, this.speed);
        return this;
    }
    
    isJustBeneathTopEdge(gameView: GameView): PaddleFixture {
        this.position = new Vec2(this.position.x, gameView.height - this.size.height/2.0 - 3);
        return this;
    }
    
    isJustOverTopEdge(gameView: GameView): PaddleFixture {
        this.position = new Vec2(this.position.x, this.size.height/2.0 + 3);
        return this;
    }
    
    create(): Paddle {
        return new Paddle(this.position, this.velocity, this.speed, this.size);
    }
}