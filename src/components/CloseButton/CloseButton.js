import React from 'react';

import style from './CloseButton.module.scss';

export default function CloseButton({ onClick }) {
    return <div className={style.close} onClick={onClick}></div>;
}
