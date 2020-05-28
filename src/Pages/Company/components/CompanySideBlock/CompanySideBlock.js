import React, { useState } from 'react';
import cx from 'classnames';
import numeral from 'numeral';

import Button from 'components/Button/Button';
import RequestModal from 'containers/Modals/RequestModal';
import Modal from 'containers/Modals/Modal';

import style from './CompanySideBlock.module.scss';

export default function CompanySideBlock({
    site,
    startYear,
    capital,
    numberOfClients,
    investmentCurrency,
    onlineInvestmentStatusTracking,
}) {
    const [open, setOpen] = useState(false);
    const handleCloseModal = () => {
        setOpen(false);
    };

    const handleOpenModal = () => {
        setOpen(true);
    };

    let url = '';

    try {
        url = new URL(site);
    } catch (e) {}

    return (
        <div className={style.base}>
            <div className={cx(style.rowContainer)}>
                <div className={cx(style.row)}>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Сайт</div>
                        <div className={cx(style.value)}>
                            <a href={site} target="_blank" rel="noopener noreferrer">
                                {url.hostname || 'Перейти'}
                            </a>
                        </div>
                    </div>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Год основания</div>
                        <div className={cx(style.value)}>{startYear}</div>
                    </div>
                </div>
                <div className={cx(style.row)}>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Капитал</div>
                        <div className={cx(style.value)}>
                            {numeral(capital).format('0,0')} {investmentCurrency.symbol}
                        </div>
                    </div>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Количество-клиентов</div>
                        <div className={cx(style.value)}>{numberOfClients}</div>
                    </div>
                </div>
                <div className={cx(style.row)}>
                    <div className={cx(style.col, style.colFullWidth)}>
                        <div className={cx(style.title)}>Отслеживание статуса инвестиций онлайн</div>
                        <div className={cx(style.value)}>{onlineInvestmentStatusTracking ? 'Да' : 'Нет'}</div>
                    </div>
                </div>
            </div>
            <div className={cx(style.button)}>
                <Button type="lightBlueBlue" onClick={handleOpenModal}>
                    Оставить заявку
                </Button>
            </div>

            <Modal open={open} handleCloseModal={handleCloseModal}>
                <RequestModal />
            </Modal>
        </div>
    );
}
