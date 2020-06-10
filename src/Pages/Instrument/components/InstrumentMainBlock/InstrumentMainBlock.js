import React from 'react';
import cx from 'classnames';
import Markdown from 'react-markdown';

import style from './InstrumentMainBlock.module.scss';

const structure = [
    {
        header: () => 'Описание:',
        dataProp: 'description',
    },
    {
        header: () => `Основные параметры инструмента:`,
        dataProp: 'mainParameters',
    },
    {
        header: () => `Как данный инструмент приносит доход:`,
        dataProp: 'howGenerateIncome',
    },
    {
        header: (name) => `Плюсы инвестиций в ${name.toLowerCase()}:`,
        dataProp: 'plusInvestment',
    },
    {
        header: (name) => `Минусы инвестиций в ${name.toLowerCase()}:`,
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
                        <div className={cx(style.text)}>
                            <Markdown
                                className="markdown"
                                source={String(props[block.dataProp])}
                                linkTarget="_target"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
