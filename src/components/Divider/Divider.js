import React from 'react';
import cx from 'classnames';

import style from './Divider.module.scss';

export default function Divider({ color = '#acacac', margin = 40 }) {
    return <div className={cx(style.base)} style={{ backgroundColor: color, margin: `${margin}px 0` }}></div>;
}
