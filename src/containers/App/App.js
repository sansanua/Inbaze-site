import React from 'react';

import { Switch, Route } from 'react-router-dom';

import '../../assets/index.scss';

import Header from '../Header';
import Footer from '../Footer';

import Main from 'Pages/Main';
import Companies from 'Pages/Companies';
import Company from 'Pages/Company';
import Instrument from 'Pages/Instrument';

function App() {
    return (
        <div className="App">
            <Header />

            <Switch>
                <Route path="/" component={Main} exact />

                <Route path="/companies" component={Companies} />
                <Route path="/company/:id" component={Company} />

                <Route path="/instrument/:slug" component={Instrument} />
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
