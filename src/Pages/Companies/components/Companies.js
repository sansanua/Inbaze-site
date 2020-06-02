import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import ScrollArea from 'react-scrollbar';
import StickyBox from 'react-sticky-box';

import { useMedia } from 'hooks/useMedia';

import Filter from 'containers/Filter';
import CompanyList from 'containers/CompanyList';

import Button from 'components/Button/Button';

import style from './Companies.module.scss';

export default function CompaniesComponent() {
    const { isTab } = useMedia();
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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
                <div className={cx(style.filtersMobileContainer, { [style.open]: isMobileFilterOpen })}>
                    <ScrollArea className={cx(style.filtersMobile)}>
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
                        />
                    </ScrollArea>

                    <div className={cx(style.overlay)} onClick={handleToggleFilter} />
                </div>
            )}

            <div className={cx(style.container)}>
                <div className={cx(style.header)}>
                    <div className={cx(style.headerTitle)}>Инструменты для инвестирования</div>
                    <div className={cx(style.headerSubtitle)}>
                        Ознакомьтесь с видами инвестиционных инструментов и узнайте особенности работы с ними
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
