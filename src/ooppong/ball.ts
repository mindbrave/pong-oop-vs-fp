
import {Vec2} from './math';


export class Ball {
    public position: Vec2;
    public radius: number;
    
    constructor(position: Vec2, radius: number) {
        this.position = position;
        this.radius = radius;
    }
}
