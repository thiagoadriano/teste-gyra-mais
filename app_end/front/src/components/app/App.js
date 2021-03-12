import React from 'react';
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Router from '../../router';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

const App = () => {  
  return (
    <ApolloProvider client={client}>
      <Header />
      <main className="main">
          <Router />
      </main>
      <Footer />
    </ApolloProvider>
  );
};


export default App;
