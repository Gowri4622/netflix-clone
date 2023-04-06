import React from "react";
import './App.scss';
import {Helmet} from "react-helmet";


import Header from './components/Header.js';
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/BrowsePage/Banner";
import Row from './components/BrowsePage/Row';
import requests from './components/BrowsePage/requests'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headersignout from "./components/Headersignout";
import FooterCompound from "./compounds/FooterCompound";
import OptFormCompound from "./compounds/OptFormCompound";
import JumboCompound from "./compounds/JumboCompound";
import Seperator from "./components/Seperator/Seperator";
import AccordionCompound from "./compounds/AccordionCompound";




function App() {
  return (
    <React.Fragment>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Netflix</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Netflix" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Header/>
              <HomeBanner/>
              <Seperator />
              <JumboCompound />
              <AccordionCompound />
              <OptFormCompound />
              <Seperator />
              <FooterCompound />
              
          
            </React.Fragment>
          }/>
          <Route path="/login" element={
            <React.Fragment>
              <Header/>
              <Login/>
              <FooterCompound/>
            </React.Fragment>
          }/>
          <Route path="/register" element={
            <React.Fragment>
              <Header/>
              <Login/>
              <FooterCompound/>
            </React.Fragment>
          }/>
          <Route path="/dashboard" element={
            <React.Fragment>
              <Headersignout/>
              <Banner />
        <Row 
        title = "NETFLIX ORIGINALS" 
        fetchUrl = {requests.fetchNetFlixOriginals}
        isLargeRow = {true}
        />
        <Row title = "Trending Now" fetchUrl = {requests.fetchTreding}/>
        <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
        <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Row title = "Horror Movies" fetchUrl = {requests.fetchHorroMovies}/>
        <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanticMovies}/>
        <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
        <FooterCompound/>
            </React.Fragment>
          }/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;