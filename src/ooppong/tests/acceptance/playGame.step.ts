
import {defineSupportCode, setWorldConstructor} from 'cucumber';
import {expect} from 'chai';

import {Pong} from '../../pong';
import {GameFixture} from '../gameFixture';


setWorldConstructor(function(){
    this.gameFixture = new GameFixture();
});


defineSupportCode(function({Given, When, Then}) {
    
    Given(/^player just started a game$/, function() {
        this.game = new Pong(400.0, 200.0);
    });
    
    Given(/^game view height is (.*)$/, function(gameViewHeight: string) {
        this.gameFixture.withViewHeight(parseFloat(gameViewHeight));
    });
    
    Given(/^player paddle is at position (.*), (.*)$/, function(x: string, y: string) {
        this.gameFixture.playerPaddle.isAtPosition(parseFloat(x), parseFloat(y));
    });
    
    Given(/^player paddle has speed (.*)\/second$/, function(speed: string) {
        this.gameFixture.playerPaddle.hasSpeed(parseFloat(speed));
    });
    
    Given(/^player paddle is moving up$/, function() {
        this.gameFixture.playerPaddle.isMovingUp();
    });
    
    Given(/^player paddle has size width (.*), height (.*)$/, function(width: string, height: string) {
        this.gameFixture.playerPaddle.withSize(parseFloat(width), parseFloat(height));
    });
    
    Given(/^player paddle is just beneath the top edge$/, function() {
        this.gameFixture.playerPaddle.isJustBeneathTopEdge(this.gameFixture.view);
    });
    
    Given(/^player paddle is just over the bottom edge$/, function() {
        this.gameFixture.playerPaddle.isJustOverTopEdge(this.gameFixture.view);
    });
    
    When(/^player moves paddle up for (.*) second$/, function(duration: string) {
        this.game = this.gameFixture.create();
        this.game.orderPlayerPaddleToMoveUp();
        updateGame(this.game, parseFloat(duration));
    });
    
    When(/^player moves paddle down for (.*) second$/, function(duration: string) {
        this.game = this.gameFixture.create();
        this.game.orderPlayerPaddleToMoveDown();
        updateGame(this.game, parseFloat(duration));
    });
    
    When(/^player stops moving paddle$/, function() {
        this.game = this.gameFixture.create();
        this.game.orderPlayerPaddleToStop();
    });
    
    Then(/^two paddles are located near edges of both sides \(left and right\) of game view, in the middle of view height$/, function() {
        const playerPosition = this.game.paddles.player.position;
        expect(playerPosition.x).to.be.below(this.game.view.width/2.0, 'expect player paddle to be on right side');
        expect(playerPosition.y).to.equal(this.game.view.height/2.0, 'expect player paddle to be in the middle height');
        const cpuPosition = this.game.paddles.cpu.position;
        expect(cpuPosition.x).to.be.above(this.game.view.width/2.0, 'expect cpu paddle to be on left side');
        expect(cpuPosition.y).to.equal(this.game.view.height/2.0, 'expect cpu paddle to be in the middle height');
    });
    
    Then(/^there is a ball located in the center of game view$/, function() {
        expect(this.game.ball.position.x).to.equal(this.game.view.width/2.0, 'expect ball x in the middle of view');
        expect(this.game.ball.position.y).to.equal(this.game.view.height/2.0, 'expect ball y in the middle of view');
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
    
    Then(/^player paddle is still at the top edge$/, function() {
        expect(this.game.paddles.player.position.y).to.equal(
            this.game.view.height - this.game.paddles.player.size.height/2.0,
            'expect player paddle position y to be'
        );
    });
    
    Then(/^player paddle is still at the bottom edge$/, function() {
        expect(this.game.paddles.player.position.y).to.equal(
            this.game.paddles.player.size.height/2.0,
            'expect player paddle position y to be'
        );
    });
    
});


const updateGame = function(game: Pong, duration: number) {
    const ticksPerSecond = 30.0;
    const tickDuration = 1.0/ticksPerSecond;
    let leftDuration = duration;
    while (leftDuration >= tickDuration) {
        game.update(tickDuration);
        leftDuration -= tickDuration;
    }
};
