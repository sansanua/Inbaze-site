import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import StickyBox from 'react-sticky-box';

import { useMedia } from 'hooks/useMedia';

import Filter from 'containers/Filter';
import CompanyList from 'containers/CompanyList';

import Button from 'components/Button/Button';

import style from './Companies.module.scss';

export default function CompaniesComponent() {
    const { isTab } = useMedia();
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [isSlidingFilter, setIsSlidingFilter] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMobileFilterOpen ? 'hidden' : 'visible';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [isMobileFilterOpen]);

    const handleToggleFilter = () => {
        setIsMobileFilterOpen(!isMobileFilterOpen);
    };

    return (
        <div className={cx(style.base)}>
            {isTab && (
                <div
                    className={cx(style.filtersMobileContainer, {
                        [style.open]: isMobileFilterOpen,
                        [style.isSlidingFilter]: isSlidingFilter,
                    })}
                >
                    <div className={cx(style.filtersMobile)}>
                        <Filter
                            bottomContent={
                                <Button
                                    className={cx(style.applyButton)}
                                    type="lightBlueBlue"
                                    onClick={handleToggleFilter}
                                >
                                    Применить
                                </Button>
                            }
                            onStartSlide={() => setIsSlidingFilter(true)}
                            onEndSlide={() => setIsSlidingFilter(false)}
                        />
                    </div>

                    <div className={cx(style.overlay)} onClick={handleToggleFilter} />
                </div>
            )}

            <div className={cx(style.container)}>
                <div className={cx(style.header)}>
                    <h1 className={cx(style.headerTitle)}>Каталог предложений</h1>
                    <div className={cx(style.headerSubtitle)}>
                        Ознакомьтесь с предложениями, в которые можно вложить деньги
                    </div>
                </div>

                <div className={cx(style.content)}>
                    {!isTab && (
                        <StickyBox>
                            <div className={cx(style.filters)}>
                                <Filter />
                            </div>
                        </StickyBox>
                    )}

                    <div className={cx(style.list)}>
                        <CompanyList onFilterOpen={handleToggleFilter} />
                    </div>
                </div>
            </div>
        </div>
    );
}
