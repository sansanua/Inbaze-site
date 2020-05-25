import React, { useState } from 'react';
import cx from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { INSTRUMENTS } from 'api/queries/instruments';

import Button from '../../components/Button';
import InstrumentCard from './components/InstrumentCard';

import style from './Main.module.scss';
import SubscribeModal from '../../containers/Modals/SubscribeModal/SubscribeModal';
import Modal from '../../containers/Modals/Modal';

export default function Main() {
    const { data } = useQuery(INSTRUMENTS);
    const instruments = (data && data.instruments) || null;

    const [open, setOpen] = useState(false);
    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleOpenModal = () => {
        setOpen(true);
    };

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.imageContainer)}>
                <div className={cx(style.container)}>
                    <div className={cx(style.imageContent)}>
                        <div className={cx(style.title)}>Поиск и сравнение инвестиционных предложений</div>
                        <div className={cx(style.subtitle)}>
                            Выберите способ инвестирования, который подходит именно Вам
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

                    {instruments && (
                        <div className={cx(style.items)}>
                            {instruments.map((instrument) => (
                                <InstrumentCard
                                    {...instrument}
                                    className={cx(style.item)}
                                    onOpenSubscribeModal={handleOpenModal}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Modal open={open} handleCloseModal={handleCloseModal}>
                <SubscribeModal />
            </Modal>
        </div>
    );
}
