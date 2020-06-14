import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import useMetaTags from 'react-metatags-hook';

import { INSTRUMENT_BY_SLUG } from 'api/queries/instruments';

import Instrument from './components/Instrument';
import Loader from 'components/Loader';

export default function CompanyPage() {
    const { slug } = useParams();
    const { data, loading } = useQuery(INSTRUMENT_BY_SLUG, {
        variables: {
            slug,
        },
    });

    const instrument = (data && data.instruments && data.instruments.length && data.instruments[0]) || null;

    useMetaTags(
        {
            title: instrument?.name,
            description: instrument?.shortDescription,
        },
        [instrument]
    );

    if (loading) {
        return <Loader></Loader>;
    }
    console.log(instrument);
    if (!loading && !instrument) {
        return 'not found';
    }

    return <Instrument {...instrument} />;
}
