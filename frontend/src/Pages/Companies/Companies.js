import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { COMPANIES_FILTERED_BY_SLUG } from '../../api/queries/company';

import Companies from './components/Companies';

export default function CompaniesPage() {
    // const { data } = useQuery(COMPANIES_FILTERED_BY_SLUG, {
    //     variables: { slugs: ["pif"] },
    // });

    return <Companies />;
}
