import React from 'react';
import './MasonryGrid.scss';

function MasonryGrid({children}: {children: React.ReactNode}) {
    return <div className="MasonryGrid">{children}</div>
}

export default MasonryGrid;