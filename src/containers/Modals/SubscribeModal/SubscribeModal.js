import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import cx from 'classnames';

import { CREATE_SUBSCRIBE_USER } from '../../../api/mutations/subscribeUsers';
import Button from '../../../components/Button/Button';
import style from './SubscribeModal.module.scss';
import Input from '../../../components/Input';


const SubscribeModal = ({ onCloseModal }) => {
    const [email, setEmail] = useState('');

    const [createSubscribeUser] = useMutation(CREATE_SUBSCRIBE_USER);

    const handleClick = () => {
        createSubscribeUser({ variables: { email } }).then(() => {
            onCloseModal();
        });
    };

    return (
        <div className={cx(style.base)}>

            <div className={style.text}>
                Мы еще не добавляли эти инструменты на нашу платформу. Но если вы хотите знать, когда они появтся - оставьте свой email и мы вас обязательно оповестим
            </div>

            <Input
                label="Email"
                className={cx(style.input)}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button
                className={cx(style.button)}
                type="lightBlueBlue"
                onClick={handleClick}
            >
                Оставить заявку
            </Button>
        </div>
    );
};

export default SubscribeModal;
