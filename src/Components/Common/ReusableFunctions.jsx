import React, { memo } from 'react';

export const Title = memo(({title}) => {
    return (
        <div className="section_title_out">
            <div className="section_title">{title}</div>
        </div>
    );
});
