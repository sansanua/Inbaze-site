import 'react-tabs/style/react-tabs.css';

import React from 'react';
import cx from 'classnames';

import style from './InstrumentMainBlock.module.scss';

const structure = [
    {
        header: () => 'Описание инструмента',
        dataProp: 'description',
    },
    {
        header: (name) => `Основные параметры ${name}`,
        dataProp: 'mainParameters',
    },
    {
        header: (name) => `Как ${name} приносит доход`,
        dataProp: 'howGenerateIncome',
    },
    {
        header: () => `Плюсы инвестиций в облигации`,
        dataProp: 'plusInvestment',
    },
    {
        header: () => `Минусы инвестиций в облигации`,
        dataProp: 'minusInvestment',
    },
];

export default function InstrumentMainBlock(props) {
    return (
        <div className={cx(style.base)}>
            <div className={cx(style.blocks)}>
                {structure.map((block) => (
                    <div className={cx(style.block)}>
                        <div className={cx(style.header)}>{block.header(props.name)}</div>
                        <div className={cx(style.text)}>{props[block.dataProp]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
