
import {defineSupportCode} from 'cucumber';
import {expect} from 'chai';

import {Pong, createPong} from '../pong';


defineSupportCode(function({Given, When, Then}) {
    let game: Pong;
    
    Given(/^game just started$/, function() {
        game = createPong(800, 600);
    });
    
    Then(/^two paddles are located at both sides \(left and right\) of game view, in the middle of view height$/, function() {
        const playerPosition = game.paddles.player.position;
        expect(playerPosition.x).to.be.below(game.view.width/2, 'expect player paddle to be on right side');
        expect(playerPosition.y).to.equal(game.view.height/2, 'expect player paddle to be in the middle height');
        const cpuPosition = game.paddles.cpu.position;
        expect(cpuPosition.x).to.be.above(game.view.width/2, 'expect cpu paddle to be on left side');
        expect(cpuPosition.y).to.equal(game.view.height/2, 'expect cpu paddle to be in the middle height');
    });
    
    Then(/^there is a ball located in the center of game view$/, function() {
        expect(game.ball.position.x).to.equal(game.view.width/2, 'expect ball x in the middle of view');
        expect(game.ball.position.y).to.equal(game.view.height/2, 'expect ball y in the middle of view');
    });

    Then(/^game score is (.*):(.*)$/, function(playerScore: string, cpuScore: string) {
        expect(game.score.player).to.equal(parseInt(playerScore), 'expect player score to be 0');
        expect(game.score.cpu).to.equal(parseInt(cpuScore), 'expect cpu score to be 0');
    });
    
});
