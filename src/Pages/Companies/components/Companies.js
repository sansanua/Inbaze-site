import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import ScrollArea from 'react-scrollbar';

import { useMedia } from 'hooks/useMedia';

import Filter from 'containers/Filter';
import CompanyList from 'containers/CompanyList';

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
                        <Filter></Filter>
                    </ScrollArea>

                    <div className={cx(style.overlay)} onClick={handleToggleFilter}></div>
                </div>
            )}

            <div className={cx(style.container)}>
                <div className={cx(style.header)}>
                    <div className={cx(style.headerTitle)}>Инструменты для инвестирования</div>
                    <div className={cx(style.headerSubtitle)}>
                        Ознакомьтесь с видами инвестиционных инструментови узнайте особенности работы с ними
                    </div>
                </div>

                <div className={cx(style.content)}>
                    {!isTab && (
                        <div className={cx(style.filters)}>
                            <Filter></Filter>
                        </div>
                    )}

                    <div className={cx(style.list)}>
                        <CompanyList onFilterOpen={handleToggleFilter}></CompanyList>
                    </div>
                </div>
            </div>
        </div>
    );
}
