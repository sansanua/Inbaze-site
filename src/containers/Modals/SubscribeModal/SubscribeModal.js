import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import cx from 'classnames';

import { CREATE_SUBSCRIBE_USER } from '../../../api/mutations/subscribeUsers';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input';

import SuccessScreen from '../components/SuccessScreen';

import style from './SubscribeModal.module.scss';

const SubscribeModal = ({ onCloseModal }) => {
    const [email, setEmail] = useState('');

    const [createSubscribeUser, { data }] = useMutation(CREATE_SUBSCRIBE_USER);

    const handleClick = () => {
        createSubscribeUser({ variables: { email } });
    };

    if (data) {
        return (
            <div className={cx(style.base)}>
                <SuccessScreen
                    title="Cпасибо за подписку!"
                    subtitle="Мы оповестим вас как только запустим предложения, связанные с данным инструментом."
                ></SuccessScreen>
            </div>
        );
    }

    return (
        <div className={cx(style.base)}>
            <div className={style.text}>
                Мы еще не добавляли эти инструменты на нашу платформу. Но если вы хотите знать, когда они появтся -
                оставьте свой email и мы вас обязательно оповестим
            </div>

            <div className={cx(style.inputContainer)}>
                <Input
                    label="Email"
                    className={cx(style.input)}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Button className={cx(style.button)} type="lightBlueBlue" onClick={handleClick}>
                    Подписаться
                </Button>
            </div>
        </div>
    );
};

export default SubscribeModal;
