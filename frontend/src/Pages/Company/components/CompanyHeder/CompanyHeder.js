import React from 'react';
import cx from 'classnames';

import { DYNAMIC_TEXTS } from 'utils/dynamicTexts';

import style from './CompanyHeder.module.scss';

const icons = [1, 2, 3];

export default function CompanyHeder({
    name,
    description,
    instruments,
    risk,
    complexity,
    minimumInvestmentAmount,
    historicalProfitability,
    investmentCurrency,
    liquidity,
    typeOfIncome,
}) {
    return (
        <div className={cx(style.base)}>
            {/* <div className={cx(style.logoContainer)}>logo</div> */}

            <div className={cx(style.nameContainer)}>
                <div className={cx(style.name)}>{name}</div>
                <div className={cx(style.instruments)}>
                    {instruments.map((i) => (
                        <div key={i.slug}>{i.name}</div>
                    ))}
                </div>
            </div>

            <div className={cx(style.infoContainer)}>
                <div className={cx(style.descriptionPart)}>
                    <div className={cx(style.iconsContainer)}>
                        <div className={cx(style.risk)}>
                            <div>Риск</div>
                            {icons.map((i) => (
                                <div key={i} className={cx(style.iconRisk, { [style.selected]: i <= risk })}></div>
                            ))}
                        </div>

                        <div className={cx(style.complexity)}>
                            <div>Сложность</div>
                            {icons.map((i) => (
                                <div
                                    key={i}
                                    className={cx(style.iconComplexity, { [style.selected]: i <= complexity })}
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div className={cx(style.description)}>{description}</div>
                </div>
                <div className={cx(style.amountPart)}>
                    <div className={cx(style.amount)}>
                        <div className={cx(style.wrapper)}>
                            <div className={cx(style.title)}>Минимальная сумма</div>
                            <div className={cx(style.number)}>
                                {minimumInvestmentAmount}
                                {investmentCurrency && investmentCurrency.length && investmentCurrency[0].symbol}
                            </div>
                        </div>

                        <div className={cx(style.liquidity)}>{DYNAMIC_TEXTS[liquidity]}</div>
                    </div>

                    <div className={cx(style.profitability)}>
                        <div className={cx(style.wrapper)}>
                            <div className={cx(style.title)}>Историческая доходность</div>
                            <div className={cx(style.number)}>{historicalProfitability}%</div>
                        </div>

                        <div className={cx(style.typeOfIncome)}>{DYNAMIC_TEXTS[typeOfIncome]}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
