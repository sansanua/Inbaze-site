import React from 'react';
import cx from 'classnames';

import style from './Button.module.scss';

export default function Button({ children, className, type = 'lightBlueTransparent' }) {
    return (
        <button className={cx(className, style.animation, style[type])}>
            <span>{children}</span>
        </button>
    );
}
