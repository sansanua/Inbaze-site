import React, { Component } from 'react';
import cx from 'classnames';

import Button from '../../components/Button';
import InstrumentCard from './components/InstrumentCard';

import { instrumentsItems as items } from 'utils/instrumentsStructure';

import style from './Main.module.scss';

export default class Main extends Component {
    render() {
        return (
            <div className={cx(style.base)}>
                <div className={cx(style.imageContainer)}>
                    <div className={cx(style.container)}>
                        <div className={cx(style.imageContent)}>
                            <div className={cx(style.title)}>Поиск и сравнение инвестиционных предложений</div>
                            <div className={cx(style.subtitle)}>
                                Выберете способ инвестирования,который подходит именно Вам
                            </div>
                            <Button className={cx(style.button)} mainColor="#b2eaea" secondColor="#4349ba">
                                Выбрать предложение
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={cx(style.instruments)}>
                    <div className={cx(style.container)}>
                        <div className={cx(style.title)}>Инструменты для инвестирования</div>
                        <div className={cx(style.subtitle)}>
                            Ознакомьтесь с видами инвестиционных инструметови узнайте особенности работы с ними
                        </div>

                        <div className={cx(style.items)}>
                            {items.map((instrument) => (
                                <InstrumentCard {...instrument} className={cx(style.item)}></InstrumentCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
