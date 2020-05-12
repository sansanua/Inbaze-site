export const instrumentsItems = [
    {
        name: 'ОВГЗ',
        slug: 'ovgz',
        description: `Облигация внутреннего государственного займа`,
        color: '#dce3ff',
        image: '/images/instruments/papka-01.svg',
        imageColored: '/images/instruments/papka-01-colored.svg',
        link: '/companies?ovgz',
    },
    {
        name: 'ПИФ',
        slug: 'pif',
        description: 'Паевой инвестиционныйфонд',
        color: '#dce3ff',
        image: '/images/instruments/diagrama-01.svg',
        imageColored: '/images/instruments/diagrama-01-colored.svg',
        link: '/companies?',
    },
    {
        name: 'НПФ',
        slug: 'npf',
        description: 'Негосударственный пенсионный фонд',
        color: '#dce3ff',
        image: '/images/instruments/schety-01.svg',
        imageColored: '/images/instruments/schety-01-colored.svg',
        link: '/companies?',
    },
    {
        name: 'Депозит',
        slug: 'depocit',
        description: 'Банковские вклады',
        color: '#b2eaea',
        image: '/images/instruments/bank-01.svg',
        imageColored: '/images/instruments/bank-01-colored.svg',
        link: '/companies?',
    },
    {
        name: 'Р2Р-кредитование',
        slug: 'p2p',
        description: `Кредитование частных и юридических лиц`,
        color: '#b2eaea',
        image: '/images/instruments/money-01.svg',
        imageColored: '/images/instruments/money-01-colored.svg',
        link: '/companies?',
    },
    {
        name: 'Доверительное управление',
        slug: 'ipo',
        description: 'Паевой инвестиционный фонд',
        color: '#dce3ff',
        image: '/images/instruments/handshake-02.svg',
        imageColored: '/images/instruments/handshake-02-colored.svg',
        link: '/companies?',
    },
    {
        name: 'Недвижимость',
        description: 'Акции публичных компаний',
        color: '#e8e8e8',
        image: '/images/instruments/property-01.svg',
        imageColored: '/images/instruments/property-01-colored.svg',
        link: '/companies?',
        disabled: true,
    },
    {
        name: 'Бизнес',
        description: 'Акции публичных компаний',
        color: '#e8e8e8',
        image: '/images/instruments/papka-01.svg',
        imageColored: '/images/instruments/papka-01-colored.svg',
        link: '/companies?',
        disabled: true,
    },
];

export const getColoredIcon = (slug) => {
    const instrument = instrumentsItems.filter((i) => i.slug === slug) || null;
    return instrument && instrument[0].imageColored;
};
