import React from 'react';
import cx from 'classnames';

import style from './Checkbox.module.scss';

export default function Checkbox({ checked, inline }) {
    const content = (
        <div className={cx(style.base, { [style.checked]: checked, [style.inline]: inline })}>
            <div className={cx(style.image)}></div>
        </div>
    );

    if (inline) {
        return <span className={cx(style.inline)}>{content}</span>;
    }

    return content;
}
