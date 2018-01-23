
import {Pong, GameView} from '../pong';
import {PaddleFixture} from './paddleFixture';


export class GameFixture {
    public view: GameView;
    public playerPaddle: PaddleFixture;
    
    constructor() {
        this.view = {
            width: 600,
            height: 300
        };
        this.playerPaddle = new PaddleFixture();
    }
    
    withViewHeight(height: number): GameFixture {
        this.view.height = height;
        return this;
    }
    
    create(): Pong {
        const pong = new Pong(this.view.width, this.view.height);
        pong.paddles.player = this.playerPaddle.create();
        return pong;
    }
}
