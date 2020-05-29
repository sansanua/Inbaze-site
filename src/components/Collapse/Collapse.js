/* eslint react/jsx-no-bind: 0 */

import React, { memo, useState, useEffect } from 'react';
import cx from 'classnames';

import style from './Collapse.module.scss';

const Collapse = ({
    expanded = false,
    key,
    header,
    content,
    className,
    classNameHeader,
    classNameContent,
    onToggle,
}) => {
    const [isExpanded, setIsExpander] = useState(expanded);

    useEffect(() => {
        setIsExpander(expanded);
    }, [expanded]);

    const toggleExpander = (value) => {
        if (onToggle) {
            onToggle(value);
            return;
        }

        setIsExpander(value);
    };

    return (
        <div className={cx(className, style.base)} key={key}>
            <div className={cx(classNameHeader, style.headerContainer)} onClick={() => toggleExpander(!isExpanded)}>
                <div className={cx(style.header)}>{header}</div>

                <div className={cx(style.chevron)}>
                    <div className={cx(style.icon, { [style.up]: isExpanded })} />
                </div>
            </div>

            <div className={cx(classNameContent, style.content)}>
                <div className={cx(style.expanderContent)} style={{ height: isExpanded ? 'inherit' : 0 }}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default memo(Collapse);
