
import {defineSupportCode} from 'cucumber'
import {expect} from 'chai'

import {Pong, createPong} from '../pong'


defineSupportCode(function({Given, When, Then}) {
    let game: Pong
    
    Given(/^game just started$/, function() {
        game = createPong(800, 600)
    })
    
    Then(/^two paddles are located at both sides \(left and right\) of game view, in the middle of view height$/, function() {
        expect(game.paddles.player.x).to.be.below(game.view.width/2)
        expect(game.paddles.player.y).to.equal(game.view.height/2)
        expect(game.paddles.cpu.x).to.be.above(game.view.width/2)
        expect(game.paddles.cpu.y).to.equal(game.view.height/2)
    })
    
    Then(/^there is a ball located in the center of game view$/, function() {
        expect(game.ball.x).to.equal(game.view.width/2)
        expect(game.ball.y).to.equal(game.view.height/2)
    })

    Then(/^game score is (.*):(.*)$/, function(playerScore: string, cpuScore: string) {
        expect(game.score.player).to.equal(parseInt(playerScore))
        expect(game.score.cpu).to.equal(parseInt(cpuScore))
    })
    
})


const thatHasViewSize = (width: number, height: number, pong: Pong): Pong => ({
    ...pong, width, height
})
