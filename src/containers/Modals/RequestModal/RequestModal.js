import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import cx from 'classnames';
import { validate } from 'email-validator';

import { CREATE_REQUEST_USER } from 'api/mutations/requestUsers';
import Button from 'components/Button/Button';
import Input from 'components/Input';
import CloseButton from 'components/CloseButton';

import SuccessScreen from '../components/SuccessScreen';

import style from './RequestModal.module.scss';

const RequestModal = ({ companyName, onCloseModal }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    useEffect(() => {
        /* eslint-disable no-undef */
        fbq('track', 'Lead');
    }, []);

    const [createRequestUser, { data }] = useMutation(CREATE_REQUEST_USER);

    const handleClick = () => {
        let error = false;
        if (!name) {
            setNameError(true);
            error = true;
        }
        if (!phone) {
            setPhoneError(true);
            error = true;
        }
        if (!validate(email)) {
            setEmailError(true);
            error = true;
        }

        if (error) {
            return;
        }

        createRequestUser({ variables: { email, name, companyName, phone } });
    };

    if (data) {
        return (
            <div className={cx(style.base)}>
                <SuccessScreen
                    title="Cпасибо!"
                    subtitle="Представители компании свяжутся с вами в скорем времени."
                ></SuccessScreen>
            </div>
        );
    }

    return (
        <div className={cx(style.base)}>
            <CloseButton onClick={onCloseModal}></CloseButton>

            <div className={style.text}>Оставить заявку</div>

            <Input
                error={nameError}
                label="Имя"
                className={cx(style.input)}
                value={name}
                onChange={(e) => {
                    setNameError(false);
                    setName(e.target.value);
                }}
            />
            <Input
                error={emailError}
                label="Email"
                className={cx(style.input)}
                value={email}
                onChange={(e) => {
                    setEmailError(false);
                    setEmail(e.target.value);
                }}
            />
            <Input
                error={phoneError}
                label="Телефон"
                className={cx(style.input)}
                value={phone}
                onChange={(e) => {
                    setPhoneError(false);
                    setPhone(e.target.value);
                }}
            />

            <Button className={cx(style.button)} type="lightBlueBlue" onClick={handleClick}>
                Оставить заявку
            </Button>
        </div>
    );
};

export default RequestModal;
