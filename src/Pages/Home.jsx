import React, { useContext,useEffect} from 'react'
import Header from '../components/Header/Header';
import Features from '../components/Features/Features';
import Exhibition from '../components/Exhibition/Exhibition';
import Links from '../components/Links/Links';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';
import News from '../components/News/News';

function Home() {

  return (
    <>
      <Header />
      <Features />
      <Exhibition />
      <Links />
      <News/>
      <Form />
   
      </>)}

export default Home