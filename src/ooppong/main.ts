
import {Pong} from './pong';
import {renderPong} from './render'


export class Game {
    public run() {
        console.log('Running OOP Pong.');
        const TICKS_PER_SECOND = 50.0;
        const pong = new Pong(800, 600);
        const canvas = (document.getElementById('canvas') as HTMLCanvasElement);

        this.setupInputs(pong);
        this.startGameLoop(pong, TICKS_PER_SECOND);
        this.startRendering(pong, canvas);
    }
    
    private setupInputs(pong: Pong) {
        window.addEventListener('keydown', (ev: KeyboardEvent) => {
            if (ev.key === 'w') {
                pong.orderPlayerPaddleToMoveUp();
            }
            if (ev.key === 's') {
                pong.orderPlayerPaddleToMoveDown();
            }
        });
        window.addEventListener('keyup', (ev: KeyboardEvent) => {
            if (ev.key === 'w' || ev.key === 's') {
                pong.orderPlayerPaddleToStop();
            }
        });
    } 
    
    private startGameLoop(pong: Pong, ticksPerSecond: number) {
        let lastTickTime = Date.now();
        const nextTick = () => {
            const deltaMs = Date.now() - lastTickTime;
            lastTickTime = Date.now();
            pong.update(deltaMs/1000.0);
        };
        setInterval(nextTick, 1.0/ticksPerSecond);
    }
    
    private startRendering(pong: Pong, canvas: HTMLCanvasElement) {
        const requestNextAnimationFrame = () => {
            renderPong(pong, canvas);
            window.requestAnimationFrame(requestNextAnimationFrame);
        };
        requestNextAnimationFrame();
    }
}
