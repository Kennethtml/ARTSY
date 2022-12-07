import React, { useContext,useEffect} from 'react'
import Header from '../components/Header/Header';
import Features from '../components/Features/Features';
import Exhibition from '../components/Exhibition/Exhibition';
import Links from '../components/Links/Links';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';
import { Context } from '../context';
function Home() {
 const{setToggle}= useContext(Context)

    useEffect(() => {
      setToggle(false);
    }, []);
  return (
    <>
      <Header />
      <Features />
      <Exhibition />
      <Links />
      <Form />
      <Footer />
    </>
  );
}

export default Home