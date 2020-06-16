import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import cx from 'classnames';
// import { NavLink } from 'react-router-dom';

import { CREATE_SUBSCRIBE_NEWS_USER } from 'api/mutations/subscribeNewsUsers';

import Button from 'components/Button/Button';
import Input from 'components/Input';

import style from './Footer.module.scss';

const socialLinks = [
    {
        name: 'instagram',
        logo: '/images/logos/instagram.svg',
        link: 'https://www.instagram.com/',
    },
    {
        name: 'facebook',
        logo: '/images/logos/facebook.svg',
        link: 'https://www.facebook.com/',
    },
    {
        name: 'telegram',
        logo: '/images/logos/telegram.svg',
        link: 'https://telegram.org/',
    },
];

export default function Footer() {
    const [email, setEmail] = useState('');

    const [createSubscribeNewsUser] = useMutation(CREATE_SUBSCRIBE_NEWS_USER);

    const handleClick = () => {
        createSubscribeNewsUser({ variables: { email } });
    };

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.container)}>
                <div className={cx(style.navigation)}>
                    <div className={style.leftPart}>
                        <div className={cx(style.logo)} />

                        <div className={cx(style.items)}>
                            <a href="/termsAndConditions" className={cx(style.item)}>
                                Условия использования
                            </a>
                        </div>

                        <div className={cx(style.contacts)}>
                            <div className={cx(style.contactsSocial)}>
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
                            <div className={cx(style.contactsEmail)}>
                                <div className={cx(style.email)}>info@inbaze.com</div>
                            </div>
                        </div>
                    </div>

                    <div className={cx(style.navigationRightPart)}>
                        <div className={cx(style.text)}>
                            <div className={cx(style.title)}>Вас интересуют инвестиции ?</div>
                            <div className={cx(style.subtitle)}>
                                Оставьте свой email и мы будем отправлять подборки материалов о том, как правильно
                                копить и вкладывать
                            </div>
                        </div>
                        <div className={cx(style.inputContainer)}>
                            <Input
                                placeholder="E-mail"
                                className={cx(style.input)}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <div className={cx(style.buttonWrapper)}>
                                <Button className={cx(style.button)} type="lightBlueBlue" onClick={handleClick}>
                                    Подписаться
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
