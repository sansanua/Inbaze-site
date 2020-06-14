import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import useMetaTags from 'react-metatags-hook';

import { COMPANY } from 'api/queries/company';

import Company from './components/Company';
import Loader from 'components/Loader';

export default function CompanyPage() {
    const { slug } = useParams();
    const { data, loading } = useQuery(COMPANY, {
        variables: {
            slug,
        },
    });

    const company = (data && data.companies[0]) || null;

    useMetaTags(
        {
            title: company?.name,
            description: company?.description,
        },
        [company]
    );

    if (loading) {
        return <Loader></Loader>;
    }

    if (!loading && !company) {
        return 'not found';
    }

    return <Company {...company} />;
}
