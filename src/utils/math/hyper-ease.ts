export const hyperEase = (t: number): number => {
    let sqr = t * t;
    return sqr / (2.0 * (sqr - t) + 1.0);
};
