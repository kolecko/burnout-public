import { Children, ReactNode, useLayoutEffect, useRef, useState } from 'react';

import useResizeObserver from '@react-hook/resize-observer';

import './MasonryGrid.scss';

const useSize = (target: { current: HTMLElement }): DOMRect | undefined => {
    const [size, setSize] = useState<DOMRect>();

    useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect());
    }, [target]);

    useResizeObserver(target, (entry) => setSize(entry.contentRect));
    return size;
};

const calculateColumnsCount = (parentWidth: number) => {
    const columnsCountBreakpoint = [
        [0, 1],
        [768, 2],
    ];

    return (
        columnsCountBreakpoint
            .reverse()
            .find(([breakpoint]) => breakpoint <= parentWidth)?.[1] ?? 1
    );
};

function MasonryGrid({ children }: { children: ReactNode }) {
    const target: any = useRef(null);
    const size = useSize(target);

    const cells = Children.toArray(children);

    const [columnsCount, setColumnsCount] = useState<number>();

    const [columns, setColumns] = useState<Array<ReactNode[]>>([]);

    useLayoutEffect(() => {
        const columnsCount = calculateColumnsCount(size?.width ?? 0);

        const tcolumns = cells.reduce((acc, cell, index) => {
            const column = index % (columnsCount ?? 1);
            acc[column] = [...acc[column], cell];
            return acc;
        }, Array(columnsCount).fill([]));

        setColumns(tcolumns);
    }, [size]);

    return (
        <div ref={target} className="MasonryGrid">
            {columns.map((column, index) => (
                <div className="MasonryColumn" key={index}>
                    {column}
                </div>
            ))}
        </div>
    );
}

export default MasonryGrid;
