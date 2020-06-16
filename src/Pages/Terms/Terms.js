import React from 'react';

import About from './components/Terms';

const header = `Условия использования`;

const text = `
Inbaze не несет ответственности за содержание размещенных на данной странице объявлений и достоверности информации. Мы не гарантируем качество представленных товаров и услуг и не возмещаем убытки, ущерб и потери, полученные в результате совершения сделок.
Содержимое предназначено только для информационных целей. Вы не должны использовать данную ​​информацию или другие материалы для принятий инвестиционных решений. Ничто из содержащегося на нашем Сайте не является предложением, рекомендацией или наставлением.
Весь контент на этом сайте - информационного характера и не затрагивает деятельность какого-либо конкретного физического или юридического лица. Ничто на сайте www.inbaze.com не является профессиональным и / или финансовым советом.
Все данные, которые представлены на сайте взяты в общем доступе, либо предоставлены сотрудниками компаний.
Вы несете единоличную ответственность за оценку расходов и рисков, связанных с использованием любой информации или другого содержимого данного сайта, прежде чем принимать какие-либо решения на основе информации представленной на сайте. В обмен на использование сайта вы соглашаетесь не привлекать www.Inbaze.com к ответственности за любые возможные претензии в отношении убытков, возникающих в результате любого решения, которое вы принимаете на основе информации или другого Содержимого, доступного вам на данном сайте.

`;

export default function AboutPage() {
    return <About header={header} text={text} />;
}