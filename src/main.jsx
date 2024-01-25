
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Services from './services.jsx'
import About from './about.jsx'
import Portfolio from './portfolio.jsx'
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
      <Router>
        <Navbar />
        <div className="animate-slide-in font-Cormorant-Garamond bg-cream">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </React.StrictMode>
  </ApolloProvider>,
)
