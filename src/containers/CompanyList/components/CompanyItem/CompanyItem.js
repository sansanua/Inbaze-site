import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import numeral from 'numeral';

import Divider from 'components/Divider';

import style from './CompanyItem.module.scss';

const icons = [1, 2, 3];

export default function CompanyItem({
    id,
    complexity,
    description,
    historicalProfitability,
    secondHistoricalProfitability,
    instruments,
    investmentCurrency,
    secondInvestmentCurrency,
    minimumInvestmentAmount,
    secondMinimumInvestmentAmount,
    name,
    risk,
    image,
    slug,
}) {
    return (
        <Link to={`/company/${slug}`}>
            <div className={cx(style.base)}>
                <div className={cx(style.logoContainer)}>
                    {image ? <img src={image.url} alt="" /> : <div className={cx(style.noImage)} />}
                </div>

                <div className={cx(style.nameContainer)}>
                    <div className={cx(style.instruments)}>
                        {instruments.map((i) => (
                            <div key={i.slug}>{i.name}</div>
                        ))}
                    </div>
                    <div className={cx(style.name)}>{name}</div>
                </div>

                <div className={cx(style.infoContainer)}>
                    <div className={cx(style.descriptionPart)}>
                        <div className={cx(style.iconsContainer)}>
                            <div className={cx(style.risk)}>
                                <div>Риск</div>
                                {icons.map((i) => (
                                    <div key={i} className={cx(style.iconRisk, { [style.selected]: i <= risk })} />
                                ))}
                            </div>

                            <div className={cx(style.complexity)}>
                                <div>Сложность</div>
                                {icons.map((i) => (
                                    <div
                                        key={i}
                                        className={cx(style.iconComplexity, { [style.selected]: i <= complexity })}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className={cx(style.description)}>{description}</div>
                    </div>

                    <div className={cx(style.amountPart)}>
                        <div className={cx(style.amount)}>
                            <div className={cx(style.title)}>Минимальная сумма</div>
                            <div className={cx(style.number)}>
                                <nobr>
                                    {numeral(minimumInvestmentAmount).format('0,0')}{' '}
                                    {investmentCurrency && investmentCurrency.symbol}
                                </nobr>
                            </div>
                            {secondInvestmentCurrency && (
                                <div className={cx(style.number)}>
                                    <span>&nbsp;/&nbsp;</span>
                                    <nobr>
                                        {numeral(secondMinimumInvestmentAmount).format('0,0')}{' '}
                                        {secondInvestmentCurrency && secondInvestmentCurrency.symbol}
                                    </nobr>
                                </div>
                            )}
                        </div>

                        <Divider color="#b2eaea" margin={15} />

                        <div className={cx(style.profitability)}>
                            <div className={cx(style.title)}>Историческая доходность</div>
                            <nobr>
                                <div className={cx(style.number)}>{historicalProfitability}%</div>
                            </nobr>
                            {secondInvestmentCurrency && (
                                <div className={cx(style.number)}>
                                    <span>&nbsp;/&nbsp;</span>
                                    <nobr>
                                        {secondHistoricalProfitability}
                                        <span>%</span>
                                    </nobr>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={cx(style.arrow)} />
            </div>
        </Link>
    );
}
