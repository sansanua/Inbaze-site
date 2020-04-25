import React, { Component } from 'react';
import cx from 'classnames';

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
                            <div>button</div>
                        </div>
                    </div>
                </div>

                <div className={cx(style.container)}></div>
            </div>
        );
    }
}
