export const instrumentsItems = [
    {
        slug: 'bonds',
        color: '#dce3ff',
        image: '/images/instruments/papka-01.svg',
        imageColored: '/images/instruments/papka-01-colored.svg',
    },
    {
        slug: 'pif',
        color: '#dce3ff',
        image: '/images/instruments/diagrama-01.svg',
        imageColored: '/images/instruments/diagrama-01-colored.svg',
    },
    {
        slug: 'npf',
        color: '#dce3ff',
        image: '/images/instruments/schety-01.svg',
        imageColored: '/images/instruments/schety-01-colored.svg',
    },
    {
        slug: 'depocit',
        color: '#b2eaea',
        image: '/images/instruments/bank-01.svg',
        imageColored: '/images/instruments/bank-01-colored.svg',
    },
    {
        slug: 'p2p',
        color: '#b2eaea',
        image: '/images/instruments/money-01.svg',
        imageColored: '/images/instruments/money-01-colored.svg',
    },
    {
        slug: 'dov',
        color: '#dce3ff',
        image: '/images/instruments/handshake-02.svg',
        imageColored: '/images/instruments/handshake-02-colored.svg',
    },
    {
        slug: 'business',
        color: '#dce3ff',
        image: '/images/instruments/case-01.svg',
        imageColored: '/images/instruments/case-01-colored.svg',
    },
    {
        slug: 'estate',
        color: '#dce3ff',
        image: '/images/instruments/property-01.svg',
        imageColored: '/images/instruments/property-01-colored.svg',
    },
];

export const getInstrument = (slug) => {
    const instrument = instrumentsItems.filter((i) => i.slug === slug) || null;
    return instrument && instrument[0];
};

export const getColoredIcon = (slug) => {
    const instrument = instrumentsItems.filter((i) => i.slug === slug) || null;
    return instrument && instrument[0].imageColored;
};
