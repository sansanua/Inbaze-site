import React, { Component } from 'react';
import cx from 'classnames';

import Button from '../../components/Button';
import InstrumentCard from './components/InstrumentCard';

import style from './Main.module.scss';

const items = [
    {
        name: 'ОВГЗ',
        description: `Облигация внутреннего государственного займа`,
        color: '#dce3ff',
        image: '/images/papka-01.svg',
        link: '/companies?ovgz',
    },
    {
        name: 'ПИФ',
        description: 'Паевой инвестиционныйфонд',
        color: '#dce3ff',
        image: '/images/diagrama-01.svg',
        link: '/companies?',
    },
    {
        name: 'НПФ',
        description: 'Негосударственный пенсионный фонд',
        color: '#dce3ff',
        image: '/images/schety-01.svg',
        link: '/companies?',
    },
    {
        name: 'Депозит',
        description: 'Банковские вклады',
        color: '#b2eaea',
        image: '/images/bank-01.svg',
        link: '/companies?',
    },
    {
        name: 'Р2Р-кредитование',
        description: `Кредитование частных и юридических лиц`,
        color: '#b2eaea',
        image: '/images/money-01.svg',
        link: '/companies?',
    },
    {
        name: 'Доверительное управление',
        description: 'Паевой инвестиционный фонд',
        color: '#dce3ff',
        image: '/images/handshake-02.svg',
        link: '/companies?',
    },
    {
        name: 'Недвижимость',
        description: 'Акции публичных компаний',
        color: '#e8e8e8',
        image: '/images/property-01.svg',
        link: '/companies?',
    },
    {
        name: 'Бизнес',
        description: 'Акции публичных компаний',
        color: '#e8e8e8',
        image: '/images/papka-01.svg',
        link: '/companies?',
    },
];

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
