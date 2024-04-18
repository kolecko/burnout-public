import {Interval} from './model/interval';

export const clamp = (value: number, [min, max]: Interval) => Math.max(min, Math.min(max, value));