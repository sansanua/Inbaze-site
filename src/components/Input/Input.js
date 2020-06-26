import React from 'react';
import cx from 'classnames';

import style from './Input.module.scss';

export default function Input({ className, error, placeholder, label, name, value, onChange }) {
    return (
        <div className={cx(className, style.base)}>
            {label && (
                <label htmlFor={name} className={cx(style.label)}>
                    {label}
                </label>
            )}
            <input
                value={value}
                type="input"
                className={cx(style.input, { [style.error]: error })}
                placeholder={placeholder}
                name={name}
                id={name}
                onChange={onChange}
            />
        </div>
    );
}
