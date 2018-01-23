
import {range} from 'ramda';

import {Pong, updatePong} from '../pong';
import {Paddle} from '../paddle';


export const withViewHeight = (game: Pong, height: number): Pong => ({
    ...game,
    view: {
        ...game.view,
        height
    }
});


export const withPlayerPaddle = (game: Pong, paddle: Paddle): Pong => ({
    ...game,
    paddles: {
        ...game.paddles,
        player: paddle
    }
});


export const simulateGameForDuration = (game: Pong, duration: number): Pong => {
    const ticksPerSecond = 20.0;
    const tickDuration = 1.0/ticksPerSecond;
    return range(0, duration * ticksPerSecond).reduce((game, _) => updatePong(game, tickDuration), game)
};
