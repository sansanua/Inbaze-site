import React from 'react';
import cx from 'classnames';
import Markdown from 'react-markdown';

import style from './About.module.scss';

export default function AboutComponent({ header, text }) {
    return (
        <div className={cx(style.base)}>
            <div className={cx(style.container)}>
                <div className={cx(style.header)}>
                    <div className={cx(style.headerTitle)}>{header}</div>
                </div>

                <div className={cx(style.text)}>
                    <Markdown linkTarget="_target">{text}</Markdown>
                </div>
            </div>
        </div>
    );
}
