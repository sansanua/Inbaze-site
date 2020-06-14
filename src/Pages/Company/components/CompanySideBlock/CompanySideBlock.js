import React, { useState } from 'react';
import cx from 'classnames';
import numeral from 'numeral';

import Button from 'components/Button/Button';
import RequestModal from 'containers/Modals/RequestModal';
import Modal from 'containers/Modals/Modal';

import style from './CompanySideBlock.module.scss';

const EMPTY_TEXT = 'Информация отсутствует';

export default function CompanySideBlock({
    site,
    startYear,
    capital,
    numberOfClients,
    investmentCurrency,
    name,
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
                            {url ? (
                                <a href={site} target="_blank" rel="noopener noreferrer">
                                    {url.hostname || 'Перейти'}
                                </a>
                            ) : (
                                EMPTY_TEXT
                            )}
                        </div>
                    </div>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Год основания</div>
                        <div className={cx(style.value)}>{startYear ? startYear : EMPTY_TEXT}</div>
                    </div>
                </div>
                <div className={cx(style.row)}>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Капитал</div>
                        <div className={cx(style.value)}>
                            {capital ? (
                                <span>
                                    {numeral(capital).format('0,0')} {investmentCurrency && investmentCurrency.symbol}
                                </span>
                            ) : (
                                EMPTY_TEXT
                            )}
                        </div>
                    </div>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Количество-клиентов</div>
                        <div className={cx(style.value)}>{numberOfClients ? numberOfClients : EMPTY_TEXT}</div>
                    </div>
                </div>
                <div className={cx(style.row)}>
                    <div className={cx(style.col, style.colFullWidth)}>
                        <div className={cx(style.title)}>Отслеживание статуса инвестиций онлайн</div>
                        <div className={cx(style.value)}>
                            <span>{onlineInvestmentStatusTracking ? 'Да' : 'Нет'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx(style.button)}>
                <Button type="lightBlueBlue" onClick={handleOpenModal}>
                    Оставить заявку
                </Button>
            </div>
            <div className={cx(style.arrowImage)}></div>

            <Modal open={open} handleCloseModal={handleCloseModal}>
                <RequestModal companyName={name} />
            </Modal>
        </div>
    );
}
