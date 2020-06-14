import React from 'react';
import useMetaTags from 'react-metatags-hook';

import Companies from './components/Companies';

export default function CompaniesPage() {
    useMetaTags({
        title: 'Инвестиционные предложения',
        description: 'Выбирайте инструменты в которые можно инвестировать и ознакомьтесь с доступными предложениями',
    });

    return <Companies />;
}
