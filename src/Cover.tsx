import { ReactNode, useEffect, useRef, useState } from 'react';

import './Cover.scss';
import { clamp } from './utils/math/clamp';
import { easeOutCubic } from './utils/math/ease-out-cubic';

const createScrollProjection =
    ({ limitRatio = 0.4 }: { limitRatio?: number }) =>
    (rect?: DOMRect) => {
        if (!rect) return 0;
        const { top, height } = rect;

        const relativeOffset = easeOutCubic(clamp(-top / height, [0, 1]));

        return Math.ceil(relativeOffset * height * limitRatio);
    };

const createScrollActivation =
    ({ thresholdRatio }: { thresholdRatio: number }) =>
    (rect?: DOMRect): boolean => {
        if (!rect) return false;
        return Math.abs(rect.top) / rect.height >= thresholdRatio;
    };

function Cover({ children }: { children: ReactNode }) {
    const [height, setHeight] = useState(0);
    const [rect, setRect] = useState<DOMRect>();

    const sectionRef = useRef<HTMLElement | null>(null);

    const projectScrollBackground = createScrollProjection({ limitRatio: 0.2 });
    const activateBox = createScrollActivation({ thresholdRatio: 0.05 });
    const resizeObserverRef = useRef(
        new ResizeObserver(([{ contentRect }]) =>
            setHeight(contentRect.height),
        ),
    );

    useEffect(() => {
        const header = sectionRef.current!;
        const resizeObserver = resizeObserverRef.current!;
        setHeight(header.getBoundingClientRect().height);
        resizeObserver.observe(header);
        return () => resizeObserver.unobserve(header);
    }, []);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(
            ([{ boundingClientRect }]) => setRect(boundingClientRect),
            { threshold: Array.from(Array(1000).keys()).map((i) => i / 1000) },
        );
        intersectionObserver.observe(sectionRef.current!);

        return () => intersectionObserver.disconnect();
    }, [height]);

    return (
        <section
            className="Cover"
            ref={sectionRef}
            style={{
                backgroundPositionY: `${-projectScrollBackground(rect)}px`,
            }}
        >
            <div className="title">
                <h1>
                    We can use your hard earned know-how in coherence with
                    Artificial Intelligence.
                </h1>
                <p>Don’t worry we think about data privacy as well.</p>
            </div>
            <div
                className={activateBox(rect) ? 'content' : 'content activated'}
            >
                {children}
            </div>
            <div
                className={'next-action' + (activateBox(rect) ? ' hidden' : '')}
            >
                <div className="text">See if we are a match"</div>
                <div className="arrow">&#x2193;</div>
            </div>
        </section>
    );
}

export default Cover;
