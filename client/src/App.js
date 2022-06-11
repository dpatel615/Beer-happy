import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
// import PrivateRoute from './utils/PrivateRoute';
// import PublicRoute from './utils/PublicRoute';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const axios = require("axios");
require('dotenv').config();

//IMPORT PAGES NEXT
import Home from './pages/Home';
// import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Header from './components/header';
import Footer from './components/footer';
const MY_KEY = '84afef0d27msh95902cd8aa80a21p1e269djsne3dc68e1ef89';
console.log(process.env);

//Connect to our API 
const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
  headers: {
    'X-RapidAPI-Key': '84afef0d27msh95902cd8aa80a21p1e269djsne3dc68e1ef89',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
  // console.log(process.env.API_KEY);
	console.error(error);
});

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
        <ApolloProvider client={client}>
          <Router>
          <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/Dashboard" 
                element={<Dashboard />}
              />
              <Route 
                path="/Profile" 
                element={<Profile />}
              />
               </Routes>
          </div>
          <Footer />
        </div>
          </Router>
        </ApolloProvider>
      //   <div className="App">
      // <BrowserRouter>
      //   <div>
      //     {/* <div className="header">
      //       <NavLink exact activeClassName="active" to="/">Home</NavLink>
      //       <NavLink activeClassName="active" to="/login">Login</NavLink><small></small>
      //       <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small></small>
      //     </div> */}

      //     <div className="content">
      //       <Routes>
      //         <Route exact path="/" element={<Home/>} />
      //         <Route path="/login" component={Login} />
      //         <Route path="/dashboard" component={Dashboard} />
      //       </Routes>
      //     </div>
      //   </div>
      // </BrowserRouter>
      
    // </div>
      );
  }

  export default App;