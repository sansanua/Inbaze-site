import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import App from './containers/App/App';
import client from './utils/apolloClient';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';

ReactDOM.render(
    <Router>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Router>,
    document.getElementById('root')
);
