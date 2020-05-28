import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { COMPANY } from 'api/queries/company';

import Company from './components/Company';
import Loader from 'components/Loader';

export default function CompanyPage() {
    const { id } = useParams();
    const { data, loading } = useQuery(COMPANY, {
        variables: {
            id,
        },
    });

    const company = (data && data.company) || null;

    if (loading) {
        return <Loader></Loader>;
    }

    if (!loading && !company) {
        return 'not found';
    }

    return <Company {...company} />;
}
