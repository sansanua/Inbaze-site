import React, { useState } from 'react';
import cx from 'classnames';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import useMetaTags from 'react-metatags-hook';

import { INSTRUMENTS } from 'api/queries/instruments';

import Button from 'components/Button';
import SubscribeModal from 'containers/Modals/SubscribeModal/SubscribeModal';
import Modal from 'containers/Modals/Modal';

import InstrumentCard from './components/InstrumentCard';
import AdditionalBlok from './components/AdditionalBlok';

import style from './Main.module.scss';

export default function Main() {
    useMetaTags({
        title: 'Inbaze - актуальные инвестиционные предложения в Украине.',
        description: 'Изучайте и выбирайте предложения в которые можно вложить деньги',
    });

    const { data } = useQuery(INSTRUMENTS);
    const instruments = (data && data.instruments) || null;

    const [selectedInstrument, setSelectedInstrument] = useState('');
    const [open, setOpen] = useState(false);

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedInstrument('');
    };

    const handleOpenModal = (instrument) => {
        setOpen(true);
        setSelectedInstrument(instrument);
    };

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.imageContainer)}>
                <div className={cx(style.container)}>
                    <div className={cx(style.imageContent)}>
                        <h1 className={cx(style.title)}>Все доступные инвестиционные предложения в Украине</h1>
                        <div className={cx(style.subtitle)}>
                            Изучайте и выбирайте предложения, в которые можно вложить деньги
                        </div>
                        <Link to={{ pathname: '/proposals' }}>
                            <Button className={cx(style.button)} mainColor="#b2eaea" secondColor="#4349ba">
                                Перейти к предложениям
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <AdditionalBlok></AdditionalBlok>

            <div className={cx(style.instruments)}>
                <div className={cx(style.container)}>
                    <div className={cx(style.title)}>
                        Для удобства предложения распределены по основным направлениям инвестиций
                    </div>
                    <div className={cx(style.subtitle)}>
                        Выбирайте интересующие направления и изучайте доступные по ним предложения на рынке Украины
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
                <SubscribeModal instrument={selectedInstrument} />
            </Modal>
        </div>
    );
}
