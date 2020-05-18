import 'react-tabs/style/react-tabs.css';

import React from 'react';
import cx from 'classnames';
import { get } from 'lodash';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Markdown from 'react-markdown';

import { useMedia } from 'hooks/useMedia';
import { DYNAMIC_TEXTS } from 'utils/dynamicTexts';

import Collapse from 'components/Collapse';

import style from './CompanyMainBlock.module.scss';

const structure = [
    {
        header: 'Суть',
        blocks: [
            {
                title: 'О компании',
                dataProp: 'aboutCompany',
            },
            {
                title: 'Процесс управления вашими деньгами:',
                dataProp: 'processOfManagingMoney',
            },
            {
                title: 'Процесс получения дохода:',
                dataProp: 'processOfGeneratingIncome',
            },
            {
                title: 'Валюта инвестиций:',
                dataProp: 'investmentCurrency',
                innerDataProp: 'name',
            },
            {
                title: 'Валюта получение дохода:',
                dataProp: 'currencyIncome',
                innerDataProp: 'name',
            },
            {
                title: 'Пошаговое описание сотрудничества:',
                dataProp: 'descriptionOfCooperation',
            },
        ],
    },
    {
        header: 'Доходность',
        blocks: [
            {
                title: 'Историческая доходность:',
                dataProp: 'historicalProfitability',
            },
            {
                title: 'Тип доходности:',
                dataProp: 'typeOfIncome',
                isDynamicText: true,
            },
            {
                title: 'Минимальный срок инвестиций:',
                dataProp: 'minimumInvestmentPeriod',
            },
            {
                title: 'Оптимальный срок инвестиций:',
                dataProp: 'optimalInvestmentPeriod',
            },
            {
                title: 'Процесс выплаты дохода:',
                dataProp: 'incomePaymentProcess',
            },
        ],
    },
    {
        header: 'Безопасность/гарантия',
        blocks: [
            {
                title: 'Риски потери инвестированных средств:',
                dataProp: 'risksOfLossInvested',
            },
            {
                title: 'Место хранения ваших средств:',
                dataProp: 'placeOfStorageFunds',
            },
            {
                title: 'Ликвидность вашей инвестиции:',
                dataProp: 'liquidityOfInvestment',
            },
        ],
    },
    {
        header: 'Комиссии',
        blocks: [
            {
                title: 'Комиссия компании:',
                dataProp: 'companyCommission',
            },
            {
                title: 'Прочие тарифы по обслуживанию (опционально):',
                dataProp: 'otherServiceCharges',
            },
            {
                title: 'Уплата налогов с вашего дохода:',
                dataProp: 'payingTaxesIncome',
            },
        ],
    },
    {
        header: 'Документы',
        blocks: [
            {
                title: 'Закрепление прав между инвестором и компанией:',
                dataProp: 'documentsSecuringRights',
                isMarkdown: true,
            },
            {
                title: 'Документы компании об их деятельности:',
                dataProp: 'documentsActivities',
                isMarkdown: true,
            },
            {
                title: 'Документы, которые потребуются от инвестора:',
                dataProp: 'documentsFromInvestor',
                isMarkdown: true,
            },
        ],
    },
];

const getContent = (data, block) => {
    if (Array.isArray(data)) {
        return data.map((c) => get(c, block.innerDataProp)).join(', ');
    }

    if (block.isDynamicText) {
        return DYNAMIC_TEXTS[data];
    }

    if (typeof data === 'boolean') {
        return data ? 'Да' : 'Нет';
    }

    if (block.isMarkdown) {
        return <Markdown source={data}/>;
    }

    return data;
};

export default function CompanyMainBlock(props) {
    const { isMobile } = useMedia();

    const renderBlock = (block) => {
        const data = get(props, block.dataProp);
        let content = getContent(data, block);

        return (
            <div className={cx(style.block)} key={block.title}>
                <div className={cx(style.blockTitle)}>{block.title}</div>
                <div className={cx(style.blockContent)}>{content}</div>
            </div>
        );
    };

    const renderMobile = () => {
        return (
            <div>
                {structure.map((tab) => (
                    <Collapse
                        key={tab.header}
                        className={cx(style.collapse)}
                        classNameHeader={cx(style.collapseHeader)}
                        header={<div className={cx(style.tabHeader)}>{tab.header}</div>}
                        content={<>{tab.blocks.map((block) => renderBlock(block))}</>}
                    />
                ))}
            </div>
        );
    };

    const renderDesktop = () => {
        return (
            <Tabs>
                <TabList>
                    {structure.map((tab) => (
                        <Tab key={tab.header}>{tab.header}</Tab>
                    ))}
                </TabList>

                {structure.map((tab) => (
                    <TabPanel>{tab.blocks.map((block) => renderBlock(block))}</TabPanel>
                ))}
            </Tabs>
        );
    };

    return <div className={cx(style.base)}>{isMobile ? renderMobile() : renderDesktop()}</div>;
}
