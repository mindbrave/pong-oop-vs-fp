
import {expect} from 'chai';

import {PaddleFixture} from './paddleFixture';


describe('Paddle movement', () => {
    test('paddle can be ordered to move up', () => {
        // given
        const paddle = new PaddleFixture().hasSpeed(10.0).create();
        
        //when
        paddle.orderToMoveUp();
        
        // then
        expect(paddle.velocity.y).to.equal(10.0, 'expect paddle y velocity to be');
    });
    
    test('paddle can be ordered to move down', () => {
        // given
        const paddle = new PaddleFixture().hasSpeed(10.0).create();
        
        //when
        paddle.orderToMoveDown();
        
        // then
        expect(paddle.velocity.y).to.equal(-10.0, 'expect paddle y velocity to be');
    });
    
    test('paddle can be ordered to stop', () => {
        // given
        const paddle = new PaddleFixture().hasVelocity(10.0, 0.0).create();
        
        //when
        paddle.orderToStop();
        
        // then
        expect(paddle.velocity.x).to.equal(0.0, 'expect paddle x velocity to be');
        expect(paddle.velocity.y).to.equal(0.0, 'expect paddle y velocity to be');
    });
    
    test('paddle can move', () => {
        // given
        const gameView = {
            width: 100,
            height: 100
        };
        const duration = 2.0;
        const paddle = new PaddleFixture().withSize(2, 10).isAtPosition(50, 50).hasVelocity(0, 5.0).create();
        
        //when
        paddle.move(duration, gameView);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y).to.equal(60.0, 'expect paddle position y to be');
    });
    
    test('collision with top edge', () => {
        // given
        const gameView = {
            width: 100,
            height: 100
        };
        const duration = 1.0;
        const paddle = new PaddleFixture()
            .withSize(2, 10)
            .isAtPosition(50, 89)
            .hasVelocity(0, 10.0)
            .create();
        
        //when
        paddle.move(duration, gameView);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y)
            .to.equal(gameView.height - paddle.size.height/2.0, 'expect paddle position y to be');
    });
    
    test('collision with top edge on high speed', () => {
        // given
        const gameView = {
            width: 100,
            height: 100
        };
        const duration = 1.0;
        const paddle = new PaddleFixture()
            .withSize(2, 10)
            .isAtPosition(50, 90)
            .hasVelocity(0, 100.0)
            .create();
        
        //when
        paddle.move(duration, gameView);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y)
            .to.equal(gameView.height - paddle.size.height/2.0, 'expect paddle position y to be');
    });
    
    test('collision with bottom edge', () => {
        // given
        const gameView = {
            width: 100,
            height: 100
        };
        const duration = 1.0;
        const paddle = new PaddleFixture()
            .withSize(2, 10)
            .isAtPosition(50, 13)
            .hasVelocity(0, -10.0)
            .create();
        
        //when
        paddle.move(duration, gameView);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y)
            .to.equal(paddle.size.height/2.0, 'expect paddle position y to be');
    });
    
    test('collision with bottom edge on high speed', () => {
        // given
        const gameView = {
            width: 100,
            height: 100
        };
        const duration = 1.0;
        const paddle = new PaddleFixture()
            .withSize(2, 10)
            .isAtPosition(50, 30)
            .hasVelocity(0, -100.0)
            .create();
        
        //when
        paddle.move(duration, gameView);

        // then
        expect(paddle.position.x).to.equal(50.0, 'expect paddle position x to be');
        expect(paddle.position.y)
            .to.equal(paddle.size.height/2.0, 'expect paddle position y to be');
    });
});
