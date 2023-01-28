import React from "react";
import Header from "./components/Header"
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NotFound from "./pages/NotFound";
import Kurs from "./pages/Kurs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


const client=new ApolloClient({
  uri:'https://coursesserver.onrender.com/graphql',
  cache:new InMemoryCache()
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurslar/:id" element={<Kurs />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
