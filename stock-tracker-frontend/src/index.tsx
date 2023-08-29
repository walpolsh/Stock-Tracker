import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from '@apollo/client';
import {client} from './client';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('No root element found');
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);

reportWebVitals();
