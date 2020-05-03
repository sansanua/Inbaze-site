import 'rc-slider/assets/index.css';

import React from 'react';
import cx from 'classnames';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import Collapse from 'components/Collapse';

import style from './SliderFilter.module.scss';

const SliderWithTooltip = createSliderWithTooltip(Slider);

export default function SliderFilter({ title, selectedFilter, expanded = false, min = 500, max = 1000000, onSelect }) {
    const handleBlur = (_value) => {
        onSelect(_value);
    };

    return (
        <div className={cx(style.filterBlok)}>
            <Collapse
                expanded={expanded}
                header={<div className={cx(style.filterBlokHeder)}>{title}</div>}
                content={
                    <div className={cx(style.filterBlokContent)}>
                        <SliderWithTooltip
                            defaultValue={selectedFilter}
                            min={500}
                            max={1000000}
                            step={500}
                            style={{ height: 50 }}
                            tipProps={{ visible: true, overlayClassName: style.tooltip, placement: 'bottom' }}
                            tipFormatter={(value) => <nobr>{value} $</nobr>}
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
                            railStyle={{ backgroundColor: 'transparent', height: 17, border: '1px solid #4349ba' }}
                            onAfterChange={handleBlur}
                        ></SliderWithTooltip>
                    </div>
                }
            ></Collapse>
        </div>
    );
}
