import React from 'react';
import cx from 'classnames';

import InstrumentHeder from './InstrumentHeder';
import InstrumentMainBlock from './InstrumentMainBlock';
import InstrumentSideBlock from './InstrumentSideBlock';

import style from './Instrument.module.scss';

export default function InstrumentComponent(props) {
    //#region props
    const {
        complexity,
        description,
        howGenerateIncome,
        mainParameters,
        minusInvestment,
        name,
        plusInvestment,
        profitability,
        risk,
        shortDescription,
        slug,
    } = props;
    //#endregion

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.container)}>
                <InstrumentHeder name={name} slug={slug} shortDescription={shortDescription}></InstrumentHeder>

                <div className={cx(style.content)}>
                    <div className={cx(style.mainBlock)}>
                        <InstrumentMainBlock
                            name={name}
                            description={description}
                            howGenerateIncome={howGenerateIncome}
                            mainParameters={mainParameters}
                            minusInvestment={minusInvestment}
                            plusInvestment={plusInvestment}
                        ></InstrumentMainBlock>
                    </div>

                    <div className={cx(style.sideBlock)}>
                        <InstrumentSideBlock
                            slug={slug}
                            risk={risk}
                            complexity={complexity}
                            profitability={profitability}
                        ></InstrumentSideBlock>
                    </div>
                </div>
            </div>
        </div>
    );
}
