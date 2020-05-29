import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import cx from 'classnames';

import { CREATE_REQUEST_USER } from 'api/mutations/requestUsers';
import Button from 'components/Button/Button';
import Input from 'components/Input';
import CloseButton from 'components/CloseButton';

import style from './RequestModal.module.scss';

const RequestModal = ({ companyName, onCloseModal }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [createRequestUser] = useMutation(CREATE_REQUEST_USER);

    const handleClick = () => {
        createRequestUser({ variables: { email, name, companyName } }).then(() => {
            onCloseModal();
        });
    };

    return (
        <div className={cx(style.base)}>
            <CloseButton onClick={onCloseModal}></CloseButton>

            <div className={style.text}>Оставить заявку</div>

            <Input label="Имя" className={cx(style.input)} value={name} onChange={(e) => setName(e.target.value)} />
            <Input label="Email" className={cx(style.input)} value={email} onChange={(e) => setEmail(e.target.value)} />

            <Button className={cx(style.button)} type="lightBlueBlue" onClick={handleClick}>
                Оставить заявку
            </Button>
        </div>
    );
};

export default RequestModal;
