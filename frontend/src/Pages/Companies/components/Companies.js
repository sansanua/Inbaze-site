import React from 'react';
import cx from 'classnames';

import Filter from '../../../containers/Filter';
import CompanyList from '../../../containers/CompanyList';

import style from './Companies.module.scss';

export default function CompaniesComponent() {
    return (
        <div className={cx(style.base)}>
            <div className={cx(style.container)}>
                <div className={cx(style.header)}>
                    <div className={cx(style.headerTitle)}>Инструменты для инвестирования</div>
                    <div className={cx(style.headerSubtitle)}>
                        Ознакомьтесь с видами инвестиционных инструментови узнайте особенности работы с ними
                    </div>
                </div>

                <div className={cx(style.content)}>
                    <div className={cx(style.filters)}>
                        <Filter></Filter>
                    </div>
                    <div className={cx(style.list)}>
                        <CompanyList></CompanyList>
                    </div>
                </div>
            </div>
        </div>
    );
}
