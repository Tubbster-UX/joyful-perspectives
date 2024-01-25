import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://us-west-2.cdn.hygraph.com/content/clrtf5o8c0myz01w69knw3p6d/master', // replace with your GraphQL API endpoint
  cache: new InMemoryCache()
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
  </ApolloProvider>,
)
