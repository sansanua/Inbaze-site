import 'rc-slider/assets/index.css';

import React, { useContext } from 'react';
import cx from 'classnames';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import numeral from 'numeral';

import { GlobalDataContext } from 'contexts';

import Collapse from 'components/Collapse';

import style from './SliderFilter.module.scss';

const SliderWithTooltip = createSliderWithTooltip(Slider);

export default function SliderFilter({
    title,
    selectedFilter,
    expanded = false,
    min = 500,
    max = 135000,
    onSelect,
    onStartSlide,
    onEndSlide,
}) {
    const { dollarExchangeRate } = useContext(GlobalDataContext);

    const handleBlur = (_value) => {
        onSelect(_value);
        onEndSlide();
    };

    const formatValue = (value) => (
        <nobr>
            {numeral(value).format('0,0')} грн (~{numeral(value / dollarExchangeRate).format('0')} $)
        </nobr>
    );

    return (
        <div className={cx(style.filterBlok)}>
            <Collapse
                expanded={expanded}
                header={<div className={cx(style.filterBlokHeder)}>{title}</div>}
                content={
                    <div className={cx(style.filterBlokContent)}>
                        <div className={cx(style.titles)}>
                            <div>{min} грн</div>
                            <div>{max} грн</div>
                        </div>
                        <SliderWithTooltip
                            defaultValue={selectedFilter}
                            min={min}
                            max={max}
                            step={500}
                            style={{ height: 80 }}
                            tipProps={{
                                visible: true,
                                overlayClassName: style.tooltip,
                                placement: 'bottom',
                            }}
                            tipFormatter={formatValue}
                            trackStyle={{
                                backgroundColor: '#4349ba',
                                height: 17,
                                border: '1px solid #4349ba',
                                borderRadius: '6px 0 0 6px',
                            }}
                            handleStyle={{
                                height: 30,
                                width: 2,
                                marginTop: -6,
                                backgroundColor: '#4349ba',
                                border: 'none',
                                borderRadius: 0,
                            }}
                            railStyle={{
                                backgroundColor: 'transparent',
                                height: 17,
                                border: '1px solid #4349ba',
                            }}
                            onAfterChange={handleBlur}
                            onBeforeChange={onStartSlide}
                        />
                    </div>
                }
            />
        </div>
    );
}
