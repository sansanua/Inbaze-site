import React from 'react';

import style from './CloseButton.module.scss';

export default function CloseButton({ onClick }) {
    return <div class={style.close} onClick={onClick}></div>;
}
