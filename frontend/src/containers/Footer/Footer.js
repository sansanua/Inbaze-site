import React from 'react';
import cx from 'classnames';

import Divider from '../../components/Divider';

import style from './Footer.module.scss';

export default function Footer() {
    return (
        <div className={cx(style.base)}>
            <div className={cx(style.container)}>
                <div className={cx(style.navigation)}>
                    <div className={cx(style.logo)}></div>

                    <div className={cx(style.items)}>
                        <div className={cx(style.item)}>Инструменты</div>
                        <div className={cx(style.item)}>Компании</div>
                        <div className={cx(style.item)}>Персональный советник</div>
                        <div className={cx(style.item)}>О нас</div>
                    </div>

                    <div className={cx(style.navigationLeftPart)}>
                        <div>Есть вопрос?</div>
                    </div>
                </div>

                <Divider></Divider>

                <div className={cx(style.contacts)}>
                    <div className={cx(style.contactsLeft)}>
                        <div className={cx(style.email)}>info@inbaze.com</div>
                        <div className={cx(style.phone)}>+380 93 000 00 00</div>
                    </div>
                    <div className={cx(style.contactsRight)}>
                        <div className={cx(style.subscribe)}>Подписантя</div>
                        <div className={cx(style.socialButtons)}>
                            <div className={cx(style.socialButton)}>1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
