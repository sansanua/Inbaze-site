import React from 'react';
import cx from 'classnames';

import Divider from '../../components/Divider';

import style from './Footer.module.scss';
// import { NavLink } from 'react-router-dom';

const socialLinks = [
    {
        name: 'facebook',
        logo: '/images/logos/facebook.svg',
        link: 'https://www.facebook.com/',
    },
    {
        name: 'instagram',
        logo: '/images/logos/instagram.svg',
        link: 'https://www.instagram.com/',
    },
    {
        name: 'telegram',
        logo: '/images/logos/telegram.svg',
        link: 'https://telegram.org/',
    },
];

export default function Footer() {
    return (
        <div className={cx(style.base)}>
            <div className={cx(style.container)}>
                <div className={cx(style.navigation)}>
                    <div className={cx(style.logo)} />

                    <div className={cx(style.items)}>
                        <a href="/companies" className={cx(style.item)}>
                            Инвестиционные предложения
                        </a>
                        <div className={cx(style.item)}>О нас</div>
                    </div>

                    <div className={cx(style.navigationLeftPart)}>
                        <div>Есть вопрос?</div>
                    </div>
                </div>

                <Divider />

                <div className={cx(style.contacts)}>
                    <div className={cx(style.contactsLeft)}>
                        <div className={cx(style.email)}>info@inbaze.com</div>
                        <div className={cx(style.phone)}>+380 93 000 00 00</div>
                    </div>
                    <div className={cx(style.contactsRight)}>
                        <div className={cx(style.subscribe)}>Подписантя</div>
                        <div className={cx(style.socialButtons)}>
                            {socialLinks.map((s) => (
                                <a
                                    className={cx(style.socialButton)}
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={s.logo} alt={s.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
