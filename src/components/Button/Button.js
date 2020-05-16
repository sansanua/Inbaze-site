import React from 'react';
import cx from 'classnames';

import style from './Button.module.scss';

export default function Button({ children, className, type = 'lightBlueTransparent', onClick = null}) {
    return (
        <button className={cx(className, style.base, style[type])} onClick={onClick}>
            <span>{children}</span>
        </button>
    );
}
