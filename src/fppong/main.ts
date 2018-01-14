
import {Observable, Scheduler} from 'rxjs';

import {createPong} from './pong';
import {renderPong} from './render';


export const run = function() {
    console.log('Running FP Pong.');
    const pong = createPong(800, 600);
    const canvas = (document.getElementById('canvas') as HTMLCanvasElement);
    
    const game$ = Observable.of(pong);
    const render$ = Observable.of(0, Scheduler.animationFrame).repeat();
    render$.withLatestFrom(game$).subscribe(([delta, game])=> renderPong(game, canvas));
};
