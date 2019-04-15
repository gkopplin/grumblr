import React from 'react';
import ScrollIcon from './scroll_icon';
import ScrollIconFilled from './scroll_icon_filled';

export default props => {
    return (
        <>
        {props.currentSplash === props.number ? (
                <ScrollIconFilled />
            ) : (
                <div onClick={props.scroll}>
                    <ScrollIcon id={`${props.number}`} />
                </div>
                )
        }
        </>
    );
};