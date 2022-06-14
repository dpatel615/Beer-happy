import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Search from './components/search';



//IMPORT PAGES NEXT
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Header from './components/header';
import Footer from './components/footer';



// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
    uri: '/graphql',
  });

  //Construct request middleware for the JWT token
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',

      },
    };
  });

  
const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });


  
  function App() {
   
      return (
       
       
        <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/Login">Login</NavLink><small></small>
            <NavLink activeClassName="active" to="/Dashboard">Dashboard</NavLink><small></small>
            <NavLink activeClassName="active" to="/Profile">Profile</NavLink><small></small>
            
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Dashboard" element={<Dashboard/>} />
              <Route path="/Profile" element={<Profile/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Search/>
      
    
     <Footer className='footer' />   
    </div>

      );
  }

  export default App;