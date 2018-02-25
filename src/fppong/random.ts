
import {sum} from 'ramda';


export type Random = () => number;


/**
 * Ranges must not overlap and must be in ascending order.
 * Random generator must return value in range <0.0, 1.0)
 */
export const randomInRanges = (ranges: [[number]], randomGenerator: Random): number => {
    const rangesDiffs = ranges.map((range) => range[1] - range[0]);
    const rangesSum = sum(rangesDiffs);
    const randomFromSum = randomInRange(0, rangesSum, randomGenerator);
    return rangesDiffs.reduce(({left, x}, diff, rangeIndex) => {
        if (x) { return {left, x}}
        if (left >= diff) { return {left: left - diff, x}; }
        return {left, x: ranges[rangeIndex][0] + left};
    }, {left: randomFromSum, x: undefined}).x;
};


/**
 * Random generator must return value in range <0.0, 1.0)
 */
export const randomInRange = (min: number, max: number, randomGenerator: Random): number => {
    return (randomGenerator() * (max - min)) + min;
};