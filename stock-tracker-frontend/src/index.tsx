import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloProvider} from '@apollo/client';
import {client} from './client';
import {Provider} from 'react-redux';
import {store} from './store';
import {ThemeProvider} from '@emotion/react';
import {theme} from './theme';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('No root element found');
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
);

reportWebVitals();
