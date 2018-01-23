
export class Vec2 {
    public x: number;
    public y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    add(vec: Vec2): Vec2 {
        return new Vec2(this.x + vec.x, this.y + vec.y);
    }
    
    scale(factor: number): Vec2 {
        return new Vec2(this.x*factor, this.y*factor);
    }
    
    length(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    
    normalize(): Vec2 {
        return (this.x === 0 && this.y === 0) ? new Vec2(0, 0) : new Vec2(this.x/this.length(), this.y/this.length());
    }
}
