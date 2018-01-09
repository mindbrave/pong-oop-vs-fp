
export class Pong {
    public score: {
        player: number,
        cpu: number
    }
    public paddles: {
        player: Paddle,
        cpu: Paddle
    }
    public ball: Ball
    public view: {
        width: number,
        height: number
    }
    
    constructor(width: number, height: number) {
        this.score = {
            player: 0,
            cpu: 0
        }
        this.paddles = {
            player: new Paddle(20, height/2),
            cpu: new Paddle(width - 20, height/2)
        }
        
        this.ball = {
            x: width/2,
            y: height/2
        }
        
        this.view = {
            width,
            height
        }
    }
}


class Paddle {
    public x: number
    public y: number
    
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}


class Ball {
    public x: number
    public y: number
    
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

