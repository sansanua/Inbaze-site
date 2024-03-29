import React from 'react';
import useMetaTags from 'react-metatags-hook';

import About from './components/Terms';

const header = `Условия использования`;

const text = `
УСЛОВИЯ И ПОЛОЖЕНИЯ

Inbaze и ее члены, должностные лица, директора, владельцы, сотрудники, агенты, представители, поставщики и поставщики услуг (совместно именуемые «Inbaze») предоставляют этот веб-сайт («Сайт») только в информационных целях. Использование и доступ к Сайту и информации, материалам, услугам и другому контенту, доступному на Сайте или через него («Контент»), регулируются настоящими условиями использования и всеми применимыми законами.


УСЛОВИЯ ОГРАНИЧЕНИЯ ОТВЕТСТВЕННОСТИ

1. Inbaze не несет ответственности за содержание размещенных на данной странице объявлений и достоверности информации. Мы не гарантируем качество представленных товаров и услуг и не возмещаем убытки, ущерб и потери, полученные в результате совершения сделок. Все данные, которые представлены на сайте взяты в общем доступе, либо предоставлены сотрудниками компаний.
2. Содержимое предназначено только для информационных целей. Вы не должны использовать данную ​​информацию или другие материалы для принятий инвестиционных решений. Ничто из содержащегося на нашем Сайте не является предложением, рекомендацией или наставлением.
3. Информация, содержащаяся на данном сайте, не может быть воспроизведена или использована для публикаций без письменного разрешения администрации портала «Inbaze.com». 
4. Вы несете единоличную ответственность за оценку расходов и рисков, связанных с использованием любой информации или другого содержимого данного сайта, прежде чем принимать какие-либо решения на основе информации представленной на сайте. В обмен на использование сайта вы соглашаетесь не привлекать www.Inbaze.com к ответственности за любые возможные претензии в отношении убытков, возникающих в результате любого решения, которое вы принимаете на основе информации или другого Содержимого, доступного вам на данном сайте.

`;

export default function AboutPage() {
    useMetaTags({
        title: 'Inbaze - Условия использования',
    });

    return <About header={header} text={text} />;
}
