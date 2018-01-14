
import {Pong, Paddle} from './pong';


export const renderPong = (game: Pong, canvas: HTMLCanvasElement) => {
    const context = canvas.getContext('2d');
    // clear view
    context.clearRect(0, 0, game.view.width, game.view.height);
    // draw background
    context.fillStyle = 'black';
    context.fillRect(0, 0, game.view.width, game.view.height);
    // draw middle line
    context.strokeStyle = 'white';
    context.beginPath();
    context.moveTo(game.view.width/2, 0);
    context.lineTo(game.view.width/2, game.view.height);
    context.stroke();
    // draw ball
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(game.ball.position.x, game.ball.position.y, game.ball.radius, 0, Math.PI*2);
    context.fill();
    // draw player paddle
    drawPaddle(game.paddles.player, context);
    // draw cpu paddle
    drawPaddle(game.paddles.cpu, context);
    // draw score
    context.font = '80px Arial';
    context.fillText(game.score.player.toString(), game.view.width/2.0 - 55, 80);
    context.fillText(game.score.cpu.toString(), game.view.width/2.0 + 10, 80);
};

const drawPaddle = (paddle: Paddle, context: CanvasRenderingContext2D) => {
    context.fillStyle = 'white';
    context.rect(
        paddle.position.x - paddle.width/2.0,
        paddle.position.y - paddle.height/2.0,
        paddle.width,
        paddle.height
    );
    context.fill();
};
