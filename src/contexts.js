import * as React from 'react';

export const defaultContextValue = {
    dollarExchangeRate: 27
}

export const  GlobalDataContext = React.createContext(defaultContextValue)
