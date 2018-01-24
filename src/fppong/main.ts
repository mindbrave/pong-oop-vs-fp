
import {Observable, Scheduler} from 'rxjs';
import {partialRight} from 'ramda';

import {
    Pong, createPong, updatePong, orderPlayerPaddleToMoveUp, orderPlayerPaddleToMoveDown,
    orderPlayerPaddleToStop
} from './pong';
import {renderPong} from './render';


export const run = function() {
    console.log('Running FP Pong.');
    
    const pong = createPong(800, 600);
    const canvas = (document.getElementById('canvas') as HTMLCanvasElement);
    
    const keyDownW$ = Observable.fromEvent(window, 'keydown')
        .filter((ev: KeyboardEvent): boolean => ev.key === 'w');
    const keyDownS$ = Observable.fromEvent(window, 'keydown')
        .filter((ev: KeyboardEvent): boolean => ev.key === 's');
    const keyUpWS$ = Observable.fromEvent(window, 'keyup')
        .filter((ev: KeyboardEvent): boolean => ev.key === 'w' || ev.key === 's');
    
    const TICKS_PER_SECOND = 50.0;
    const tickDurationMs = 1000.0/TICKS_PER_SECOND;
    const ticks$ = Observable.interval(tickDurationMs).timeInterval().pluck('interval');
    
    const commands$ = Observable.merge(
        ticks$.map((delta: number) => partialRight(updatePong, [delta / 1000.0])),
        keyDownW$.mapTo(orderPlayerPaddleToMoveUp),
        keyDownS$.mapTo(orderPlayerPaddleToMoveDown),
        keyUpWS$.mapTo(orderPlayerPaddleToStop)
    );
    const game$ = commands$.scan((game, command): Pong => command(game), pong);
    
    const render$ = Observable.of(0, Scheduler.animationFrame).repeat();
    render$.withLatestFrom(game$).subscribe(([delta, game]: [number, Pong])=> renderPong(game, canvas));
};
