
import {defineSupportCode, setWorldConstructor} from 'cucumber';
import {expect} from 'chai';

import {createPong, orderPlayerPaddleToMoveUp, orderPlayerPaddleToMoveDown, orderPlayerPaddleToStop} from '../../pong';
import {withViewHeight, withPlayerPaddle, simulateGameForDuration} from '../gameFixture';
import {isAtPosition, hasSpeed, isMovingUp} from '../paddleFixture';


setWorldConstructor(function() {
    this.game = createPong(800, 600);
});


defineSupportCode(function({Given, When, Then}) {
    
    Given(/^player just started a game$/, function() {
        this.game = createPong(800, 600);
    });
    
    Given(/^game view height is (.*)$/, function(gameViewHeight: string) {
        this.game = withViewHeight(this.game, parseFloat(gameViewHeight));
    });
    
    Given(/^player paddle is at position (.*), (.*)$/, function(x: string, y: string) {
        this.game = withPlayerPaddle(this.game, isAtPosition(this.game.paddles.player, parseFloat(x), parseFloat(y)));
    });
    
    Given(/^player paddle has speed (.*)\/second$/, function(speed: string) {
        this.game = withPlayerPaddle(this.game, hasSpeed(this.game.paddles.player, parseFloat(speed)));
    });
    
    Given(/^player paddle is moving up$/, function() {
        this.game = withPlayerPaddle(this.game, isMovingUp(this.game.paddles.player));
    });
    
    When(/^player moves paddle up for (.*) second$/, function(duration: string) {
        this.game = orderPlayerPaddleToMoveUp(this.game);
        this.game = simulateGameForDuration(this.game, parseFloat(duration));
    });
    
    When(/^player moves paddle down for (.*) second$/, function(duration: string) {
        this.game = orderPlayerPaddleToMoveDown(this.game);
        this.game = simulateGameForDuration(this.game, parseFloat(duration));
    });
    
    When(/^player stops moving paddle$/, function() {
        this.game = orderPlayerPaddleToStop(this.game);
    });
    
    Then(/^two paddles are located near edges of both sides \(left and right\) of game view, in the middle of view height$/, function() {
        const playerPosition = this.game.paddles.player.position;
        expect(playerPosition.x).to.be.below(this.game.view.width/2, 'expect player paddle to be on right side');
        expect(playerPosition.y).to.equal(this.game.view.height/2, 'expect player paddle to be in the middle height');
        const cpuPosition = this.game.paddles.cpu.position;
        expect(cpuPosition.x).to.be.above(this.game.view.width/2, 'expect cpu paddle to be on left side');
        expect(cpuPosition.y).to.equal(this.game.view.height/2, 'expect cpu paddle to be in the middle height');
    });
    
    Then(/^there is a ball located in the center of game view$/, function() {
        expect(this.game.ball.position.x).to.equal(this.game.view.width/2, 'expect ball x in the middle of view');
        expect(this.game.ball.position.y).to.equal(this.game.view.height/2, 'expect ball y in the middle of view');
    });

    Then(/^game score is (.*):(.*)$/, function(playerScore: string, cpuScore: string) {
        expect(this.game.score.player).to.equal(parseInt(playerScore), 'expect player score to be 0');
        expect(this.game.score.cpu).to.equal(parseInt(cpuScore), 'expect cpu score to be 0');
    });
    
    Then(/^player paddle is at vertical position (.*)$/, function(y: string) {
        expect(this.game.paddles.player.position.y).to.approximately(parseFloat(y), 0.0001, 'expect player paddle y to be');
    });
    
    Then(/^player paddle stopped moving$/, function() {
        expect(this.game.paddles.player.velocity.x).to.equal(0.0, 'expect player paddle velocity x to be');
        expect(this.game.paddles.player.velocity.y).to.equal(0.0, 'expect player paddle velocity y to be');
    });
});



