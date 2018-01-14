
import {Pong} from './pong';
import {renderPong} from './render'


export class Game {
    public run() {
        console.log('Running OOP Pong.');
        const pong = new Pong(800, 600);
        const canvas = (document.getElementById('canvas') as HTMLCanvasElement);
        this.startRendering(pong, canvas);
    }
    
    private startRendering(pong: Pong, canvas: HTMLCanvasElement) {
        const requestNextAnimationFrame = () => {
            renderPong(pong, canvas);
            window.requestAnimationFrame(requestNextAnimationFrame);
        };
        requestNextAnimationFrame();
    }
}
