import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import 'assets/index.scss';

import { GLOBAL } from '../../api/queries/global';
import {GlobalDataContext, defaultContextValue} from 'contexts';

import Header from '../Header';
import Footer from '../Footer';

import Main from 'Pages/Main';
import Companies from 'Pages/Companies';
import Company from 'Pages/Company';
import Instrument from 'Pages/Instrument';

function App() {
    const { data } = useQuery(GLOBAL);

    const globalData = data ? data.global : null

    return (
        <div className="App">
            <GlobalDataContext.Provider value={globalData || defaultContextValue}>
                <Header />

                <Switch>
                    <Route path="/" component={Main} exact />

                    <Route path="/companies" component={Companies} />
                    <Route path="/company/:id" component={Company} />

                    <Route path="/instrument/:slug" component={Instrument} />
                </Switch>

                <Footer />
            </GlobalDataContext.Provider>
        </div>
    );
}

export default App;
